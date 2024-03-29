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

    it('should convert 5 to "buzz"', () => {
        expect(fizzbuzz(5)).toBe("buzz")
    })

    it('should convert also 10 to "buzz"', () => {
        expect(fizzbuzz(10)).toBe("buzz")
    })

    it('should convert multiples of 3 and 5 to "fizzbuzz"', () => {
        expect(fizzbuzz(3 * 5)).toBe("fizzbuzz")
    })
    
    it('should convert multiples of 7 to "fuzz"', () => {
        expect(fizzbuzz(7)).toBe('zuzz')
    })

    it('should convert multiples of 3 and 7 to "fizzzuzz', () => {
        expect(fizzbuzz(3*7)).toBe('fizzzuzz')
    })

    it('should convert multiples of 3, 5 and 7 to "fizzbuzzzuzz', () => {
        expect(fizzbuzz(3*5*7)).toBe('fizzbuzzzuzz')
    })

})