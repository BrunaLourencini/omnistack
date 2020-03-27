//ao criar o index do projeto, precisamos importar as dependências do framework do Express, para importar, iremos montar uma constante.
// const express será nossa variável
// require('express') é o nosso módulo express
// dessa forma a linha de código abaixo, estamos importando nosso módulo do express, dentro da variável express.
const express = require('express');

// importar o cors
const cors = require('cors');

// precisamos importar as rotas do arquivo routes.js
const routes = require('./routes');

//abaixo estamos criando uma variável que irá instânciar nossa aplicação
const app = express();

// para que nossa aplicação interprete o json dentro do corpo, precisamos informar a nossa aplicação que estamos utilizando o json nas requisições 
// adicionando o código abaixo, estou falando que antes de qualquer requisição ou rota, estou falando para o express converter o json em um objeto do javascritp
app.use(express.json());
app.use(routes);
app.use(cors());
// se o projeto já estiver em produção, considerar o cors assim:
// app.use(cors({
//     origin: 'http://meuapp.com'
// }));

//criando uma rota para retornar o hello word no node
// o '/' é quando estou informando minha rota raíz
// no entanto como neste projeto vamos trabalhar com json, então ao invés de send, vamos usar .json e inserir um objeto
// app.get('/', (request, response) => {
//     return response.send('Hello World');
// });

// no node, vamos entender que uma rota, é um recurso, então "/users", será o recurso de usuários

//Query Params
// app.get('/users', (request, response) => {
//     const params = request.query;

//     console.log(params);

//     return response.json({
//         evento: 'Semana OmniStack 11.0',
//         aluno: 'Bruna Lourencini'
//     });
// });

//Route Params
// app.get('/users/:id', (request, response) => {
//     const params = request.params;

//     console.log(params);

//     return response.json({
//         evento: 'Semana OmniStack 11.0',
//         aluno: 'Bruna Lourencini'
//     });
// });

//Request Body
app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'William Lourencini'
    });
});

//na sequência vou fazer com que minha aplicação escute a porta 3333
app.listen(3333);

