// http module

const http=require('http')

const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.end("here is the server")

    }
    if (req.url === '/about'){
        res.end("here is our short history")

    }
    res.end(`<h1>Oops!</h1>
    <a href="/">back home </a>
    `)

})
server.listen(5000)