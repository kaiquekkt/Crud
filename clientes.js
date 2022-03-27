var usuario = [ {"id":1,"nome":"ronaldo","endereco":"av1","email":"a@gmail"}];
var teste = 1;

usuario.push({"id":2,"nome":"gorila","endereco":"av2", "email":"b@gmail"});
//console.log(usuario[1].name);
//console.log(usuario[0].name);
//console.log(JSON.stringify(usuario));


//(months.find(i => i.name==="January") != {}) ? console.log("January month found") : console.log("Not found");


for (let i = 0 ; i < usuario.length; i++) {
    //console.log(usuario[i]);
    if (usuario[i].id == teste){
        console.log("deu certo");
        console.log("id do usuario é ", +usuario[i].id);
        console.log(usuario[i].nome);
        console.log(usuario[i].endereco);
        console.log(usuario[i].email);
        

    } 

    
}
