var http = require('http');
var exp = require('express');

//abrir servidor :: porta do servidor
http.createServer(function(req, res){
	res.end("Trying to Connect to the Server");
}).listen(8081);

console.log("Sevidor Iniciado!")