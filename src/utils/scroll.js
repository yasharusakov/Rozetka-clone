function scroll(condition) {
    let div = document.createElement('div')
    div.style.overflowY = 'scroll'
    div.style.width = '50px'
    div.style.height = '50px'
    document.body.append(div)
    let scrollWidth = div.offsetWidth - div.clientWidth
    div.remove()

    if (condition) {
        document.body.style.overflow = 'hidden'
        document.body.style.marginRight = scrollWidth + 'px'
    } else {
        document.body.style.overflow = ''
        document.body.style.marginRight = ''
    }
}

export default scroll