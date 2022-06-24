var express = require('express');
var router = express.Router();
var knex = require('../knex/knex');
/* GET users listing. */
router.get('/', function(req, res, next) {
  var tabel = ''
  knex('cars').select().then( data => {
    res.send(data)
  })
});

module.exports = router;
