const http = require('http');
const fs = require('fs');
let message;
const server = http.createServer((req,res)=>{
    const url = req.url;
    const method =req.method;
    if(url =='/'){
        fs.readFile('message',{encoding:'utf-8'},(err,data)=>{
            if(err){
                console.log(err);
            }
            console.log("data from file"+data);
            res.write('<html>');
            res.write('<head><title>mypage</title></head>');
            res.write('<body>');
            res.write(`<h1>${data}</h1>`)
            res.write('<form action ="/message" method="POST"><input type="text" name="msg"><button  type="submit">Send</button></form>')
            res.write('</body>');
            res.write('</html>');
            return res.end();
        })
    }
    // res.setHeader('Content-Type','text/html');
    if(url ==='/message' && method ==='POST'){
        const body =[];
        req.on('data',(chunk)=>{
            console.log(chunk)
            body.push(chunk);
        })
        
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            message = parsedBody.split('=')[1]
            fs.writeFileSync('message',message);
        })
        
        
        res.statusCode = 302;
        res.setHeader('location','/');
        return res.end();
    }
    
    
})

server.listen(4002);