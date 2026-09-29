import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    console.log("server is ready");
})

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {id:1,title:'1st joke',content:'joke 1 content'},
        {id:2,title:'2nd joke', content:'joke 2 content'},
        {id:3,title:'3rd joke', content:'joke 3 content'},
        {id:4,title:'4th joke', content:'joke 4 content'}
    ]
    res.send(jokes);
})



const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server is running on port number ${port}`);
})