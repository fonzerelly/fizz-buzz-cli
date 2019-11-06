const { cli } = require('./index.js')
describe('cli', () => {
    let mockProcess
    const calls = '10'
    let mockModify
    beforeEach(() => {
        mockProcess = {
            stdout: {
                write: jest.fn(() => {})
            },
            argv: [
                'node',
                'programm',
                calls
            ]
        }
        mockModify = jest.fn((index) => { return index })
    })
    it('should call write argv times', () => {
        cli({process: mockProcess})
        expect(mockProcess.stdout.write.mock.calls.length).toBe(parseInt(mockProcess.argv[2], 10))
    })

    it('should call write with the numbers from 1-10', () => {
        cli({process: mockProcess})
        expect(mockProcess.stdout.write.mock.calls.map((params) => params[0])).toEqual(['1 ','2 ','3 ','4 ','5 ','6 ','7 ','8 ','9 ','10 '])
    })

    it('should call a modify-function with each value and write the transformation', () => {
        cli({process: mockProcess, modify: mockModify})
        expect(mockModify.mock.calls.map((params) => params[0])).toEqual([1,2,3,4,5,6,7,8,9,10])
    })
})