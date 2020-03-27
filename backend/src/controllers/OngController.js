// aqui vamos encapsular as rotas
// vamos exportar um objeto dentro com os métodos

const crypto = require('crypto');

// importando a conexão do banco de dados, importar o arquivo connection.js
const connection = require('../database/connection');

// criando uma função do insert, nome da função será create
module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
    // ao invés de deixar o código assim: const data = request.body;
    // passamos uma chave com o campos que queremos, que seja enviado na requisição, ao invés de informar a varíavel, assim eu travo os dados que quero, para não ter a possibilidade de enviar dados diferentes ou a mais.
    const { name, email, whatsapp, city, uf } = request.body;

    // aqui estou falando que o id será gerado automaticamente, por 4 digitos no formato hexadecimal
    const id = crypto.randomBytes(4).toString('HEX');

    // console.log(data);

    // informando tabela do banco que vou realizar o insert
    // e dentro vc coloca todas as colunas da tabela que vc quer la dentro
    await connection('ongs',).insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    // vou determinar que quando o insert acabar, seja retornado apenas o id da ong criado
    return response.json({ id });
    }
}


