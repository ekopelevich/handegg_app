var express = require('express');
var knex = require('../db/knex');
var router = express.Router();

//make this auth
// router.post('/login', function(req, res){
// 	if(req.cookies.session === true) {
// 		res.end('Already logged in!')
// 	} else if(req.username === username &&
// 		req.body.password === bcrypt.compareSync('bcrypt-hashed-thing')) {
// 		res.cookie('session', bcrypt.compareSync('bcrypt-hashed-thing'));
// 	} else {
// 		res.end(('Not logged in!');
// 	}
// });

function Players(){
  return knex('players');
}


// get all handegg players
router.get('/', function(req, res) {
  Players().select().then(function(players){
    res.status(200).send(players);
  });
});

// get one handegg player
router.get('/:id', function(req, res) {
  Players().select().where('id', req.params.id)
  .then(function(players){
    res.status(200).send(players);
  });
});

router.post('/', function(req, res) {
  Players().insert({
    first_name: req.body.first_name,
    last: req.body.last_name,
    position: req.body.dob,
    jersey_number: req.body.number
  }, 'id').then(function(id){
    req.body.id = id[0];
    res.status(201).send(req.body);
  });
  console.log(req.body);
});

module.exports = router;
