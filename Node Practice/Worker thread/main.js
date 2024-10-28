const {Worker} = require('worker_threads');
const worker = new Worker('./worker.js');

console.log('i am main thread adsad');

worker.on('message',(message)=>{
    console.log(`received message from worker : ${message}`);
});

worker.on('error', (error) => {
    console.error(`Worker error: ${error}`);
});

worker.on('exit', (code) => {
    if (code !== 0) {
        console.error(`Worker stopped with exit code ${code}`);
    }
});

console.log('i am main thread adsad');