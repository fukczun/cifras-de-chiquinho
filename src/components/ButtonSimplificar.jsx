import React from "react";
import { simplificarCifra } from "../assets/cifras";

function ButtonSimplificar(props) {
    return (
        <button className="simplificar inline text-xs w-[6rem] max-sm:w-[4rem] h-11 text-orange-800 hover:text-white border border-orange-800 hover:bg-orange-800 font-medium rounded-lg text-sm px-3 max-sm:px-0 text-center me-2 max-sm:me-0 mb-2" onClick={() => simplificarCifra(props.letra, props.setLetra, props.setLetraComCapo, props.acordes, props.setAcordes, props.tipo, props.setTipo)}>
            Simplificar
        </button>
    )
}

export default ButtonSimplificar