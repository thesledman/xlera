import { required,requiredIf,email } from 'vuelidate/lib/validators';
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
		methods: {
			submit() {
				console.log('submit!')
				this.$v.$touch()
				if (this.$v.$invalid) {
					this.submitStatus = 'ERROR'
				} else {
					this.$refs.form.submit();
				}
			}
		}
	});
}