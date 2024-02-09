const Sequelize = require('sequelize')
const sequelize = new Sequelize('cadusers', 'root', '',{
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Rodou com o bd")
}).catch(function(err){
    console.log(`Falha ${err}`)
})

module.exports ={
    Sequelize: Sequelize,
    sequelize: sequelize
}