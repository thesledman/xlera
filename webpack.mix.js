// At its core, Laravel-Mix is an opinionated, fluent API on top of webpack. It is independant from Laravel but initially was developed to make integrating Webpack for use with Laravel projects easier.
let mix = require('laravel-mix');
require('laravel-mix-purgecss');
mix.setPublicPath('public');
const path = require("path");

mix.options({
    processCssUrls: true,
    postCss: [],
    terser: {},
    autoprefixer: {},
    legacyNodePolyfills: true
});

var paths = {
    node: './node_modules/',
    resource: './src/',
    public: './public/',
};

mix.js([
	paths.resource + 'js/site.js',
	paths.resource + 'js/contact.js'
], paths.public + 'js/site.js').vue();

mix.sass(paths.resource + 'scss/app.scss', paths.public + 'css/site.css')
	.purgeCss({
		content: [path.join(__dirname, 'views/*.ejs'),path.join(__dirname, 'views/layouts/*.ejs')],
		safelist: { deep: [/hljs/] },
	});