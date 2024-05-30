const fs = require('fs')
const http = require('http')
const { getFirstAuthPage } = require('./handlers/GET')
const { postFirstAuthPage } = require('./handlers/POST')
const PORT = 5000;




const server = http.createServer(function (req, res) {
    console.log("server started");
    if (req.url === '/') {
        return getFirstAuthPage(req, res)
    }
    if (req.url === '/formAuthSubmite' && req.method === 'POST') {
        console.log("dfdf");
        return postFirstAuthPage(req, res)
    }

}).listen(PORT)

