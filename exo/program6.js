// import new module
var module = require('./program6mymodule.js');

module(process.argv[2], process.argv[3], function(err, list) {
    if(err){
      return console.error('error = ', err);
    }
    list.forEach(function(file){
        console.log(file);
    });
});
