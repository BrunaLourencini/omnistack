const express = require('express');

// vamos importar o arquivo OngController.js + IncidentController.js + ProfileController.js + SessionController.js
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// desacoplando o express em uma nova variável
const routes = express.Router();

// método GET para listar todas as ongs + incidents + profile
routes.get('/ongs', OngController.index );
routes.get('/incidents', IncidentController.index );
routes.get('/profile', ProfileController.index );

// cadastro de uma nova ong e um novo caso de incidents ou session
routes.post('/ongs', OngController.create);
routes.post('/incidents', IncidentController.create);
routes.post('/sessions', SessionController.create);

// excluindo casos de incidents
routes.delete('/incidents/:id', IncidentController.delete);

// para deixar essas rotas disponíveis na minha aplicação, no meu index.js, precisamos exportá-las para la.
module.exports = routes;