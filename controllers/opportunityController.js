const fs = require('fs'); 
const _ = require("lodash");
var listingsDirectory = null;

const index = function(req, res, next) {
	listingsDirectory = req.app.get('listingsDirectory');
	var opportunity = lookup(req.session.lookup ,req.params.opportunityId);
	req.session.opportunity = opportunity;
	var locals = {
		"title": "Xlera Solutions - Opportunity",
		"opportunity": opportunity
	};
	res.render('opportunity', locals);
};

const lookup = (lookup,slug) => {
	// get the filename from lookup table based on slug
	var opp = _.find(lookup, function(o) { return o.slug == slug; });
	var content = JSON.parse(fs.readFileSync(listingsDirectory + '/' + opp.filename, 'utf8'));
	return Object.assign(content, opp);
}

module.exports = {
	index
}
