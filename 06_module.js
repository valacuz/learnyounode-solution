var mymodule = require('./06_module_filter')
var filePath = process.argv[2]
var fileExt = process.argv[3]

mymodule(filePath, fileExt, function (err, files) {
    files.forEach(element => {
        console.log(element)
    });
})
