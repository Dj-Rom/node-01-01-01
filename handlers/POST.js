const fs = require('fs');
const qs = require('querystring');
const listUsers = require('./../date/date')
function postFirstAuthPage(req, res) {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    })
    req.on('end', () => {
        console.log(JSON.stringify(qs.parse(body)));
        listUsers.push(JSON.stringify(qs.parse(body)))
        console.log(listUsers);

    }
    )
}

module.exports = {
    postFirstAuthPage,
}