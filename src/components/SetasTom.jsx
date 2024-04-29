import React, { useEffect } from "react";
import { aumentarTons, baixarTons, getTons, mudarTom } from "../assets/tom";
import { esconderAoClicarFora, setViewDiv } from "../assets/tools";
import Seta from "./Seta";

function SetasTom(props) {
    const tons = getTons(props.isRelativa)

    useEffect(() => {
        esconderAoClicarFora('caixa-tons', 'button-caixa-tons')
    }, []);

    return (
        <span className="flex flex-col">
            <div className="flex items-center gap-3">
                <p className="w-[6vw] max-sm:w-[19vw]">Tom: <button onClick={() => setViewDiv('caixa-tons')} className="button-caixa-tons px-2 rounded-xl text-orange-900 hover:text-gray-100 bg-gray-100/20 hover:bg-orange-900"><b>{props.tomAtual}</b></button></p>
                <Seta onclick={() => aumentarTons(props.tomAtual, props.setTom, props.acordes, props.setAcordes, props.letra, props.setLetra)} content="↑" />
                <Seta onclick={() => baixarTons(props.tomAtual, props.setTom, props.acordes, props.setAcordes, props.letra, props.setLetra)} content="↓" />
            </div>
            <div className="caixa-tons absolute top-1 left-16 z-10 hidden bg-neutral-400/80 m-1 rounded-xl grid-cols-4">
                {tons.map((nota, index) =>
                    <button className={`text-orange-900 hover:bg-orange-900/30 hover:text-neutral-200 py-1 px-4 ${index === 0 ? 'rounded-tl-xl' : index === 3 ? 'rounded-tr-xl' : index === tons.length - 4 ? 'rounded-bl-xl' : index === tons.length - 1 ? 'rounded-br-xl' : ''}`} onClick={e => mudarTom(props.tomAtual, nota, props.setTom, props.acordes, props.setAcordes, props.letra, props.setLetra, props.isRelativa)} key={`button-${index}`}>
                        {nota}
                    </button>)}
            </div>
        </span>
    )
}

export default SetasTom