<template>
	<div>
		<form-alerts :status="formStatus"></form-alerts>
		<form action="/download-form" @submit.prevent="submit" method="post" ref="form">
			<div class="mb-3">
				<label for="firstName" class="form-label">First Name</label>
				<input type="text" class="form-control" id="firstName" name="firstName" v-model.trim="$v.form.firstName.$model" :class="{ 'is-invalid': $v.form.firstName.$error }">
				<div class="invalid-feedback fst-italic">
				Please enter your First Name.
				</div>
			</div>
			<div class="mb-3">
				<label for="lastName" class="form-label">Last Name</label>
				<input type="text" class="form-control" id="lastName" name="lastName" v-model.trim="$v.form.lastName.$model" :class="{ 'is-invalid': $v.form.lastName.$error }">
				<div class="invalid-feedback fst-italic">
				Please enter your Last Name.
				</div>
			</div>
			<div class="mb-3">
				<label for="company" class="form-label">Company Name</label>
				<input type="text" class="form-control" id="companyName" name="companyName" v-model.trim="$v.form.companyName.$model" :class="{ 'is-invalid': $v.form.companyName.$error }">
				<div class="invalid-feedback fst-italic">
				Please enter your Company Name.
				</div>
			</div>
			<div class="mb-3">
				<label for="email" class="form-label">Business Email</label>
				<input type="text" class="form-control" id="email" name="email" v-model.trim="$v.form.email.$model" :class="{ 'is-invalid': $v.form.email.$error }">
				<div class="invalid-feedback fst-italic">
				Please enter your Business Email.
				</div>
			</div>
			<div class="mb-3">
				<label for="phone" class="form-label">Phone</label>
				<input type="tel" class="form-control" id="phone" name="phone" v-model.trim="form.phone" v-mask="'(###) ###-####'">
				<div class="invalid-feedback fst-italic">
				Please enter your Phone.
				</div>
			</div>
			<div class="mb-3">
				<label for="whatsOnYourMind" class="form-label">What’s on your mind?</label>
				<textarea rows="3" class="form-control" id="whatsOnYourMind" name="whatsOnYourMind" v-model.trim="form.whatsOnYourMind"></textarea>
			</div>
			<div class="d-flex justify-content-end mb-3 pt-3 border-top">
				 <button type="submit" class="btn btn-secondary">Get Access Now</button>
			</div>
		</form>
	</div>
</template>

<script>
	import { required,email } from 'vuelidate/lib/validators';
	import formAlerts from './formAlerts';
	export default {
		name: 'downloadForm',
		components: {
			formAlerts
		},
		data() {
			return{
				submitStatus: null,
				form: {
					'page': 'Download Report Modal',
					'firstName': '',
					'lastName': '',
					'companyName': '',
					'email': '',
					'phone': '',
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
					axios.post('/download-form', this.form)
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
					'whatsOnYourMind': ''
				};
				setTimeout(function () {
					 this.submitStatus = false;
					 this.$emit('complete');
				}.bind(this), 5000);
			},
		}
	};
</script>