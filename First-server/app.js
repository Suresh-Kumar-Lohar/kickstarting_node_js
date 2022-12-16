const http = require('http')

// function rqListener(req, res){

// }

// http.createServer(rqListener)

const server = http.createServer((req, res) => {
  const url = req.url
  if (url === '/home') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Welcome Home</title></head>')
    res.write('<body><h1>Welcome Home</h1></body>')
    res.write('</html>')
    return res.end()
  }
  if (url === '/about') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Welcome to About Us Page</title></head>')
    res.write('<body><h1>Welcome to About Us Page</h1></body>')
    res.write('</html>')
    return res.end()
  }
  if (url === '/node') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Welcome to My Node JS Project</title></head>')
    res.write('<body><h1>Welcome to My Node JS Project</h1></body>')
    res.write('</html>')
    return res.end()
  }
})

server.listen(4000)
