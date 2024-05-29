import React from "react";
import { alterarTom, getTons } from "../assets/tom";
import { setViewDiv } from "../assets/tools";
import CifraPage from "../pages/CifraPage";
import { alterarCapo, getCapo } from "../assets/capotraste";

function Linha(props) {
    const tons = getTons(props.isRelativa)
    return (
        <li>
            <main className={`flex w-[23vw] max-lg:w-[80vw] justify-between ${props.margim} h-[2rem]`}>
                <p className="text-white hover:text-gray-400 cursor-pointer shrink mr-5 flex-auto overflow-hidden whitespace-nowrap text-ellipsis" onClick={() => props.trocarPagina(<CifraPage chave={props.chave} trocarPagina={props.trocarPagina} estrutura={props.estrutura} />)}>
                    <u>{props.titulo}</u>
                </p> 
                <div className="shrink-0">
                    <span className="shrink-0 w-[6.35rem] mr-2">Tom: [ <button onClick={() => setViewDiv('caixa-tons', props.index)}><span className="text-white hover:text-gray-400">{props.tom}</span></button> ]</span>
                    <select className="rounded-xl bg-white/10 *:bg-red-900/70 *:text-center" onChange={e => alterarCapo(props.chave, e.target.value, props.estrutura)} value={getCapo(props.chave, props.estrutura)}>
                        <option value="0">Sem Capo</option>
                        {Array.from({ length: 12 }, (_, index) => (<option key={index + 1} value={index + 1}>{index + 1}</option>))}
                    </select>
                </div>
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