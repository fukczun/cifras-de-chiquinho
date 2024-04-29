export function tirarAspas(nota) {
    return nota.replace('(', '').replace(')', '')
}

export function setViewDiv(classe, display, index) {
    if (!display) {
        display = 'grid'
        index = 0
    }
    else if (typeof display === 'number' && !index) {
        index = display
        display = 'grid'
    }
    else if (typeof display !== 'number' && !index) {
        index = 0
    }
    const div = document.getElementsByClassName(classe)[index]
    div.style.display = div.style.display ? '' : display
}

export function esconderAoClicarFora(classeDiv, classeBotao, display='grid') {
    const div = document.getElementsByClassName(classeDiv)[0]
    const button = document.getElementsByClassName(classeBotao)[0]

    document.addEventListener("click", function (event) {

        if (div.style.display === 'grid' && !div.contains(event.target) && !button.contains(event.target)) setViewDiv(classeDiv, display)
    })
}