
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('players', function(table){
      table.increments('id');
      table.string('first_name');
      table.string('last_name');
      table.string('position');
      table.integer('jersey_number');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('players')
  ]);
};
