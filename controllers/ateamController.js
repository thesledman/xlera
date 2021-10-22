const fs = require('fs');
const _ = require("lodash");
var listingsDirectory = null;
// Stores active listings to be printed to the page
var currentListings = [];
// Stores a lookup table in session (local storage) to make loading opp
// specific data faster on opportunity page.
var lookupTable = [];
	
const index = function(req, res) {
	listingsDirectory = req.app.get('listingsDirectory');
	currentListings = [];
	lookupTable = [];
	get_listings();
	var locals = {
		title: 'Xlera Solutions - Join the A-Team',
		opportunities: currentListings
	};
	req.session.lookup = lookupTable;
	res.render('a-team', locals);
};

const get_listings = () => {
	var files = fs.readdirSync(listingsDirectory, { withFileTypes: true })
		.filter(dirent => dirent.isFile())
		.map(dirent => dirent.name);
		console.log("files: " + files.length,files);
		if(files.length >= 1){
			for(var i = 0;i<files.length;i++){
				var fileContent = read_listings(files[i]);
				if(fileContent && fileContent.display){
					// Add filename to data
					fileContent.filename = files[i];
					// Add slug to file data.
					fileContent.slug = slugify(fileContent.name);
					currentListings.push(fileContent);
					build_lookup_table(fileContent);
				}
			}
		}
	return true;
}

const build_lookup_table = (fileContent) => {
	var entry = {
		"filename": fileContent.filename,
		"name" : fileContent.name,
		"slug": fileContent.slug
	}
	lookupTable.push(entry);
	return;
}


const read_listings = (filename) => {
	try{ 
		var content = JSON.parse(fs.readFileSync(listingsDirectory + '/' + filename, 'utf8'));
	  } catch(e) { 
		return false;
	  }
	return content;
}

const slugify = (text) => {
    return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g,'').replace(/-+/g, '-');
}

module.exports = {
	index
}