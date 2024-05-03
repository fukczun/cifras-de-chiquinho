import React, { useEffect } from "react";
import Cifra from "../components/Cifra";
import ButtonPlay from "../components/ButtonPlay"
import { alterarInputScrool, progressRange, renderizarScrollInput } from "../assets/scrool";
import { setViewDiv } from "../assets/tools";
import { cifras } from "../data/cifras";
import { repertorios } from "../data/repertorios";
import ButtonReturn from "../components/ButtonReturn";
import Home from "./Home";


function CifraPage(props) {
    useEffect(() => {
        renderizarScrollInput()
        progressRange()
    }, []);

    const cifrasRepertorios = props.estrutura === 'geral' ? cifras : repertorios[props.estrutura].cifras

    const handleKeyDown = (event) => {
        if (event.key === " " || event.key === "Enter") {
            event.preventDefault()

            const buttonPlay = document.getElementsByClassName("play")[0]
            if (buttonPlay) {
                buttonPlay.click()
            }
        }

        if (event.key === 'Escape') {
            event.preventDefault()
            const divScrool = document.getElementsByClassName('scrool')[0]
            if (divScrool.style.display) {
                setViewDiv('scrool', 'flex')
            }
        }

        if (event.key === "ArrowLeft") {
            alterarInputScrool(-10)
        }

        if (event.key === "ArrowRight") {
            alterarInputScrool(10)
        }
    }

    return (
        <section className="cifra-page flex relative flex-wrap content-start justify-center bg-gradient-to-bl from-stone-900 to-red-800 min-w-min min-h-screen max-sm:min-h-min max-sm:w-min py-5 max-sm:py-0 items-center" onKeyDown={handleKeyDown} tabIndex={-1}>
            <div className="cifra-page-sm relative w-min min-w-[33rem] mx-auto bg-gray-100/50 py-3 px-4 max-sm:px-2 max-sm:w-screen max-sm:min-w-0 max-sm:min-h-screen rounded-xl max-sm:rounded-none">
                <header className="font-poppins z-0">
                    <h1 className="text-4xl max-sm:text-2xl max-xs:text-xl max-2xs:text-base max-w-[80%] max-sm:max-w-[70%] ">{cifras[props.chave].titulo}</h1>
                    <h2 className="text-2xl max-sm:text-lg max-xs:text-base max-2xs:text-xs">{cifras[props.chave].autor}</h2>
                </header>
                <ButtonReturn onclick={() => props.trocarPagina(<Home trocarPagina={props.trocarPagina} />)} />
                <div className="max-sm:text-xs max-xs:text-[0.6rem] max-2xs:text-[0.5rem]">
                    <Cifra acordes={cifrasRepertorios[props.chave].acordes} letra={cifrasRepertorios[props.chave].letra} chave={props.chave} tom={cifrasRepertorios[props.chave].tom} tomPadrao={cifrasRepertorios[props.chave].tomPadrao} isRelativa={cifrasRepertorios[props.chave].isRelativa} preparacao={cifrasRepertorios[props.chave].preparacao} />
                </div>
            </div>
            <div className="scrool items-center justify-evenly hidden fixed bg-neutral-600/60 w-[30%] max-sm:w-[75%] h-[4%] rounded-lg">
                <ButtonPlay />
                <input className="w-[85%] h-2 outline-none" onInput={progressRange} type="range" min="1" max="100" />
            </div>
        </section>)
}

export default CifraPage