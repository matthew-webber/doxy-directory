const jsonServer = require('json-server')
const app = jsonServer.create()
const express = require('express')
const path = require('path')
const middlewares = jsonServer.defaults({static: './client'})
const router = jsonServer.router('new_db.json')
const PORT = process.env.PORT || 5000

app.use(middlewares)
app.use(router)
app.use(express.static(path.join(__dirname, 'build')))

console.log('path.join(__dirname, build, index.html):', path.join(__dirname, 'client', 'build', 'index.html') )
app.get('/*', function (req, res) {
  console.log('hi')
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

if (true) {
// if (process.env.NODE_ENV === 'production') {
  console.log('heya')
  app.use(express.static('client/build'))
  app.get('*', (req, res) =>
    {res.sendFile(path.resolve('client', 'build', 'index.html'));
    console.log('hiya')}
  )
} else {
  console.log('hello')
}

app.listen(PORT)

console.log('Server started on PORT', PORT)
