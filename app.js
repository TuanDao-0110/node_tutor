
const {createReadStream} =require('fs')
const stream = createReadStream('./content/big.txt')
stream.on('data',(result)=> { 
    console.log(result)

})
// var http = require('http');
// var fs = require('fs');

// http.createServer(function (req, res) {
//     // The filename is simple the local directory and tacks on the requested url
//     var filename ='./content/big.txt';

//     // This line opens the file as a readable stream
//     var readStream = fs.createReadStream(filename);

//     // This will wait until we know the readable stream is actually valid before piping
//     readStream.on('open', function () {
//         // This just pipes the read stream to the response object (which goes to the client)
//         readStream.pipe(res);
//     });

//     // This catches any errors that happen while creating the readable stream (usually invalid names)
//     readStream.on('error', function (err) {
//         res.end(err);
//     });
// }).listen(8080,()=>{ 
//     console.log('server on local host 8080')
// });