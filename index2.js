

var express = require("express");
var aplicacao = express();

aplicacao.listen(3000, function() {
    console.log("Estou funcionando");
});

//API de conexao do metodo GET
aplicacao.get('/', function(req, res) {
    res.send("<h1> voce esta na raiz</h1>");
});

aplicacao.get('/users', function(req, res) {
    
    //http://localhost:3000/users?nome=kaique&email=kaique@gmail.com
    var nomeUsuario = req.query.nome;
    var emailUsuario = req.query.email;
    var idUsuario = req.query.id;
    var generoUsuario = req.query.genero;
    res.log(nomeUsuario);

});
aplicacao.get('/news', function(req, res) {
    res.log(nomeUsuario);

});

// API de conexao de metodo POSTS
aplicacao.post('/users/:id/:nome/:email/:data', function(req, res) {
    var nomeUsuario = req.params ['nome'];
    var idUsuario = req.params ['id'];
    var emailUsuario = req.params ['email'];
    var dataUsuario = req.params ['data'];
    var generoUsuario = req.params ['data'];
    
    res.send("<h1> Olá "+nomeUsuario+", tudo bem? </h1> <b> Seu email é "+emailUsuario+", ID = "+idUsuario+" </b>");

});





