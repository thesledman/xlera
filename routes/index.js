var express = require('express');
var router = express.Router();
var path = require('path');
/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
	//res.sendFile(path.join('../views/index.html'));
	res.sendFile('index.html', { root: '/Users/edwardcoddington/Sites/xlerasolutions/views/'});
});

module.exports = router;