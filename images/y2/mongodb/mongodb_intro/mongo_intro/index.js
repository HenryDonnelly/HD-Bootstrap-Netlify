const connect = require('./db')
connect()
// returns a function stored in the express constant
const express = require('express')
// initialise the app by invoking the express function
const app = express()
app.use(express.json());
// listen for requests on a specific port number
app.listen(3000, () => {
console.log('Server is listening on port 3000')
})
// routes, these are the endpoints that the user can access
// GET request
app.get('/', (req, res) => {
res.status(200).json({
"msg": "Hello from the API!"
})
})