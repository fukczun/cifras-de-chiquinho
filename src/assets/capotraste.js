import { getTomCapo, mudarTom } from "./tom"

export function alterarCapo(chave, novoCapo, estrutura) {
    const capoCifras = JSON.parse(localStorage.getItem("capo-cifras")) || {}
    if (!capoCifras[estrutura]) capoCifras[estrutura] = {}
    capoCifras[estrutura][chave] = novoCapo
    localStorage.setItem("capo-cifras", JSON.stringify(capoCifras))
    window.location.reload()
}

export function getCapo(chave, estrutura) {
    const capoCifrasLocalStorage = JSON.parse(localStorage.getItem("capo-cifras"))
    if (!capoCifrasLocalStorage) return 0
    const estruturaLocalStorage = capoCifrasLocalStorage[estrutura]
    return estruturaLocalStorage && estruturaLocalStorage[chave] ? estruturaLocalStorage[chave] : 0
}

export function selectCapo(setCapo, novoCapo, tomAtual, tomAtualComCapo, setTom, setTomComCapo, acordes, setAcordes, letra, setLetra, setLetraComCapo, isRelativa) {
    setCapo(novoCapo)
    mudarTom (tomAtual, tomAtualComCapo, tomAtual, setTom, getTomCapo(tomAtual, novoCapo), setTomComCapo, acordes, setAcordes, letra, setLetra, setLetraComCapo, isRelativa)
}