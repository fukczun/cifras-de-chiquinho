import React, { useEffect, useState } from "react";
import { adicionarCapo, getPreparacao, getTomCapo, mudarTom } from "../assets/tom";
import SetasTom from "./SetasTom";
import ButtonRoll from "./ButtonRoll";
import ButtonSimplificar from "./ButtonSimplificar";
import { getCapo } from "../assets/capotraste";
import SelectCapo from "./SelectCapo";

function Cifra(props) {
    const [tipoCifra, setTipoCifra] = useState(0)
    const [acordes, setAcordes] = useState(props.acordes[tipoCifra])
    const [letra, setLetra] = useState(props.letra[tipoCifra])
    const [tom, setTom] = useState(props.tom)

    const [capo, setCapo] = useState(getCapo(props.chave, props.estrutura))
    const [letraComCapo, setLetraComCapo] = useState(props.letra[tipoCifra])
    const [tomComCapo, setTomComCapo] = useState(getTomCapo(props.tom, capo))

    useEffect(() => {
        mudarTom(props.tomPadrao, tomComCapo, tom, setTom, tomComCapo, setTomComCapo, acordes, setAcordes, letra, setLetra, setLetraComCapo, props.isRelativa, capo)
    }, [tipoCifra]) // eslint-disable-line

    useEffect(() => {
        adicionarCapo(capo, tom);
    }, [capo, tom]) 

    return (
        <div>
            <div className="flex max-lg:flex-col *:flex *:gap-3 *:mt-3">
                <div>
                    <SetasTom acordes={acordes} setAcordes={setAcordes} letra={letra} setLetra={setLetra} setLetraComCapo={setLetraComCapo} tomAtual={tom} setTom={setTom} tomAtualComCapo={tomComCapo} setTomComCapo={setTomComCapo} isRelativa={props.isRelativa} capo={capo} />
                    <ButtonRoll />
                </div>
                <div className="max-lg:mt-0">
                    <SelectCapo setCapo={setCapo} tomAtual={tom} tomAtualComCapo={tomComCapo} setTom={setTom} setTomComCapo={setTomComCapo} acordes={acordes} setAcordes={setAcordes} letra={letra} setLetra={setLetra} setLetraComCapo={setLetraComCapo} isRelativa={props.isRelativa} capo={capo}/>
                    {props.letra[1] ? <ButtonSimplificar letra={props.letra} setLetra={setLetra} acordes={props.acordes} setAcordes={setAcordes} tipo={tipoCifra} setTipo={setTipoCifra}/> : null}
                </div>
            </div>
            <p className="mb-5">Preparação: [ <span className="text-orange-900">{getPreparacao(getTomCapo(acordes[0], capo), getTomCapo(props.preparacao, capo), props.tomPadrao, tom, props.isRelativa)}</span> ]</p>
            <pre className="*:block max-sm:w-min">
                {letraComCapo}
            </pre>
        </div>
    )
}

export default Cifra