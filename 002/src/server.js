const http = require('http')
const app10 = require('./routes/app')
const port = 3000
const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello Server!!!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})