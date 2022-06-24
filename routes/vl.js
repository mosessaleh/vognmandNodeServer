var express = require('express');
var router = express.Router();
var knex = require('../knex/knex');
/* GET VognLob. */
router.get('/', function(req, res, next) {
  knex('vl').select('id','vl_nr', 'hz', 'type', 'activation').where('slettet', 0).then( data => {
    res.send(data)
  })
});
router.get('/:id', function(req, res, next) {
  knex('vl').select().where('id',req.params.id).then( data => {
    res.send(data)
  })
});

/* POST VognLob */
router.post('/edit', function(req, res, next) {
  var vl = req.body
  var data = {
    vl_nr: vl.vl_nr,
    hz: vl.hz,
    type: vl.type,
    drift_price: vl.drift_price,
    nat_price: vl.nat_price,
    ovrig_price: vl.ovrig_price,
    company: vl.company,
    activation: vl.activation
  }
  knex('vl').update(data).where('id', vl.vlId).then( () => {
    res.send({success: true})
  })
});
router.post('/new', function(req, res, next) {
  var vl = req.body
  var data = {
    vl_nr: vl.vl_nr,
    hz: vl.hz,
    type: vl.type,
    drift_price: vl.drift_price,
    nat_price: vl.nat_price,
    ovrig_price: vl.ovrig_price,
    company: vl.company,
    activation: vl.activation
  }
  knex('vl').select().where('vl_nr', vl.vl_nr).then( vls => {
    console.log(vls.length)
    if (vls.length === 0) {
      knex('vl').insert(data).then( () => {
        res.send({success: true})
      })
    } else {
      res.send({status: 'Exist'})
    }
  })
});
router.post('/delete/:vlID', function(req, res, next) {
  var vlID = req.params.vlID
  knex('vl').update({slettet: 1}).where('id', vlID).then( () => {
    res.send({success: true})
  })
});
module.exports = router;
