import React, { useState } from "react";
import { cifras } from "../data/cifras";
import { repertorios } from "../data/repertorios";
import Linha from "../components/Linha";

function Home(props) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    const filteredCifras = Object.keys(cifras).filter((cifraNome) =>
        cifras[cifraNome].titulo.toLowerCase().includes(searchTerm.toLowerCase()) || cifras[cifraNome].autor.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const filteredRepertorios = Object.keys(repertorios).map((repertorio) => {
        const filteredCifrasRepertorio = Object.keys(repertorios[repertorio].cifras).filter((cifraNome) =>
            repertorios[repertorio].cifras[cifraNome].titulo.toLowerCase().includes(searchTerm.toLowerCase()) || repertorios[repertorio].cifras[cifraNome].autor.toLowerCase().includes(searchTerm.toLowerCase())
        )
        return {
            ...repertorios[repertorio],
            cifras: filteredCifrasRepertorio.reduce((acc, cifraNome) => {
                acc[cifraNome] = repertorios[repertorio].cifras[cifraNome]
                return acc;
            }, {}),
        }
    })

    return (
        <div className="home min-h-screen bg-gradient-to-bl from-stone-900 to-red-800 flex flex-col">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Pesquisar músicas..."
                className="p-2 rounded-xl text-xl max-sm:text-lg bg-white/10 text-white text-center mx-auto w-[50vw] mt-3 max-lg:w-[70vw]"
            />
            <div className="flex flex-row-reverse max-lg:flex-col-reverse justify-end min-h-screen">
                <div className="mx-auto z-10">
                    <div className="flex flex-col gap-10 pt-5 *:mx-auto">
                        {filteredCifras.length > 0 && (
                            <>
                                <h1 className="font-poppins text-5xl rounded-xl bg-white/10 text-white px-5 py-3">Cifras</h1>
                                <ul className="p-5 rounded-xl text-xl max-sm:text-lg *:bg-white/10 *:text-white *:rounded-xl *:px-5 *:py-0.5 *:mb-3">
                                    {filteredCifras.map((cifraNome, index) => {
                                        const cifra = cifras[cifraNome];
                                        return (
                                            <Linha
                                                key={`linha-${index}`}
                                                titulo={cifra.titulo}
                                                index={index}
                                                tom={cifra.tom}
                                                chave={cifraNome}
                                                isRelativa={cifra.isRelativa}
                                                estrutura={cifra.estrutura}
                                                margim={'my-2'}
                                                trocarPagina={props.trocarPagina}
                                            />
                                        );
                                    })}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
                <div className="absolute size-full max-lg:relative max-lg:ml-0 grid max-lg:block grid-cols-2 justify-items-center gap-x-[25rem] gap-y-4 z-0 pb-6 max-lg:pb-0">
                    {filteredRepertorios.map((repertorio, index) => {
                        const cifrasRepertorio = repertorio.cifras;
                        const tituloRepertorio = repertorio.titulo;
                        return (
                            Object.keys(cifrasRepertorio).length > 0 && (
                                <div key={`repertorio-${index}`} className="flex flex-col min-w-[20rem] gap-10 pt-5 *:mx-auto *:bg-white/10 *:text-white">
                                    <h1 className="font-poppins text-5xl px-5 py-3 rounded-xl text-center max-w-[70%] break-words">{tituloRepertorio}</h1>
                                    <ul className="p-5 rounded-xl text-xl max-sm:text-lg">
                                        {Object.keys(cifrasRepertorio).map((cifraNome, indexCifra) => {
                                            const cifra = cifrasRepertorio[cifraNome];
                                            const keys = Object.keys(repertorios);
                                            const cifrasRepertoriosPassados = keys
                                                .filter((_, indexRepertorio) => indexRepertorio < index)
                                                .reduce((acc, currentKey) => {
                                                    return acc + Object.keys(repertorios[currentKey].cifras).length;
                                                }, 0);
                                            return (
                                                <Linha
                                                    key={`linha-${(Object.keys(cifras).length) + cifrasRepertoriosPassados + indexCifra}`}
                                                    titulo={cifra.titulo}
                                                    index={(Object.keys(cifras).length) + cifrasRepertoriosPassados + indexCifra}
                                                    tom={cifra.tom}
                                                    chave={cifraNome}
                                                    isRelativa={cifra.isRelativa}
                                                    estrutura={cifra.estrutura}
                                                    margim={'mb-5'}
                                                    trocarPagina={props.trocarPagina}
                                                />
                                            );
                                        })}
                                    </ul>
                                </div>
                            )
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
