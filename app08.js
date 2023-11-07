// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// app.use((req,res,next)=>{
//     console.log('First one');
//     next();
// });

app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product',(req,res)=>{
    console.log('add to prouct');
    res.send('<form  action="/product" method="POST"><input type ="text" name="item" placeholder="item"><input type ="number" name="size" placeholder="count"><button type="submit">Add</button></form>')
})

app.post('/product',(req,res,next)=>{
    console.log('added product');
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req,res,next)=>{
    console.log('home page');
    res.send('<h1>it is home</h1>');
});



// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000);