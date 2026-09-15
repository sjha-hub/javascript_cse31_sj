//3 Create a basic HTTP server using http.createServer(), Respond with “Hello World” and return headers + status code 

//200    OKAY
//201    Created
//400    Bad Response
//401    Unauthorised response
//404    Not found



const http = require("http");  
const server = http.createServer((req,res)=>{
    res.writeHead(200,{
        "content-type":'text/plaintext',
        "server":'node.js'
    })
    res.end("Hello World!");
});
port=3005;
server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})