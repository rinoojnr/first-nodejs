const fs = require('fs');


const reqHandler = (req,res) =>{
    const url = req.url;
    const method = req.method
    if(url === '/'){
        res.write('<html>');
        res.write('<body>')
        res.write('<form action = "/message" method = "POST"><input type="text" name="msg"><button type = "submit">Send</button></form>');      res.write('</html>')
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',chunk =>{
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[0];
            fs.writeFile('a',message,(err)=>{
                plitres.statusCode = 302;
                res.setHeader('location','/');
                return res.end();
            });
        });
    }
}




module.exports = {
    handler : reqHandler,
    text : 'some text'
}