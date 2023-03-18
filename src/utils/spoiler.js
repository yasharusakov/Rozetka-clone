function spoiler(element) {
    const panel = element.nextElementSibling
    if (panel.style.maxHeight) {
        element.classList.remove('active-spoiler')
        panel.style.maxHeight = null
    } else {
        element.classList.add('active-spoiler')
        panel.style.maxHeight = panel.scrollHeight + 'px'
    }
}

export default spoiler