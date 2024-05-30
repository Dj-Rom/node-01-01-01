const fs = require('fs');
const http = require('http');




function getFirstAuthPage(req, res) {
    fs.readFile('./main.html', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Error reading')
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        }
    })
}



module.exports = {
    getFirstAuthPage,
}