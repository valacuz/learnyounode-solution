var http = require('http')
var map = require('through2-map')
var port = Number(process.argv[2])

var server = http.createServer(function (request, response) {
    if (request.method == 'POST') {
        /*
        var body = ''
        
        request.on('data', function (data) {
            body = body.concat(data)
        })
        request.on('end', function () {
            response.writeHead(200, { 'Content-Type': 'text/plain' })
            response.end(body.toUpperCase())
        })
        */

        // Easier solution.
        request.pipe(map(function (data) {
            return data.toString().toUpperCase()
        })).pipe(response)
    } else {
        response.end('send me POST')
    }
})
server.listen(port)