import React from "react";
import { selectCapo } from "../assets/capotraste";

function SelectCapo(props) {
    return (
        <select className="rounded-xl bg-white/10 h-11 text-orange-800 *:bg-red-900/70 *:text-center" onChange={e => selectCapo(props.setCapo, e.target.value, props.tomAtual, props.tomAtualComCapo, props.setTom, props.setTomComCapo, props.acordes, props.setAcordes, props.letra, props.setLetra, props.setLetraComCapo, props.isRelativa)} value={props.capo}>
            <option value="0">Sem Capo</option>
            {Array.from({ length: 12 }, (_, index) => (<option key={index + 1} value={index + 1}>{index + 1}</option>))}
        </select>
    )
}

export default SelectCapo