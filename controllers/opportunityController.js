var api_post = require('../helpers/api_post');
const _ = require("lodash");

const index = function(req, res, next) {
	var opportunity = lookup(req.session.lookup ,req.params.opportunityId);
	req.session.opportunity = opportunity;
	var locals = {
		"title": "Xlera Solutions - Opportunity",
		"opportunity": opportunity
	};
	console.log(locals);
	res.render('opportunity', locals);
};

const lookup = (opps,slug) => {
	var opp = _.filter(opps, function(o) { return o.slug == slug; });
	return opp;
}

const form_post = (req,res) => {
	var form_data = format_data(req.body);
	//console.log(form_data);
	var sent = api_post.send_message(form_data);
	if(sent){
		res.sendStatus(sent,200); 
	} else {
		res.sendStatus(200);
	}
}

const format_data = (data) => {
	if(data.preferPhone === true){
		data.preferPhone = 'yes';
	}
	return {
		"contact": {
			"email": data.email,
			"firstName": data.firstName,
			"lastName": data.lastName,
			"phone": data.phone,
			"fieldValues":[
				{
					"field":"8",
					"value":data.preferPhone
				},
				{
					"field":"21",
					"value":data.page
				},
				{
					"field":"23",
					"value":data.companyName
				},
				{
					"field":"25",
					"value":data.whatsOnYourMind
				}
			]
		}
	}

}

module.exports = {
	index,
	form_post
}