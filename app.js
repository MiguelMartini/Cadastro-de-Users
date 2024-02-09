const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const User = require('./models/User')

app.use(express.static('public'));

//config
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// body parser
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get("/home", function(req, res){
        res.render('home', {
            style: 'styleHome.css',
        })
})

app.get("/form", function(req, res){
    res.render('form', {
        style: 'styleForm.css'
    })
})
app.post("/add", function(req, res){
    User.create({
        name: req.body.nome,
        email: req.body.email,
        fone: req.body.fone,
        cep: req.body.cep,
        password: req.body.password
    }).then(function(){
        res.redirect('/home')
    }).catch(function(err){
        console.log(`Erro ${err}`)
    })
})

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081")
})