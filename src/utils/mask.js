const mask = (element, setPhoneNumber) => {

    const setCursorPosition = (pos, elem) => {
        elem.focus()

        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos)
        } else if (elem.createTextRange) {
            const range = elem.createTextRange()
            range.collapse(true)
            range.moveEnd('character', pos)
            range.moveStart('character', pos)
            range.select()
        }
    }

    function createMask(event) {
        let matrix = '+380 ___ ___ ___',
            i = 0,
            def = matrix.replace(/\D/g, ''),
            val = this.value.replace(/\D/g, '')

        if (def.length >= val.length) {
            val = def
        }

        this.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a
        })

        if (event.type === 'blur') {
            if (this.value.length === 4) {
                this.value = ''
            }
        } else {
            setCursorPosition(this.value.length, this)
        }

        setPhoneNumber(this.value)
    }

    element.addEventListener('input', createMask)
    element.addEventListener('focus', createMask)
    element.addEventListener('blur', createMask)
    element.addEventListener('click', (e) => setCursorPosition(e.target.value.length, e.target))
    element.addEventListener('keydown', (e) => {
        if (e.keyCode === 37 || e.keyCode === 8) {
            if (e.target.selectionStart === 4) {
                e.preventDefault()
            }
        }
    })
}

export default mask