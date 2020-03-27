// vamos importar o arquivo connection.js
const connection = require('../database/connection');

// vamos criar os casos de incidents
module.exports = {
    async index(request, response) {
        // realizando uma paginação
        const { page = 1 } = request.query;

        // informando no front o total de registro existentes
        const [count] =  await connection('incidents').count();

        // console.log(count);

        const incidents = await connection('incidents')
            // join é quando eu quero relacionar dados de duas tabelas
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page -1) * 5)
            .select(['incidents.*',
                     'ongs.name',
                     'ongs.email',
                     'ongs.whatsapp',
                     'ongs.city',
                     'ongs.uf'
                    ]);

        // retornando o total de registro no cabeçalho
        response.header('X-Total-Count', count['count(*)'])    

        return response.json(incidents);
    },

    
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });

    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id) {
            return response.status(401).json({ erro: 'Operation not permited.' });
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};