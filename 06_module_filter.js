var fs = require('fs')
var path = require('path')

module.exports = function (filePath, fileExt, callback) {
    fs.readdir(filePath, function (err, files) {
        if (err) {
            return callback(err)
        }
        return callback(err, files.filter(file => path.extname(file) == '.' + fileExt))
    })
}