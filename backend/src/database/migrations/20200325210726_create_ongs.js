
// método up, é o que eu vou fazer na tabela
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  });
};

// método down, será o rollback, o que será preciso para desfazer o que foi feito
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
