var express = require('express');
var router = express.Router();
var formController = require('../controllers/formController');
// GET home page.
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Xlera Solutions - Home Page' });
});
// Static Pages
router.get('/about', function(req, res, next) {
	res.render('about', { title: 'Xlera Solutions - About Us' });
});
router.get('/a-team', function(req, res, next) {
	res.render('a-team', { title: 'Xlera Solutions - Join The A-Team' });
});
router.get('/book-a-call', function(req, res, next) {
	res.render('book-a-call', { title: 'Xlera Solutions - Book A Call' });
});
router.get('/contact-us', function(req, res, next) {
	res.render('contact-us', { title: 'Xlera Solutions - Contact' });
});
router.get('/privacy', function(req, res, next) {
	res.render('privacy', { title: 'Xlera Solutions - Privacy Policy' });
});
router.get('/qlr', function(req, res, next) {
	res.render('qlr', { title: 'Xlera Solutions - Qualified Leads Registration (QLR)' });
});
// Dynamic Pages
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
	var locals = {
		title: 'Xlera Solutions - Opportunity',
		opportunity: {
			name: req.params.opportunityId
		}
	};
	res.render('opportunity', locals);
});
// Post Routes
router.post('/contact-us', formController.contact_post);

module.exports = router;
