var express = require('express');
var router = express.Router();
//var formController = require('../controllers/formController');
var contactController = require('../controllers/contactController');
var qlrController = require('../controllers/qlrController');
var reportController = require('../controllers/reportController');
var stepController = require('../controllers/stepController');
var ateamController = require('../controllers/ateamController');
var opportunityController = require('../controllers/opportunityController');

// Routes
// GET | home page.
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Xlera Solutions - Home Page' });
});
// GET | Static Routes
router.get('/about', function(req, res, next) {
	res.render('about', { title: 'Xlera Solutions - About Us' });
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
router.get('/apply', function(req, res, next) {
	res.render('apply', { title: 'Xlera Solutions - Apply Now'});
});
router.get('/step-2', function(req, res, next) {
	res.render('step-2', { title: 'Xlera Solutions - Step 2', opportunity: req.session.opportunity});
});

// Dynamic Routes

router.get('/a-team', ateamController.index);
router.get('/qlr',qlrController.index);
router.get('/opportunity/:opportunityId', opportunityController.index);
router.get('/step-1',stepController.index);
// router.get('/a-team', function(req, res, next) {
// 	res.render('a-team', { title: 'Xlera Solutions - Join The A-Team' });
// });


// Post Routes
router.post('/contact-us', contactController.form_post);
router.post('/qlr',qlrController.form_post);
router.post('/download-form',reportController.form_post);
router.post('/step-1',stepController.form_post);
module.exports = router;
