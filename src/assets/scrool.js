import { setViewDiv } from "./tools"

function scroolScreen(inputRange) {
    const value = inputRange.value
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const scrollTo = documentHeight - windowHeight
    let currentScrollPosition = document.documentElement.scrollTop
    const divScrool = document.querySelector('.scrool')
    const buttonPlay = document.getElementsByClassName('play')[0]

    const scrollInterval = setInterval(function () {
        if (!scrollTo) {
            buttonPlay.innerText = '▷'
            clearInterval(scrollInterval)
        }

        else if (buttonPlay.innerText === '▷') {
            buttonPlay.innerText = '▷'
            clearInterval(scrollInterval)
        }

        else {
            if (currentScrollPosition < scrollTo) {
                window.scrollBy(0, 1)
                currentScrollPosition = document.documentElement.scrollTop
            }
            currentScrollPosition = document.documentElement.scrollTop

            if (currentScrollPosition >= scrollTo - 0.611) buttonPlay.innerText = '▷'

            if (!divScrool.style.display) clearInterval(scrollInterval)

            if (value !== inputRange.value) clearInterval(scrollInterval)
        }
    }, 1000 / value)
}

export function progressRange() {
    const inputRange = document.querySelector('input[type="range"]')
    const value = inputRange.value
    inputRange.style.background = `linear-gradient(to right, rgb(124 45 18) ${value}%, rgba(204, 204, 204, 0.37) ${value}%)`

    scroolScreen(inputRange)
}


export function scroolClick() {
    const divScrool = document.querySelector('.scrool')
    const inputRange = document.querySelector('input[type="range"]')
    const buttonPlay = document.getElementsByClassName('play')[0]

    buttonPlay.innerText = '❚❚'

    setViewDiv('scrool', 'flex')

    if (divScrool.style.display) {
        scroolScreen(inputRange)
    }
}

export function pauseClick() {
    const buttonPlay = document.getElementsByClassName('play')[0]

    if (buttonPlay.innerText === '▷') {
        buttonPlay.innerText = '❚❚'
        scroolScreen(document.querySelector('input[type="range"]'))
    } else {
        buttonPlay.innerText = '▷'
    }
}

export function renderizarScrollInput() {
    const cifraPageSm = document.getElementsByClassName('cifra-page-sm')[0]
    const scrollDiv = document.querySelector('.scrool')

    if (cifraPageSm) {
        const cifraPageHeight = cifraPageSm.offsetHeight
        const windowHeight = window.innerHeight

        const newBottom = windowHeight - cifraPageHeight + 24

        if (newBottom > 20) {
            scrollDiv.style.bottom = `${(newBottom - 8) / 16}rem`
        } else {
            scrollDiv.style.bottom = '2.5rem'
        }
    }
}

export function alterarInputScrool(alteracao) {
    const inputScrool = document.querySelector('input[type="range"]')

    const valorAtual = parseInt(inputScrool.value);
    const minimo = parseInt(inputScrool.min);
    const maximo = parseInt(inputScrool.max);

    let novoValor = valorAtual + alteracao;

    if (novoValor < minimo) novoValor = minimo
    else if (novoValor > maximo) novoValor = maximo

    inputScrool.value = novoValor.toString()
    progressRange()
}