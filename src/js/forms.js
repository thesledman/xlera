import { required,requiredIf,email } from 'vuelidate/lib/validators';
import downloadForm from './components/downloadForm';
import formAlerts from './components/formAlerts';

if (document.getElementById("downloadForm")) {
	var download = new Vue({
		el: '#downloadForm',
		components: {
			downloadForm
		},
		data() {
			return{}
		},
		methods: {
			closeModal(){
				var myModalEl = document.getElementById('downloadModal');
				var modal = bootstrap.Modal.getInstance(myModalEl);
				modal.hide();
			}
		}
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
				submitStatus: false,
				form: {
					'firstName': '',
					'lastName': '',
					'companyName': '',
					'email': '',
					'phone': '',
					'preferPhone': false,
					'whatsOnYourMind': '',
					'page':''
				},
			}
		},
		mounted() {
			this.form.page = document.getElementById('page').value;
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
				'whatsOnYourMind': {},
				'page': {}
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
					this.submitStatus = 'error';
				} else {
					var self = this;
					axios.post('/contact-us', this.form)
					  .then(function (response) {
						console.log(response);
						self.submitStatus = 'success';
						self.reset();
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
			}
		}
	});
}

if (document.getElementById("qlrForm")) {
	var qlr = new Vue({
		el: '#qlrForm',
		components: {
			formAlerts,
		},
		data() {
			return{
				submitStatus: false,
				form: {
					'page': '',
					'firstName': '',
					'lastName': '',
					'email': '',
					'phone': '',
					'preferPhone': false,
					'tellUsALittleAboutYourInterest': ''
				},
			}
		},
		mounted() {
			this.form.page = document.getElementById('page').value;
		},
		validations: {
			form: {
				'firstName': {
					required
				},
				'lastName': {
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
				'tellUsALittleAboutYourInterest':{}
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
					this.submitStatus = 'error';
				} else {
					var self = this;
					axios.post('/qlr', this.form)
					  .then(function (response) {
						console.log(response);
						self.submitStatus = 'success';
						self.reset();
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
			}
		}
	});
}

if (document.getElementById("step1form")) {
	var stepOne = new Vue({
		el: '#step1form',
		components: {
			formAlerts,
		},
		data() {
			return{
				submitStatus: false,
				form: {
					'page':'',
					'opportunity': '',
					'myLinkedinHeadline': '',
					'firstName': '',
					'lastName': '',
					'email': '',
					'phone': '',
					'city': '',
					'state': '',
					'myLinkedinUrl':'',
					'threeUniqueStrengths':'',
					'valuableAddition':'',
					'yourSuperpowers': [],
					'whereDidYouLearnAboutThisOpportunity':''
				},
			}
		},
		mounted() {
			this.form.page = document.getElementById('page').value;
			this.form.opportunity = document.getElementById('opportunity').value;
		},
		validations: {
			form: {
				'firstName': {
					required
				},
				'lastName': {
					required
				},
				'email': {
					required,
					email
				},
				'phone': {
					required
				},
				'city': {},
				'state': {},
				'myLinkedinHeadline': {},
				'myLinkedinUrl':{},
				'threeUniqueStrengths':{},
				'valuableAddition':{},
				'yourSuperpowers': {},
				'whereDidYouLearnAboutThisOpportunity':{}
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
					this.submitStatus = 'error';
				} else {
					var self = this;
					this.form.yourSuperpowers = this.form.yourSuperpowers.join(", ");
					axios.post('/step-1', this.form)
					  .then(function (response) {
						console.log(response);
						window.location.href = '/step-2';
						self.reset();
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
					'city': '',
					'state': '',
					'myLinkedinUrl':'',
					'threeUniqueStrengths':'',
					'valuableAddition':'',
					'yourSuperpowers': '',
					'whereDidYouLearnAboutThisOpportunity':''
				};
			}
		}
	});
}