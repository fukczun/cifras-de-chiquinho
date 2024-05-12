import { mudarTom } from "./tom"

export function getCifra(cifra, estrutura, chave) {
    cifra.tom = getTom(cifra.tomPadrao, chave, estrutura)
    cifra.estrutura = estrutura
    return cifra
}

function getTom(tomPadrao, chave, estrutura) {
    const tonsCifrasLocalStorage = JSON.parse(localStorage.getItem("tons-cifras"))
    if (!tonsCifrasLocalStorage) return tomPadrao
    const estruturaLocalStorage = tonsCifrasLocalStorage[estrutura]
    return estruturaLocalStorage && estruturaLocalStorage[chave] ? estruturaLocalStorage[chave] : tomPadrao
}

export function getLetra(letra, acordes) {
    const linhas = letra.split('\n')

    for (let i = 0; i < linhas.length; i++) {
        let linha = linhas[i]
        let contemNotas
        if (linha.trim() !== "") {
            linha = linhas[i].split(/(\s+)/)
            contemNotas = linha.filter(palavra => palavra.trim() !== "").every(palavra => acordes.includes(palavra))
        }

        if (linha === "") linhas[i] = " "

        if (!contemNotas) linhas[i] = <span key={i}>{linhas[i]}</span>
        else {
            linhas[i] = <span key={i} className="text-orange-900">{linhas[i]}</span>
        }
    }
    return linhas
}

export function getAcordes(letra, acordes) {
    const linhas = letra.split('\n')
    let notasCifra = []

    for (let i = 0; i < linhas.length; i++) {
        const linha = linhas[i].split(/(\s+)/)
        const contemNotas = linha.filter(palavra => palavra.trim() !== "").every(palavra => acordes.includes(palavra))

        if (contemNotas) notasCifra = notasCifra.concat(linhas[i].split(/\s+/))
    }
    return Array.from(new Set(notasCifra)).filter(notaCifra => notaCifra)
}

export function simplificarCifra(letra, setLetra, acordes, setAcordes, tipo, setTipo) {
    const buttonSimplificar = document.getElementsByClassName('simplificar')[0]
    const novoTipo = tipo === 0 ? 1 : 0

    setLetra(letra[novoTipo])
    setAcordes(acordes[novoTipo])
    setTipo(novoTipo)
    buttonSimplificar.innerText = tipo === 0 ? 'Simplificar' : 'Original'
}