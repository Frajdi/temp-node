const http = require('http')


const server = http.createServer((req, res)=>{
    if (req.url === '/'){
      res.end('Welcome to our home page.')
    }
    if (req.url === '/about'){
      res.end('Welcome to our about page.')
    }
    res.end(`
      <h1>Ooops!</h1>
      <p>The page you are looking for does not exist</p>
      <a href="/">Back Home</a>
      `)
})

server.listen(5000)
