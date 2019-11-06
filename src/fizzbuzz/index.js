const createToXXzz = (divisor, replacement) => {
    return (num) => {
        return (num % divisor === 0) ? replacement : ''
    }
}

const toFizz = createToXXzz(3, 'fizz')

const toBuzz = createToXXzz(5, 'buzz')

const toZuzz = createToXXzz(7, 'zuzz')

const fizzbuzz = (num) => {
    const result = `${toFizz(num)}${toBuzz(num)}${toZuzz(num)}`
    if (result ) {
        return result
    }

    return String(num)
}
module.exports = {
    fizzbuzz
}