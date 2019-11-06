const { cli } = require('./src/cli')
const { fizzbuzz } = require('./src/fizzbuzz')

cli({process, modify: fizzbuzz})