// create new module

// stuff for work
var fs = require('fs');
var path = require('path');

// variable who will be exported
module.exports = function (arg2, arg3, callback) {

  fs.readdir(arg2, function (err, list) {
    if(err){
       return callback(err);
    }

    list = list.filter(function(file){
       return path.extname(file) === '.' + arg3;
    });

    return callback(null, list);
  });
};
