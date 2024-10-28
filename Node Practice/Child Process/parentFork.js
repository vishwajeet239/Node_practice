const {fork} = require('child_process');

const child = fork('./childProcess.js');

child.send('hello child');

child.on('exit',(code)=>{
    console.log(`child process exited with code ${code}`);
});

child.on('message',(message)=>{
    console.log(`message from child : ${message}`);
});
