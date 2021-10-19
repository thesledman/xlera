var axios = require('axios').default; // AJAX handler 

const send_message = (form_data) => {
	//process.env.API_URL
	var config = {
		url: 'https://xlerasolutions.api-us1.com/api/3/contacts',
		method: 'post',
		headers: {'Api-Token':process.env.API_KEY},
		data: form_data
	}
	console.log('this was submitted');
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
	send_message
}