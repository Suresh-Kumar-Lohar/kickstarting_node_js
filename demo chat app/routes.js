const fs = require('fs')

const requestHandler = (req, res) => {
  const url = req.url
  const method = req.method
  if (url === '/') {
    let showingMSG = fs.readFileSync('message.txt', { encoding: 'utf-8' })
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>')
    res.write('<body>')
    res.write(`<h2>${showingMSG}</h2>`)
    res.write(
      '<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form'
    )
    res.write('</body>')
    res.write('</html>')
    return res.end()
  }
  if (url === '/message' && method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
      // console.log(chunk)
      body.push(chunk)
    })
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const message = parsedBody.split('=')[1]
      fs.writeFile('message.txt', message, (err) => {
        if (err) {
          console.log(err)
        }
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
      })
    })
  }
}

module.exports = { handler: requestHandler }
