var path = require('path');
const fs = require('fs');
const _ = require("lodash");
var listinsDirectory = path.join(__dirname, '../opportunities');

const index = function(req, res) {
	var opps = get_listings();
	var locals = {
		title: 'Xlera Solutions - Step 1',
		opportunities: opps.listings
	};
	req.session.lookup = opps.lookup;
	console.log(req.session.lookup);
	res.render('a-team', locals);
};

const get_listings = () => {
	var files = fs.readdirSync(listinsDirectory, { withFileTypes: true })
		.filter(dirent => dirent.isFile())
		.map(dirent => dirent.name);
	var listings = [];
	var lookup = [];
	for(var i = 0;i<files.length;i++){
		// used to print opps to page
		var theListing = read_listings(files[i]);
		listings.push(theListing);
		//used as lookup table when selecting an opp
		var entry = {
			"filename": theListing.filename,
			"name" : theListing.content.name,
			"slug": theListing.content.slug
		}
		lookup.push(entry);
	}
	var oppData = {"listings": listings,"lookup": lookup};
	return oppData;
}

const read_listings = (filename) => {
	var content = JSON.parse(fs.readFileSync(listinsDirectory + '/' + filename, 'utf8'));
	// console.log({'Filename': filename,'Content': content});
	content.slug = slugify(content.name);
	return {'filename': filename,'content': content};
}

const slugify = (text) => {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g,'').replace(/-+/g, '-');
}

module.exports = {
	index
}