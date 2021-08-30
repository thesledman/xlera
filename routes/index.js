var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
	//res.sendFile(path.join('../views/index.html'));
	res.sendFile('index.html', { root: './views/'});
});

router.get('/about', function(req, res, next) {
  //res.render('index', { title: 'Express' });
	//res.sendFile(path.join('../views/index.html'));
	res.sendFile('about-us.html', { root: './views/'});
});

router.get('/a-team', function(req, res, next) {
  //res.render('index', { title: 'Express' });
	//res.sendFile(path.join('../views/index.html'));
	res.sendFile('a-team.html', { root: './views/'});
});
module.exports = router;
