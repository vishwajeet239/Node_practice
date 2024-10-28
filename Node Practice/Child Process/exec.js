const {exec} = require('child_process');
const { stdout, stderr } = require('process');

exec('cd',(error,stdout,stderr)=>{
    if(error) {
        console.log(`error : ${error}`);
        return;
    }

    if(stderr) {
        console.log(`stderr: ${stderr}`);
        return;
    }

    console.log(`stdout : ${stdout}`);
});