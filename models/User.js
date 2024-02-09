const db = require('./db')

// define the structure from users
const User = db.sequelize.define('users', {
    name:{
        type: db.Sequelize.STRING
    },
    email:{
        type: db.Sequelize.STRING
    },
    fone:{
        type: db.Sequelize.STRING
    },
    cep:{
        type: db.Sequelize.INTEGER
    },
    password:{
        type: db.Sequelize.STRING
    }
})


module.exports = User