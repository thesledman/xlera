var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Xlera Solutions - Home Page' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Xlera Solutions - About Us' });
});
router.get('/a-team', function(req, res, next) {
  res.render('a-team', { title: 'Xlera Solutions - Join The A-Team' });
});
router.get('/privacy', function(req, res, next) {
  res.render('privacy', { title: 'Xlera Solutions - Privacy Policy' });
});
module.exports = router;
