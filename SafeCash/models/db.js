const Sequelize = require('sequelize')

const sequelize = new Sequelize('safecash', 'vitorpd20022003@mysqlbdsafecash2021', '@bySafeCashbd2021', {
  host: 'mysqlbdsafecash2021.mysql.database.azure.com',
  dialect: 'mysql'
})

sequelize.authenticate()
  .then(() => {
    console.log("Conectado com sucesso!")
  }).catch((error) => {
    console.log("Erro ao conectar com DB!", error)
  })

module.exports = sequelize;