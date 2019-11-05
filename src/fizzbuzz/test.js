const { fizzbuzz } = require('./index')
describe('fizzbuzz', () => {
    it('should convert 1 to "1"', () => {
        expect(fizzbuzz(1)).toBe("1")
    })

    it('should convert 2 to "2"', () => {
        expect(fizzbuzz(2)).toBe("2")
    })
})