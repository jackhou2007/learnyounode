var fs = require('fs');
var Parser = require('./parser.js');

fs.readFile('example_log.txt', function (err, data) {
    if (err) {
        throw err;
    }

    var text = data.toString();
    var parser = new Parser();
    var result = parser.parser(text);
    console.log(result);
})