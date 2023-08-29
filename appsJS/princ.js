const express = require("express");
var app = express();
const bodyparser = require("body-parser");
const handlebars = require('express-handlebars'); // usar HTML so q melhor

//body parser:
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

// CONFIG:
    //template engine
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//MYSQL config
const Sequelize = require("sequelize");
// banco, user, senha; host, tipo de banco;
const sequelize = new Sequelize('teste01', 'root', 'v2006', {
    host: "localhost",
    dialect: "mysql"
});

//ROTA
//necessário mudar de get => post para usar o method='POST' ; não possivel acessar por URL
app.post('/recebe', function(req, res){
    res.send('formulario recebido');
})
app.get('/princ', function(req, res){
    res.render('formulario.handlebars');
});
app.listen(8081, function(){
    console.log("Server Starting \nlocalhost:8081");
});