var express = require('express');
var router = express.Router();
var fun = require('../public/javascripts/airLogic.js')
/* GET home page. */
router.get('/', function(req,res,next){
  res.render('index', {title: "Air Travel Calculator"})
})

router.post('/', function(req, res, next) {
  var departure = req.body.departure;
  var arrival = req.body.arrival;
  var wifi = req.body.wifi;
  var airclass = req.body.airclass;
  var discount = req.body.discount;
  var bags = req.body.bags;
  console.log(discount, airclass);
  res.render('index', { title: "Air Travel Calculator", result: (fun.travel(departure,arrival, wifi, bags, airclass))*fun.discount(discount)} );
});

// fun.travel(departure, arrival)
module.exports = router;
