import React, { useEffect, useState } from "react";
import { getPreparacao, mudarTom } from "../assets/tom";
import SetasTom from "./SetasTom";
import ButtonRoll from "./ButtonRoll";
import ButtonSimplificar from "./ButtonSimplificar";

function Cifra(props) {
    const [tipoCifra, setTipoCifra] = useState(0)
    const [acordes, setAcordes] = useState(props.acordes[tipoCifra])
    const [letra, setLetra] = useState(props.letra[tipoCifra])
    const [tom, setTom] = useState(props.tom)
    useEffect(() => {
        mudarTom(props.tomPadrao, tom, setTom, acordes, setAcordes, letra, setLetra, props.isRelativa)
    }, [tipoCifra]) // eslint-disable-line
    return (
        <div>
            <div className="flex gap-3 mt-3">
                <SetasTom chave={props.chave} acordes={acordes} setAcordes={setAcordes} letra={letra} setLetra={setLetra} tomAtual={tom} setTom={setTom} isRelativa={props.isRelativa} />
                <ButtonRoll />
                {props.letra[1] ? <ButtonSimplificar letra={props.letra} setLetra={setLetra} acordes={props.acordes} setAcordes={setAcordes} tipo={tipoCifra} setTipo={setTipoCifra}/> : null}
            </div>
            <p className="mb-5">Preparação: [ <span className="text-orange-900">{getPreparacao(acordes[0], props.preparacao, props.tomPadrao, tom)}</span> ]</p>
            <pre className="*:block max-sm:w-min">
                {letra}
            </pre>
        </div>
    )
}

export default Cifra