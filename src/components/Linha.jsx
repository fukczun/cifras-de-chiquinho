import React from "react";
import { alterarTom, getTons } from "../assets/tom";
import { setViewDiv } from "../assets/tools";
import CifraPage from "../pages/CifraPage";

function Linha(props) {
    const tons = getTons(props.isRelativa)

    return (
        <li>
            <main className={`flex justify-between gap-9 ${props.margim}`}>
                <p className="text-white hover:text-gray-400 cursor-pointer" onClick={() => props.trocarPagina(<CifraPage chave={props.chave} trocarPagina={props.trocarPagina} estrutura={props.estrutura} />)}><u>{props.titulo}</u></p> <span>Tom: [ <button onClick={() => setViewDiv('caixa-tons', props.index)}><span className="text-white hover:text-gray-400">{props.tom}</span></button> ]</span>
            </main>
            <div className="caixa-tons hidden grid-cols-4 my-5 block">
                {tons.map((nota, index) =>
                    <button className="hover:bg-gray-100/10 py-1" onClick={() => alterarTom(props.chave, nota, props.estrutura)} key={`button-${props.index}-${index}`}>
                        {nota}
                    </button>)}
            </div>
        </li>
    )
}

export default Linha