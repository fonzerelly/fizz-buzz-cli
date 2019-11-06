const id = (value) => value
const cli = ({process, modify}) => {
    const range = Array.from(Array(
        parseInt(process.argv[2],10)
    ).keys())
        .map((index) => index + 1)
    const modifyFn = modify || id
    range
        .map(modifyFn) 
        .forEach((num) => {
            process.stdout.write(num)
        })
}
module.exports = {
    cli
}