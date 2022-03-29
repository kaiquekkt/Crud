let express = require("express");
let app = express();
const cookieParser = require("cookie-parser");
const { json } = require("express");
app.use(cookieParser());
let users = [];
bodyParser = require('body-parser').json();

//API de conexao do metodo GET
app.get('/', function(req, res) {
    res.cookie('CookieUsuario','Anonimo');
    res.send("<h1> voce esta na raiz</h1>");
});

// POST ACTION
app.post('/users', bodyParser, (req, res) => {
    const body = req.body;
  
    if (!body.name || !body.email || !body.address) {
        return res.status(400).json({
            error: 'missing information',
        });
    }
  
    const user = {
        id: users.length + 1,
        name: req.body.name,
        address: req.body.address,
        email: req.body.email,
    };

    users = [
        ...users,
        user
    ]

    console.log("usuario adicionado", user);
    res.status(201).send("user created");
});

// GET ACTION   
app.get('/users', function(req, res) {
    console.log("usuarios cadastrados", users);
    res.status(200).json(users);
})

// SHOW ACTION
app.get('/users/:id', function(req, res) {
    let userId = req.params.id;

    if (users.length && !users.map(user => user.id).includes(parseInt(userId))) {
        return res.status(400).json({
            error: 'user not found',
        });
    }

    const user = users.find(user => user.id === parseInt(userId));

    console.log("usuario encontrado", user);
    res.status(200).json(user);
});

// DELETE ACTION
app.delete('/users/:id', function(req, res) {
    let userId = req.params.id;

    if (users.length && !users.map(user => user.id).includes(parseInt(userId))) {
        return res.status(400).json({
            error: 'user not found',
        });
    }

    users = users.filter(user => user.id !== parseInt(userId));

    console.log("usuario removido", users);
    res.status(200).json(users);
});

// PATCH ACTION
app.patch('/users/:id', bodyParser, (req, res) => {
    const body = req.body;
    const userId = req.params.id;
  
    if (!body.name && !body.email && !body.address) {
        return res.status(400).json({
            error: 'missing information',
        });
    }
  
    users = users.length && users.map(user => {
        if (user.id === parseInt(userId)) {
            return {
                ...user,
                name: body?.name || user.name,
                email: body?.email || user.email,
                address: body?.address || user.address
            }
        } else {
            return {
                ...user
            }
        }
    })

    console.log("usuario alterado", users.find(user => user.id === parseInt(userId)));
    res.status(200).json(users.find(user => user.id === parseInt(userId)));
});



app.listen(3000, function() {
    console.log("Estou funcionando");
   
});