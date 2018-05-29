var fs = require('fs')
var path = require('path')

var filePath = process.argv[2]
var filterExt = '.' + process.argv[3]
fs.readdir(filePath, function (err, files) {
    files.filter(file => path.extname(file) == filterExt)
        .forEach(file => console.log(file))
})