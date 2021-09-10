import { required,requiredIf } from 'vuelidate/lib/validators';
if (document.getElementById("contactForm")) {
	var contact = new Vue({
		el: '#contactForm',
		components: {},
		data() {
			return{
				submitStatus: null,
				form: {
					'firstName': '',
					'lastName': '',
					'companyName': '',
					'companyEmail': '',
					'phone': '',
					'preferPhone': true,
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
				'companyEmail': {
					required
				},
				'phone': {
					required : requiredIf(function (form) {
						return form.preferPhone == true;
					  })
				},
				'preferPhone': {},
			}
		},
		methods: {
			submit() {
			console.log('submit!')
			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {
				// do your submit logic here
				this.submitStatus = 'PENDING'
				setTimeout(() => {
				this.submitStatus = 'OK'
				}, 500)
			}
			}
		}
	});
}