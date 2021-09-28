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
				var self = this;
				this.$v.$touch()
				if (this.$v.$invalid) {
					this.submitStatus = 'error'
				} else {
					this.$refs.form.submit();
					this.submitStatus = 'success';
					this.reset();
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
	var qlr = new Vue({
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
					this.$refs.form.submit();
					this.submitStatus = 'success';
					this.reset();
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

if (document.getElementById("step1form")) {
	var stepOne = new Vue({
		el: '#step1form',
		components: {
			formAlerts,
		},
		data() {
			return{
				submitStatus: null,
				form: {
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
		validations: {
			form: {
				'myLinkedinHeadline': {},
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
					this.submitStatus = 'error'
					if(document.getElementById('back-to-top')){
						document.getElementById('back-to-top').click();
					}
				} else {
					this.$refs.form.submit();
					this.submitStatus = 'success';
					this.reset();
				}
			},
			reset(){
				this.$v.$reset();
				this.form = {
					'firstName': '',
					'lastName': '',
					'email': '',
					'phone': '',
				};
				setTimeout(function () { this.submitStatus = null; }.bind(this), 8000);
			}
		}
	});
}