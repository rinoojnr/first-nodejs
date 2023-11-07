// const http = require('http');

const express = require('express');
const app = express();

app.use((req,res,next)=>{
    console.log('First one');
    next();
});

app.use((req,res,next)=>{
    console.log('second one');
    res.send('<h1>Hello express.js</h1>')
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);