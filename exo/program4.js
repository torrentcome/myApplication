var fs = require('fs');

if (process.argv.length > 2) {
  var buffer = fs.readFile(process.argv[2], 'utf8', function callback(err, data){
    if(err) {
      throw err;
    }
    console.log(data.split('\n').length - 1);
  });
} else {
  console.log('');
}
