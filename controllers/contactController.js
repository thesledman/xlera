var axios = require('axios').default; // AJAX handler 

const form_post = (req,res) => {
	//res.json(req);
	var form_data = format_data(req.body);
	if(send_message(form_data)){
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
					"field":"1",
					"value":data.companyName
				},
				{
					"field":"7",
					"value":data.whatsOnYourMind
				},
				{
					"field":"8",
					"value":data.preferPhone
				},
				{
					"field":"9",
					"value":data.page
				},
				{
					"field":"10",
					"value":data.tellUsALittleAboutYourInterest
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
		return true;
	  });
}

module.exports = {
	form_post
}