
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('players').del(),

    // Inserts seed entries
    knex('players').insert({
      first_name: 'John',
      last_name: 'Selway',
      position: 'egg-runner',
      jersey_number: 7
    }),
    knex('players').insert({
      first_name: 'Payton',
      last_name: 'Tanning',
      position: 'egg-catcher',
      jersey_number: 25
    }),
    knex('players').insert({
      first_name: 'Victoria',
      last_name: 'Beckham',
      position: 'tough-gal',
      jersey_number: 67
    })
  );
};
