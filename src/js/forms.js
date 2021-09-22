import { required,requiredIf,email } from 'vuelidate/lib/validators';
import downloadForm from './components/downloadForm';
import formAlerts from './components/formAlerts';
if (document.getElementById("modalForm")) {
	var download = new Vue({
		el: '#modalForm',
		components: {
			downloadForm
		},
		data() {
			return{}
		},
	});
}

if (document.getElementById("contactForm")) {
	var contact = new Vue({
		el: '#contactForm',
		components: {
			formAlerts,
		},
		data() {
			return{
				submitStatus: null,
				form: {
					'firstName': '',
					'lastName': '',
					'companyName': '',
					'email': '',
					'phone': '',
					'preferPhone': false,
					'whatsOnYourMind': ''
				},
			}
		},
		validations: {
			form: {
				'firstName': {
					required
				},
				'lastName': {
					required
				},
				'companyName': {
					required
				},
				'email': {
					required,
					email
				},
				'phone': {
					required : requiredIf(function (form) {
						return form.preferPhone == true
					  })
				},
				'preferPhone': {},
			}
		},
		computed: {
		  formStatus() {
			return this.submitStatus;
		  }
		},
		methods: {
			submit() {
				this.$v.$touch()
				if (this.$v.$invalid) {
					this.submitStatus = 'error'
				} else {
					//this.$refs.form.submit();
					var self = this;
					axios.post('/contact-us', self.form)
					  .then(function (response) {
						self.submitStatus = 'success';
						self.reset();
						//console.log(response);
					  })
					  .catch(function (error) {
						self.submitStatus = 'error';
						console.log(error);
					  });
				}
			},
			reset(){
				this.$v.$reset();
				this.form = {
					'firstName': '',
					'lastName': '',
					'companyName': '',
					'email': '',
					'phone': '',
					'preferPhone': false,
					'whatsOnYourMind': ''
				};
				setTimeout(function () { this.submitStatus = null; }.bind(this), 8000);
			}
		}
	});
}

if (document.getElementById("qlrForm")) {
	var contact = new Vue({
		el: '#qlrForm',
		components: {
			formAlerts,
		},
		data() {
			return{
				submitStatus: null,
				form: {
					'firstName': '',
					'lastName': '',
					'companyName': '',
					'email': '',
					'phone': '',
					'preferPhone': false,
					'tellUsALittleAboutYourInterest': ''
				},
			}
		},
		validations: {
			form: {
				'firstName': {
					required
				},
				'lastName': {
					required
				},
				'companyName': {
					required
				},
				'email': {
					required,
					email
				},
				'phone': {
					required : requiredIf(function (form) {
						return form.preferPhone == true
					  })
				},
				'preferPhone': {},
			}
		},
		computed: {
		  formStatus() {
			return this.submitStatus;
		  }
		},
		methods: {
			submit() {
				this.$v.$touch()
				if (this.$v.$invalid) {
					this.submitStatus = 'error'
				} else {
					//this.$refs.form.submit();
					var self = this;
					axios.post('/qlr', self.form)
					  .then(function (response) {
						self.submitStatus = 'success';
						self.reset();
						//console.log(response);
					  })
					  .catch(function (error) {
						self.submitStatus = 'error';
						console.log(error);
					  });
				}
			},
			reset(){
				this.$v.$reset();
				this.form = {
					'firstName': '',
					'lastName': '',
					'email': '',
					'phone': '',
					'preferPhone': false,
					'tellUsALittleAboutYourInterest': ''
				};
				setTimeout(function () { this.submitStatus = null; }.bind(this), 8000);
			}
		}
	});
}