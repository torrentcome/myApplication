
var debug = require('./module.js');

var bl = require('bl');
var http = require('http');

// size arguments total
var argvSize = process.argv.length;
var listRes = [];
//main
// debug(argvSize);
doReqs();

/*
 declare function
*/
// parcour all arguments less the 2 first
function doReqs(){
  for(var i = 2; i < argvSize; i++){
    httpGet(i);
  }
}

// httpget each
function httpGet(index){
  http.get(process.argv[index], function(res){
    res.pipe(bl(function (err, data){
      if(err) {
        return console.error(err);
      }
      data = data.toString();

    //  debug("httpget data = " + data);
      listRes[index - 2] = (data);

    //  debug("httpget index = " + index);
      if(index === argvSize - 1){
        printReqs();
      }
    }));
  });
}

// print request
function printReqs(){
    for(var i = 0; i < listRes.length; i++){
        console.log(listRes[i]);
    }
}
