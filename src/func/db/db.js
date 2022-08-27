const mysql = require('mysql');

const connector = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Diego@008**$',
        database: 'contact'
    }
)

const connect = () => {
    connector.connect(err => {
        if (err) throw err;
        console.log('Connected to Database')
    })
}

module.exports = {
    connector,
    connect
}