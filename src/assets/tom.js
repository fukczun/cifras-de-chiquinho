import { tirarAspas } from "./tools";

export function getTons(isRelativa) {
    const tons = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B']
    const tonsRelativos = ['Am', 'Bbm', 'Bm', 'Cm', 'C#m', 'Dm', 'D#m', 'Em', 'Fm', 'F#m', 'Gm', 'G#m']
    return isRelativa ? tonsRelativos : tons
}

function dividirAcorde(acorde, referencia) {
    const index = acorde.indexOf(referencia)
    return [acorde.slice(0, index), acorde.slice(index)]
}

function tomResto(acorde, tons) {
    if (acorde.includes('/')) return acorde.split('/')
    else if (acorde.includes('m') && tons.includes(dividirAcorde(acorde, 'm')[0])) return dividirAcorde(acorde, 'm')
    else if (acorde.includes('9')) return dividirAcorde(acorde, '9')
    else if (acorde.includes('8')) return dividirAcorde(acorde, '8')
    else if (acorde.includes('7')) return dividirAcorde(acorde, '7')
    else if (acorde.includes('4')) return dividirAcorde(acorde, '4')
    else if (acorde.includes('º')) return dividirAcorde(acorde, 'º')
    return [acorde, '']
}

export function getPreparacao(primeiroAcorde, preparacao, tomAtual, novoTom, isRelativa) {
    const tons = getTons(isRelativa)
    const quantTons = tons.length
    if (preparacao) {
        const [tomTomAtual,] = tomResto(tomAtual, tons)
        const [tomNovoTom,] = tomResto(novoTom, tons)

        const tomAtualIndex = tons.indexOf(tomTomAtual)
        const novoTomIndex = tons.indexOf(tomNovoTom)
        const diferenca = novoTomIndex - tomAtualIndex

        const preparacaoIndex = tons.indexOf(preparacao)
        return tons[((preparacaoIndex + diferenca) % quantTons) % quantTons]
    }
    const [tom,] = tomResto(primeiroAcorde, tons)
    const primeiroAcordeIndex = tons.indexOf(tom)
    return tons[(primeiroAcordeIndex - 5 + quantTons) % quantTons] + '7'
}

function alterarAcordesLetra(letra, acordes, novosAcordes) {
    const novaLetra = letra.map(linha => linha.props.children);

    let i = 0
    while (i < (letra.length)) {
        let linha = novaLetra[i]
        let contemAcordes
        if (linha) {
            linha = novaLetra[i].split(/(\s+)/)
            contemAcordes = linha.filter(palavra => palavra.trim() !== "").every(palavra => acordes.includes(palavra)) || linha.filter(palavra => palavra.trim() !== "").every(palavra => novosAcordes.includes(palavra))
        }
        while (!contemAcordes && i < letra.length) {
            i += 1

            linha = novaLetra[i]
            if (linha) {
                linha = novaLetra[i].split(/(\s+)/)
                contemAcordes = linha.filter(palavra => palavra.trim() !== "").every(palavra => acordes.includes(palavra)) || linha.filter(palavra => palavra.trim() !== "").every(palavra => novosAcordes.includes(palavra))
            }
        }

        if (contemAcordes) {
            linha = linha.map(palavra => {
                const acordeIndex = acordes.indexOf(palavra)
                if (acordeIndex !== -1) {
                    return novosAcordes[acordeIndex];
                }
                return palavra
            })
            novaLetra[i] = linha.join('')
        }
        i += 1
    }

    for (let i = 0; i < novaLetra.length; i++) {
        let linha = novaLetra[i]
        let contemAcordes
        if (linha.trim() !== "") {
            linha = novaLetra[i].split(/(\s+)/)
            contemAcordes = linha.filter(palavra => palavra.trim() !== "").every(palavra => acordes.includes(palavra)) || linha.filter(palavra => palavra.trim() !== "").every(palavra => novosAcordes.includes(palavra))
        }

        if (!contemAcordes) novaLetra[i] = <span key={i}>{novaLetra[i]}</span>
        else novaLetra[i] = <span key={i} className="text-orange-900">{novaLetra[i]}</span>
    }
    return novaLetra
}

export function alterarTom(chave, novoTom, estrutura) {
    const tonsCifras = JSON.parse(localStorage.getItem("tons-cifras")) || {}
    if (!tonsCifras[estrutura]) tonsCifras[estrutura] = {}
    tonsCifras[estrutura][chave] = novoTom
    localStorage.setItem("tons-cifras", JSON.stringify(tonsCifras))
    window.location.reload()
}

