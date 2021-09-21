var ejs = require('ejs'); // Used to render template to variable
var fs = require('fs'); // Node function to read file to plain-text
var nodemailer = require('nodemailer'); // Node email functions
// Set the email servers and credentials
// Note: credentials stored in .env located in site root
let transport = nodemailer.createTransport({
	host: 'smtp.mailtrap.io',
	port: 2525,
	auth: {
	  user: process.env.EMAIL_USERNAME,
	  pass: process.env.EMAIL_PASSWORD
	}
 });

const contact_post = (req,res) => {
	var form_data = {formData: req.body,pageName: 'Contact'};
	// Send the message, optionally set the message subject
	//send_message(form_data, null);
	res.status().send(200); 
}

const send_message = (form_data,subject = 'Form submission from Xelra') => {
	// Set TO: email address
	var email_to = 'dev@edwardcoddington.com';
	// Set FROM: email address
	var email_from = 'swebsite@xlera.com';
	// Read the email template: views/layouts/email-template.ejs
	var str = fs.readFileSync(__dirname + '/../views/layouts/email-template.ejs', 'utf8');
	// Populate the template with the "form_data" and save the compiled template
	// to the "message" variable to send HTML formatted email.
	var message = ejs.render(str, form_data);
	// Set the sendmail options using the data.
	var mailOptions = {
		from: email_from, // Sender address
		to: email_to, // List of recipients
		subject: subject, // Subject line
		html: message // the content to send
	};
	transport.sendMail(mailOptions, function(err, info) {
	   if (err) {
		 console.log(err)
	   } else {
		 console.log(info);
	   }
	});
}

module.exports = {
	contact_post
}