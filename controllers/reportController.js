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
		return true;
	  });
}

module.exports = {
	form_post
}