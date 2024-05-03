import React, { useEffect, useState } from "react";
import { getPreparacao, mudarTom } from "../assets/tom";
import SetasTom from "./SetasTom";
import ButtonRoll from "./ButtonRoll";

function Cifra(props) {
    const [acordes, setAcordes] = useState(props.acordes)
    const [letra, setLetra] = useState(props.letra)
    const [tom, setTom] = useState(props.tom)

    useEffect(() => {
        mudarTom(props.tomPadrao, tom, setTom, acordes, setAcordes, letra, setLetra, props.isRelativa)
    }, []) // eslint-disable-line
    return (
        <div>
            <div className="flex gap-3 mt-3">
                <SetasTom chave={props.chave} acordes={acordes} setAcordes={setAcordes} letra={letra} setLetra={setLetra} tomAtual={tom} setTom={setTom} isRelativa={props.isRelativa} />
                <ButtonRoll />
            </div>
            <p className="mb-5">Preparação: [ <span className="text-orange-900">{getPreparacao(acordes[0], props.preparacao, props.tomPadrao, tom)}</span> ]</p>
            <pre className="*:block max-sm:w-min">
                {letra}
            </pre>
        </div>
    )
}

export default Cifra