const jsonServer = require('json-server')
const app = jsonServer.create()
const express = require('express')
const path = require('path')
const middlewares = jsonServer.defaults({static: './client/build'})
const router = jsonServer.router('new_db.json')
const PORT = process.env.PORT || 5000

app.use(middlewares)
app.use(router)
app.use(express.static(path.join(__dirname, 'build')))

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) =>
    res.sendFile(path.resolve('client', 'build', 'index.html'))
  )
} else { 
}

app.listen(PORT)

console.log('Server started on PORT', PORT)
