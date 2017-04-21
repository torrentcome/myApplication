var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var str = buffer.toString();
var nblines = str.split('\n').length - 1;
console.log(nblines);
