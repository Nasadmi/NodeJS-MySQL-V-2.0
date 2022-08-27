const express = require('express');

const morgan = require('morgan');

const path = require('path');

const dotenv = require('dotenv');

const r_principal = require('./func/routes/principal.js')

const r_contacts = require('./func/routes/contact.js')

const sql = require('./func/db/db.js');

const dbFunc = require('./func/others/funcdb.js');

const error = require('./func/others/error404.js');

const app = express();

app.set(express.urlencoded({extended: false}));

app.set(express.json());

dotenv.config({path: path.join(__dirname, 'env/.env')});

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')))

app.use(r_principal)

app.use(r_contacts);

app.use(dbFunc);

app.use(error)

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
    console.log('App listening on port',app.get('port'))
})

sql.connect()

app.use(morgan('dev'))