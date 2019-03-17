var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var expressSession = require('express-session');
var multiparty = require("connect-multiparty");
var dotenv = require('dotenv');
dotenv.config();
var app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())// esse parametro permite codficar os jsons
app.use(expressValidator());
app.use(multiparty());
/* Configura o middleware express-validator */
app.use(expressSession(
    {
        secret: 'awdrfvcdg',
        resave: false,
        saveUninitialized: false
    }
))
/* configurar o middleware express.static */
app.use(express.static('./app/public'));

consign().include('app/routes')
.then("app/models")
.then("app/controllers")
.then('config/dbConnection.js')  //aqui executa a funcao que exporta entao eu posso colocar um / e especificar o modulo que quero executar
.into(app)
module.exports = app