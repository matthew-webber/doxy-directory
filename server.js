const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const middlewares = jsonServer.defaults({static: './client'})
const router = jsonServer.router(path.join(__dirname, 'new_db.json'))
const port = process.env.PORT || 10000
const express = require('express')
const app = express()

server.use(middlewares)
server.use('/api', router)
// app.use(express.static(path.join(__dirname, 'client', 'build')))

// app.get('/*', function (req, res) {
//   console.log('hi')
//   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
// })

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
} else {
  console.log('node env is NOT production')
}

server.listen(port, () => {
  console.log(`Server started on port ${port}.`)
})