export function aumentarTons(tomAtual, setTom, tomComCapo, setTomComCapo, acordes, setAcordes, letra, setLetra, setLetraComCapo, diferenca = 1) {
    const tons = getTons()
    const quantTons = 12

    const novosAcordes = acordes.map(function (acorde) {
        if (acorde.includes('(')) {
            acorde = tirarAspas(acorde)
            let [tom, resto] = tomResto(acorde, tons)
            if (tons.includes(resto)) {
                let tonsAcorde = [tomResto(tom)[0], tomResto(resto)[0]]
                let restosAcorde = [tomResto(tom)[1], tomResto(resto)[1]]

                const indexes = [tons.indexOf(tonsAcorde[0]), tons.indexOf(tonsAcorde[1])]

                return tons[((indexes[0] + diferenca) % quantTons) % quantTons] + restosAcorde[0] + "/" + tons[((indexes[1] + diferenca) % quantTons) % quantTons] + restosAcorde[1]
            }
            const index = tons.indexOf(tom)
            return `(${tons[((index + diferenca) % quantTons) % quantTons] + resto})`
        }
        let [tom, resto] = tomResto(acorde, tons)
        if (tons.includes(resto)) {
            let tonsAcorde = [tomResto(tom)[0], tomResto(resto)[0]]
            let restosAcorde = [tomResto(tom)[1], tomResto(resto)[1]]

            const indexes = [tons.indexOf(tonsAcorde[0]), tons.indexOf(tonsAcorde[1])]

            return tons[((indexes[0] + diferenca) % quantTons) % quantTons] + restosAcorde[0] + "/" + tons[((indexes[1] + diferenca) % quantTons) % quantTons] + restosAcorde[1]
        }

        const index = tons.indexOf(tom)
        return tons[((index + diferenca) % quantTons) % quantTons] + resto
    })

    const [tom, resto] = tomResto(tomAtual, tons)
    const index = tons.indexOf(tom)
    tomAtual = tons[(index + diferenca) % quantTons] + resto

    const tomComCapoIndex = tons.indexOf(tomComCapo)
    const tomAtualIndex = tons.indexOf(tomAtual)
    const diferencaComCapo = ((tomAtualIndex - tomComCapoIndex + quantTons) % quantTons) % quantTons

    const indexCapo = tons.indexOf(tomAtual)
    const tomAtualComCapo = tons[(indexCapo - diferencaComCapo + quantTons) % quantTons] + resto

    const novosAcordesComCapo = novosAcordes.map(function (acorde) {
        if (acorde.includes('(')) {
            acorde = tirarAspas(acorde)
            let [tom, resto] = tomResto(acorde, tons)
            if (tons.includes(resto)) {
                let tonsAcorde = [tomResto(tom)[0], tomResto(resto)[0]]
                let restosAcorde = [tomResto(tom)[1], tomResto(resto)[1]]

                const indexes = [tons.indexOf(tonsAcorde[0]), tons.indexOf(tonsAcorde[1])]

                return tons[((indexes[0] - diferencaComCapo + quantTons) % quantTons) % quantTons] + restosAcorde[0] + "/" + tons[((indexes[1] - diferencaComCapo + quantTons) % quantTons) % quantTons] + restosAcorde[1]
            }
            const index = tons.indexOf(tom)
            return `(${tons[((index - diferencaComCapo + quantTons) % quantTons) % quantTons] + resto})`
        }
        let [tom, resto] = tomResto(acorde, tons)
        if (tons.includes(resto)) {
            let tonsAcorde = [tomResto(tom)[0], tomResto(resto)[0]]
            let restosAcorde = [tomResto(tom)[1], tomResto(resto)[1]]

            const indexes = [tons.indexOf(tonsAcorde[0]), tons.indexOf(tonsAcorde[1])]

            return tons[((indexes[0] - diferencaComCapo + quantTons) % quantTons) % quantTons] + restosAcorde[0] + "/" + tons[((indexes[1] - diferencaComCapo + quantTons) % quantTons) % quantTons] + restosAcorde[1]
        }

        const index = tons.indexOf(tom)
        return tons[((index - diferencaComCapo + quantTons) % quantTons) % quantTons] + resto
    })

    setLetra(alterarAcordesLetra(letra, acordes, novosAcordes))
    setLetraComCapo(alterarAcordesLetra(letra, acordes, novosAcordesComCapo))
    setAcordes(novosAcordes)
    setTom(tomAtual)
    setTomComCapo(tomAtualComCapo)
}

