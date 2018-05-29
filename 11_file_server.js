var http = require('http')
var fs = require('fs')
var port = Number(process.argv[2])
var filePath = process.argv[3]

var server = http.createServer(function (request, response) {
    /*
    var fileStream = fs.createReadStream(filePath)
    fileStream.on('data', function (data) {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.write(data)
    })
    */

    // Easier solution!
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    fs.createReadStream(filePath).pipe(response)
})
server.listen(port)