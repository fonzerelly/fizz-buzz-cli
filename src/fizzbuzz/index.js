const toFizz = (num) => {
    return (num % 3 === 0) ? 'fizz' : '' 
}

const toBuzz = (num) => {
    return (num % 5 === 0) ? 'buzz' : '' 
}

const fizzbuzz = (num) => {
    const fizz = toFizz(num)
    const buzz = toBuzz(num)

    if (fizz && buzz ) {
        return fizz + buzz
    }

    if (fizz) {
        return fizz
    }

    if (buzz) {
        return buzz
    }

    return String(num)
}
module.exports = {
    fizzbuzz
}