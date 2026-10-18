import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    console.log("server is ready");
})

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {id:1,title:'A field day',content:'Why did the scarecrow win an award? Because he was outstanding in his field.'},
        {id:2,title:'That’s nacho cheese', content:'What do you call cheese that isn’t yours? Nacho cheese.'},
        {id:3,title:'Running on empty', content:'Why couldn’t the bicycle stand up by itself? It was two-tired.'},
        {id:4,title:'No guts, no glory', content:'Why don’t skeletons fight each other? They don’t have the guts.'}
    ]
    res.send(jokes);
})



const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`server is running on port number ${port}`);
})