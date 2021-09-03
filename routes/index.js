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
router.get('/book-a-call', function(req, res, next) {
	res.render('book-a-call', { title: 'Xlera Solutions - Book A Call' });
  });
router.get('/apply', function(req, res, next) {
res.render('apply', { title: 'Xlera Solutions - Apply Now' });
});
router.get('/step-1', function(req, res, next) {
res.render('step-1', { title: 'Xlera Solutions - Step 1' });
});
router.get('/step-2', function(req, res, next) {
res.render('step-2', { title: 'Xlera Solutions - Step 2' });
});
router.get('/opportunity/:opportunityId', function(req, res, next) {
	var opportunity = {
			name: req.params.opportunityId
		}
  res.render('opportunity', { 'title': 'Xlera Solutions - Opportunity','opportunity':opportunity});
});

router.get('/privacy', function(req, res, next) {
  res.render('privacy', { title: 'Xlera Solutions - Privacy Policy' });
});
module.exports = router;
