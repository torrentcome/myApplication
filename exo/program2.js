if (process.argv.length > 1){
    var total = 0;
    for (var i = 2; i < process.argv.length; i++) {
        total = total + parseInt(process.argv[i], 10);
        //console.log(total);
    }
    console.log(total);
} else {
    console.log('');
}
