import express from 'express';
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello world');
});

app.get('/about',(req,res)=>{
    res.send('you are in about section')
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})