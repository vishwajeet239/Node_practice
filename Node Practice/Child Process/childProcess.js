process.on('message',(message)=>{
    console.log(`message form parent : ${message}`);

    process.send('I am child Process');
    process.exit();
});