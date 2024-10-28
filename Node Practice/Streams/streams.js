const fs = require('fs');
const readableStream= fs.createReadStream('filesp.txt', 'utf-8');

readableStream.on('data',(chunk)=>{
    console.log('received chunk :', chunk);
});
