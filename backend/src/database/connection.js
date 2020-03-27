// vamos importar o knex para esse arquivo
const knex = require('knex');

// e vamos importar as configurações do banco de dados, disponíveis em knexfile.js
const configuration = require('../../knexfile');

// aqui vamos criar nossa conexão com o knex, passando como parâmetro o configuration.development, que é a conexão de desenvolvimento
const connection = knex(configuration.development);

// e vamos exportar nossa conexão com o banco
module.exports = connection;




