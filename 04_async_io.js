var fs = require('fs')

var filePath = process.argv[2];
fs.readFile(filePath, function (err, data) {
    if (err) {
        console.log('error occurred while read file.')
    }
    var count = data.toString().split('\n').length - 1
    console.log(count)
})