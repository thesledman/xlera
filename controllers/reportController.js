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
					"field":"23",
					"value":data.companyName
				},
				{
					"field":"25",
					"value":data.whatsOnYourMind
				},
				{
					"field":"21",
					"value":data.page
				},
			]
		}
	}
}

module.exports = {
	form_post
}