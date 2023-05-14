// import json-server and db.json
const jsonServer = require('json-server')

// use json-server, create json-server app
// similar to express , jsonserver will act
const server = jsonServer.create()

// set up path for db.json
const router = jsonServer.router("db.json")

const middleware = jsonServer.defaults()

// ser up port
const port = process.env.port || 4000

// use router, middleware in server
server.use(middleware)
server.use(router)

// app listen
server.listen(port, ()=>{
    console.log(`json server started at ${port}`);
})

// change script in package.json
