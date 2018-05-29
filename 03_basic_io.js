var fs = require('fs')

var filePath = process.argv[2]
var str = fs.readFileSync(filePath, 'utf8')
var lines = str.split('\n')
console.log(lines.length - 1)