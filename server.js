const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const middlewares = jsonServer.defaults({static: './client'})
const router = jsonServer.router(path.join(__dirname, 'new_db.json'))
const port = process.env.PORT || 10000

server.use(middlewares)
server.use(router)
// app.use(express.static(path.join(__dirname, 'client', 'build')))

// app.get('/*', function (req, res) {
//   console.log('hi')
//   res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
// })

// if (true) {
// if (process.env.NODE_ENV === 'production') {
//   console.log(path.resolve('client', 'build', 'index.html'), 'hello')
//   app.use(express.static('client/build'))
//   app.get('*', (req, res) => res.sendFile(path.resolve('client', 'build', 'index.html')));
// } else {
//   console.log('hello')
// }

server.listen(port, () => {
  console.log(`Server started on port ${port}.`)
})