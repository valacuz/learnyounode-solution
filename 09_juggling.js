var http = require('http')
var bl = require('bl')
var count = 0
var results = []
var urls = process.argv.slice(2)

for (i = 0; i < urls.length; i++) {
    call(urls[i])
}

function call(url) {
    http.get(url, function (response) {
        if (response.statusCode === 200) {
            response.setEncoding('utf8')
            response.pipe(bl(function (err, data) {
                results[url] = data.toString()
                count++

                if (count === urls.length) {
                    for (i = 0; i < urls.length; i++) {
                        console.log(results[urls[i]])
                    }
                }
            }))
        }
    })
}