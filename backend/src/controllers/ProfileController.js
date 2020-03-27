// vamos importar o arquivo connection.js
const connection = require('../database/connection');

// vamos criar os casos de incidents
module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        return response.json(incidents);
    },

};