const express = require('express');

const app = express();

const port = 3000;

app.use(express.json());


app.get('/hello' , (req,res) =>{
    res.status(200).send("<h1>Hello World</h1>");
});


app.listen(port , ()=>{
    console.log(`App Listening on port ${port}`)
});