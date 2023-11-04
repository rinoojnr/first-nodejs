const fs = require('fs');


const requestHandiler = (req,res) =>{
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<body>')
        res.write('<form action = "/message" method = "POST"><input type="text" name="msg"><button type = "submit">Send</button></form>');
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',chunk =>{
            body.push(chunk);
        });
        req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('Message.txt',message,(err)=>{
                res.statusCode = 302;
                res.setHeader('location','/');
                return res.end();
            });
        });
    }
}


//1
// module.exports = requestHandiler;

//2
// module.exports = {
//     handler : requestHandiler,
//     someText : 'It is very fun'
// };

//3 
// module.exports.handler = requestHandiler;
// module.exports.someTexr = 'it is very fun';

//4
exports.handler = requestHandiler;
exports.someTexr = 'it is very fun';
