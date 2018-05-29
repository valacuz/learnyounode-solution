var http = require('http')
var bl = require('bl')
var url = process.argv[2]

http.get(url, function (response) {
    if (response.statusCode === 200) {
        response.setEncoding('utf8')
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err)
            }
            var str = data.toString()
            console.log(str.length) // Writes number of characters
            console.log(str) // Data receivers from server
        }))
    }
})