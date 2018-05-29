var net = require('net')
var strftime = require('strftime')
var port = Number(process.argv[2])
var server = net.createServer(function (socket) {
    // Handle socket logic
    socket.end(strftime('%F %H:%M') + '\n')
})
server.listen(port)