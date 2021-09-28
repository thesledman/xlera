var axios = require('axios').default; // AJAX handler 

const form_post = (req,res) => {
	var form_data = format_data(req.body);
	var sent = send_message(form_data);
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

const send_message = (form_data) => {
//process.env.API_URL
	var config = {
		url: 'https://xlerasolutions.api-us1.com/api/3/contacts',
		method: 'post',
		headers: {'Api-Token':process.env.API_KEY},
		data: form_data
	}

	axios(config)
	.then(function (response) {
		console.log(response);
		return true;
	  })
	  .catch(function (error) {
		console.log(error.response.data,error);
		return error;
	  });
}

module.exports = {
	form_post
}