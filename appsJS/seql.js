const Sequelize = require("sequelize");
// banco, user, senha; host, tipo de banco;
const sequelize = new Sequelize('teste01', 'root', 'v2006', {
    host: "localhost",
    dialect: "mysql"
});

/*
sequelize.authenticate().then(function(){
    console.log("Successful connected!");
}).catch(function(erro){
    console.log("Failed to connect: " + erro);
});
*/


//criando tabelas 
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

Postagem.create({
    titulo: "Amigos Até Certa Instância:",
    conteudo: "Vai que um dia gosto e começo a ver além do que era pra ser;"
});

const Usuario = sequelize.define('user', {
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    }
});

Usuario.create({
    nome: "Scussel",
    email: "teste@hotmail.com",
    idade: 17
});

Postagem.sync({});
Usuario.sync({});