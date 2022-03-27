

var express = require("express");
var aplicacao = express();
const cookieParser = require("cookie-parser");
const { json } = require("express");
aplicacao.use(cookieParser());
//var usuario = [ {"id":"","nome":"","endereco":"","email":""}];
var usuario = [];




//API de conexao do metodo GET
aplicacao.get('/', function(req, res) {
    res.cookie('CookieUsuario','Anonimo');
    res.send("<h1> voce esta na raiz</h1>");
});

aplicacao.get('/users', function(req, res) {
//    var nome = req.query.nome;
//   var endereco = req.query.endereco;
//  var email = req.query.email;
    
    var idUser = req.query.id;

    for (let i = 0 ; i < usuario.length; i++) {
        //console.log(usuario[i]);
        if (usuario[i].id == idUser){
            
            console.log("id do usuario é ", +usuario[i].id);
            console.log(usuario[i].nome);
            console.log(usuario[i].endereco);
            console.log(usuario[i].email);
            
    
        } 
        
        if (idUser == undefined){
            console.log("id do usuario é ", +usuario[i].id);
            console.log(usuario[i].nome);
            console.log(usuario[i].endereco);
            console.log(usuario[i].email);
        
            
        }
        
    }
//usuario.find(i = i.id == idUser);  
//(months.find(i => i.name==="January") != {}) ? console.log("January month found") : console.log("Not found");  

});

//aplicacao.get('/clientes', function(req, res) {
    
//http://localhost:3000/users?nome=kaique&email=kaique@gmail.com
//  var nomeUsuario = req.query.nome;
// var emailUsuario = req.query.email;
// var idUsuario = req.query.id;
//var generoUsuario = req.query.genero;
// res.send("<h1> Olá "+nomeUsuario+", tudo bem? </h1> <b> Seu email é "+emailUsuario+", ID = "+idUsuario+" </b>");
    



aplicacao.post('/users/:id/:nome/:endereco/:email', function(req, res) {
    var id = req.params ['id'];
    var nome = req.params ['nome'];
    var endereco = req.params ['endereco'];
    var email = req.params ['email'];
    
    
    usuario.push({"id":id,"nome":nome,"endereco":endereco, "email":email});
    console.log(JSON.stringify(usuario));
    res.send("<h1>Resultado:" +id+", "+nome+" , "+endereco+", "+email+".</h1>");

    

});



aplicacao.delete('/users', function(req, res) {
        var idUser = req.query.id;


    for (let i = 0 ; i < usuario.length; i++) {
        //console.log(usuario[i]);
        if (usuario[i].id == idUser){
            usuario.splice(usuario[i] , 0);
            console.log("deletado");
            
         
    
        } 
       
        
    }
//usuario.find(i = i.id == idUser);  
//(months.find(i => i.name==="January") != {}) ? console.log("January month found") : console.log("Not found");  

});





aplicacao.listen(3000, function() {
    console.log("Estou funcionando");
   
});



