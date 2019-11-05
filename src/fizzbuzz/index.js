const toFizz = (num) => {
    return (num % 3 === 0) ? 'fizz' : '' 
}

const toBuzz = (num) => {
    return (num % 5 === 0) ? 'buzz' : '' 
}

const fizzbuzz = (num) => {
    const fizz = toFizz(num)
    const buzz = toBuzz(num)
    const result = fizz + buzz 

    if (result ) {
        return result
    }

    return String(num)
}
module.exports = {
    fizzbuzz
}