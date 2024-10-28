const fs=require('fs');

const readableStream = fs.createReadStream('filesp.txt','utf-8');
const writableStream = fs.createWriteStream('new.txt');


readableStream.pipe(writableStream);

writableStream.on('finish',()=>{
    console.log('file copied successfully');

    const readableStream2 = fs.createReadStream('new.txt', 'utf-8');
    
    readableStream2.on('data', (chunk) => {
        console.log('New data: ', chunk);
    });

    readableStream2.on('end', () => {
        console.log('Finished reading new.txt');
    });

});

