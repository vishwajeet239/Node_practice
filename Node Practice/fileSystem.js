const { log } = require('console');
const fs=require('fs');

// fs.writeFileSync('./new.txt','Hey buddy!');

fs.writeFileSync('./new.txt','Hey buddy! lets go',(err,data)=>{
    if(err) {
        console.error(err);
        return;
    }
});


fs.appendFileSync('./new.txt','the park', 'utf-8');
const content=fs.readFileSync('./new.txt','utf-8');
log(content);