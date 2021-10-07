var api_post = require('../helpers/api_post');

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
	return {
		"contact": {
			"email": data.email,
			"firstName": data.firstName,
			"lastName": data.lastName,
			"phone": data.phone,
			"fieldValues":[
				{
					"field":"21",
					"value":data.page
				},
				{
					"field":"11",
					"value":data.city
				},
				{
					"field":"12",
					"value":data.state
				},
				{
					"field":"13",
					"value":data.myLinkedinHeadline
				},
				{
					"field":"14",
					"value":data.myLinkedinUrl
				},
				{
					"field":"15",
					"value":data.threeUniqueStrengths
				},
				{
					"field":"16",
					"value":data.valuableAddition
				},
				{
					"field":"17",
					"value":data.yourSuperpowers
				},
				{
					"field":"19",
					"value":data.whereDidYouLearnAboutThisOpportunity
				},
				{
					"field":"22",
					"value":data.opportunity
				},
				{
					"field":"20",
					"value":"this should be grouped"
				}
			]
		}
	}
}

module.exports = {
	form_post
}