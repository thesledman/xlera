// used to compile core JS modules for Webpack.
// DO NOT include Express Server files here

window._ = require('lodash'); // JS Function Lib
try {
	// Add Popper(required for bootrap)
	window.Popper = require('popper.js').default;
	// Add Bootstap JS files
	window.bootstrap = require('bootstrap');
} catch (e) {}
window.Vue = require('vue').default; // JS framework
window.axios = require('axios'); // AJAX handler 
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';