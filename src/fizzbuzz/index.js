const toFizz = (num) => {
    return (num % 3 === 0) ? 'fizz' : '' 
}

const toBuzz = (num) => {
    return (num % 5 === 0) ? 'buzz' : '' 
}

const fizzbuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0 ) {
        return 'fizzbuzz'
    }

    const fizz = toFizz(num)
    if (fizz) {
        return fizz
    }

    const buzz = toBuzz(num)
    if (buzz) {
        return buzz
    }

    return String(num)
}
module.exports = {
    fizzbuzz
}