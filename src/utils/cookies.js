class Cookies {
    getItem(key) {
        const cookies = document.cookie
            .split(';')
            .map(cookie => cookie.split('='))
            .reduce((acc, [key, value]) => ({...acc, [key.trim()]: value}), {})

        return cookies[key]
    }

    setItem(key, value) {
        document.cookie = `${key}=${value}; path=/`
    }

    addProduct(value) {
        const data = this.getItem('products')
        const products = data ? data : ''
        const condition = products ? ',' + products : ''
        const main = value + condition
        this.setItem('products', [...new Set(main.split(','))])
    }

    removeAllProducts() {
        this.setItem('products', '')
    }

    removeProduct(value) {
        const data = this.getItem('products')
        const products = data.split(',')
        const filtered = products.filter(item => item !== value)
        const back = filtered.join(',')
        this.setItem('products', back)
    }
}

export default Cookies