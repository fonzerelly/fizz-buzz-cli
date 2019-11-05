const { fizzbuzz } = require('./index')
describe('fizzbuzz', () => {
    it('should convert 1 to "1"', () => {
        expect(fizzbuzz(1)).toBe("1")
    })

    it('should convert 2 to "2"', () => {
        expect(fizzbuzz(2)).toBe("2")
    })

    it('should convert 3 to "fizz"', () => {
        expect(fizzbuzz(3)).toBe("fizz")
    })

    it('should convert also 6 to "fizz"', () => {
        expect(fizzbuzz(6)).toBe("fizz")
    })

})