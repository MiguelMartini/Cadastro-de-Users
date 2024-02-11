const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const User = require("./models/User");
const bcrypt = require("bcrypt");

app.use(express.static("public"));

//config
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const saltRounds = 10;

app.get("/home", function (req, res) {
  res.render("home", {
    style: "styleHome.css",
  });
});

app.get("/register", function (req, res) {
  res.render("cad", {
    style: "styleForm.css",
  });
});


app.get("/login", function (req, res) {
  res.render("login", {
    style: "styleLogin.css",
  });
});
  
app.post("/add", async (req, res) => {
    try {
      const hashedPass = await bcrypt.hash(req.body.password, saltRounds);
  
      await User.create({
        name: req.body.nome,
        email: req.body.email,
        fone: req.body.fone,
        cep: req.body.cep,
        password: hashedPass,
      });
  
      return res.redirect("/login");
    } catch (err) {
      console.error(`Erro ao criar usuário: ${err}`);
      return res.status(500).send("Erro interno no servidor");
    }
  });

app.listen(8081, function () {
  console.log("Servidor rodando na url http://localhost:8081/register");
});
