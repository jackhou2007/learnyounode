var fs = require('fs');
var stat = new fs.Stats;
console.log(stat.isFile('example_log.txt'));
fs.exists('/etc/passwd', function (exists) {
    console.log(exists);
  console.error(exists ? "it's there" : "no passwd!");
});