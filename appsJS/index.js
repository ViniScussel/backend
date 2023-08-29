//Módulos NODEJS
const express = require("express");
var app = express();
const handlebars = require("express-handlebars");

//MYSQL config
const Sequelize = require("sequelize");
// banco, user, senha; host, tipo de banco;
const sequelize = new Sequelize('teste01', 'root', 'v2006', {
    host: "localhost",
    dialect: "mysql"
});


// CONFIG:
    //template engine
app.engine("handlebars", handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/*Pode mandar qualquer tipo de dado (texto, num, strings e arquivos também)
É a ROTA (ROTA "/" é a principal) 
__dirname é o caminho absoluto até o appJS*/

app.get("/", function(req, res){
    res.sendFile(__dirname + "/HTML/index.html");
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/HTML/sobre.html");
});

//parâmetros de requisição
app.get("/help/:name/:instituto", function(req, res){
    res.send("<strong><h1>"+req.params.name+"! You're from "+req.params.instituto+"</h1></strong>"+"\n<h2>Server Iniciated in localhost:8081</h2>");
});


/* ==>tem que ser a ultima linha do código<==
(dispara um evento)
localhost:8081 */

app.listen(8081, function(){
    console.log("Server Starting \nlocalhost:8081");
});
//disable MYSQL ; sudo systemctl disable mysql
//enter mysql: sudo mysql -u root -p