export function baixarTons(tomAtual, setTom, tomComCapo, setTomComCapo, acordes, setAcordes, letra, setLetra, setLetraComCapo, diferenca = 1) {
    const tons = getTons()
    const quantTons = 12

    const novosAcordes = acordes.map(function (acorde) {
        if (acorde.includes('(')) {
            acorde = tirarAspas(acorde)
            let [tom, resto] = tomResto(acorde, tons)
            if (tons.includes(resto)) {
                let tonsAcorde = [tomResto(tom)[0], tomResto(resto)[0]]
                let restosAcorde = [tomResto(tom)[1], tomResto(resto)[1]]

                const indexes = [tons.indexOf(tonsAcorde[0]), tons.indexOf(tonsAcorde[1])]

                return tons[(indexes[0] - diferenca + quantTons) % quantTons] + restosAcorde[0] + "/" + tons[(indexes[1] - diferenca + quantTons) % quantTons] + restosAcorde[1]
            }
            const index = tons.indexOf(tom)
            return `(${tons[(index - diferenca + quantTons) % quantTons] + resto})`
        }
        let [tom, resto] = tomResto(acorde, tons)
        if (tons.includes(resto)) {
            let tonsAcorde = [tomResto(tom)[0], tomResto(resto)[0]]
            let restosAcorde = [tomResto(tom)[1], tomResto(resto)[1]]

            const indexes = [tons.indexOf(tonsAcorde[0]), tons.indexOf(tonsAcorde[1])]

            return tons[(indexes[0] - diferenca + quantTons) % quantTons] + restosAcorde[0] + "/" + tons[(indexes[1] - diferenca + quantTons) % quantTons] + restosAcorde[1]
        }

        const index = tons.indexOf(tom)
        return tons[(index - diferenca + quantTons) % quantTons] + resto
    })

    const [tom, resto] = tomResto(tomAtual, tons)
    const index = tons.indexOf(tom)
    tomAtual = tons[(index - diferenca + quantTons) % quantTons] + resto

    const tomComCapoIndex = tons.indexOf(tomComCapo)
    const tomAtualIndex = tons.indexOf(tomAtual)
    const diferencaComCapo = ((tomAtualIndex - tomComCapoIndex + quantTons) % quantTons) % quantTons

    const indexCapo = tons.indexOf(tomAtual)
    const tomAtualComCapo = tons[(indexCapo - diferencaComCapo + quantTons) % quantTons] + resto

    const novosAcordesComCapo = novosAcordes.map(function (acorde) {
        if (acorde.includes('(')) {
            acorde = tirarAspas(acorde)
            let [tom, resto] = tomResto(acorde, tons)
            if (tons.includes(resto)) {
                let tonsAcorde = [tomResto(tom)[0], tomResto(resto)[0]]
                let restosAcorde = [tomResto(tom)[1], tomResto(resto)[1]]

                const indexes = [tons.indexOf(tonsAcorde[0]), tons.indexOf(tonsAcorde[1])]

                return tons[((indexes[0] - diferencaComCapo + quantTons) % quantTons) % quantTons] + restosAcorde[0] + "/" + tons[((indexes[1] - diferencaComCapo + quantTons) % quantTons) % quantTons] + restosAcorde[1]
            }
            const index = tons.indexOf(tom)
            return `(${tons[((index - diferencaComCapo + quantTons) % quantTons) % quantTons] + resto})`
        }
        let [tom, resto] = tomResto(acorde, tons)
        if (tons.includes(resto)) {
            let tonsAcorde = [tomResto(tom)[0], tomResto(resto)[0]]
            let restosAcorde = [tomResto(tom)[1], tomResto(resto)[1]]

            const indexes = [tons.indexOf(tonsAcorde[0]), tons.indexOf(tonsAcorde[1])]

            return tons[((indexes[0] - diferencaComCapo + quantTons) % quantTons) % quantTons] + restosAcorde[0] + "/" + tons[((indexes[1] - diferencaComCapo + quantTons) % quantTons) % quantTons] + restosAcorde[1]
        }

        const index = tons.indexOf(tom)
        return tons[((index - diferencaComCapo + quantTons) % quantTons) % quantTons] + resto
    })

    setLetra(alterarAcordesLetra(letra, acordes, novosAcordes))
    setLetraComCapo(alterarAcordesLetra(letra, acordes, novosAcordesComCapo))
    setAcordes(novosAcordes)
    setTom(tomAtual)
    setTomComCapo(tomAtualComCapo)
}

export function adicionarCapo(capo, tomAtual) {
    const tons = getTons()
    const quantTons = 12
    const [tom, resto] = tomResto(tomAtual, tons)

    const index = tons.indexOf(tom)

    if (capo) {
        const tom = document.getElementsByClassName('tom')[0]
        tom.innerText = `${tomAtual} (${tons[((index - Number(capo) + quantTons) % quantTons) % quantTons] + resto})`
    }
}

export function mudarTom(tomAtual, novoTom, setTom, novoTomComCapo, setTomComCapo, acordes, setAcordes, letra, setLetra, setLetraComCapo, isRelativa) {
    const tons = getTons(isRelativa)
    const novoTomIndex = tons.indexOf(novoTom)
    const novoTomComCapoIndex = tons.indexOf(novoTomComCapo)
    const tomAtualIndex = tons.indexOf(tomAtual)

    const diferenca = novoTomIndex - tomAtualIndex
    const diferencaComCapo = novoTomComCapoIndex - tomAtualIndex

    if (diferenca > 0 || diferencaComCapo > 0) { aumentarTons(tomAtual, setTom, novoTomComCapo, setTomComCapo, acordes, setAcordes, letra, setLetra, setLetraComCapo, diferenca) }
    else if (diferenca < 0 || diferencaComCapo < 0) { baixarTons(tomAtual, setTom, novoTomComCapo, setTomComCapo, acordes, setAcordes, letra, setLetra, setLetraComCapo, Math.abs(diferenca)) }
}

export function getTomCapo(tomAtual, capo) {
    const tons = getTons()
    const quantTons = 12
    const [tom, resto] = tomResto(tomAtual, tons)

    const index = tons.indexOf(tom)
    return tons[((index - Number(capo) + quantTons) % quantTons) % quantTons] + resto
}