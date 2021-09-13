<template>
	<div>
		<form action="https://www.getdrip.com/forms/732134178/submissions" @submit.prevent="submit" method="post" data-drip-embedded-form="732134178" ref="downloadForm">
			<div class="mb-3">
				<label for="firstName" class="form-label">First Name</label>
				<input type="text" class="form-control" id="firstName" v-model.trim="$v.form.firstName.$model" :class="{ 'is-invalid': $v.form.firstName.$error }">
				<div class="invalid-feedback fst-italic">
				Please enter your First Name.
				</div>
			</div>
			<div class="mb-3">
				<label for="lastName" class="form-label">Last Name</label>
				<input type="text" class="form-control" id="lastName" v-model.trim="$v.form.lastName.$model" :class="{ 'is-invalid': $v.form.lastName.$error }">
				<div class="invalid-feedback fst-italic">
				Please enter your Last Name.
				</div>
			</div>
			<div class="mb-3">
				<label for="company" class="form-label">Company Name</label>
				<input type="text" class="form-control" id="company" v-model.trim="$v.form.companyName.$model" :class="{ 'is-invalid': $v.form.companyName.$error }">
				<div class="invalid-feedback fst-italic">
				Please enter your Company Name.
				</div>
			</div>
			<div class="mb-3">
				<label for="businessEmail" class="form-label">Business Email</label>
				<input type="text" class="form-control" id="businessEmail" v-model.trim="$v.form.businessEmail.$model" :class="{ 'is-invalid': $v.form.businessEmail.$error }">
				<div class="invalid-feedback fst-italic">
				Please enter your Business Email.
				</div>
			</div>
			<div class="mb-3">
				<label for="phone" class="form-label">Phone</label>
				<input type="tel" class="form-control" id="phone" v-model.trim="form.phone" v-mask="'(###) ###-####'">
				<div class="invalid-feedback fst-italic">
				Please enter your Phone.
				</div>
			</div>
			<div class="mb-3">
				<label for="whatsOnYourMind" class="form-label">What’s on your mind?</label>
				<textarea rows="3" class="form-control" id="whatSOnYourMind" v-model.trim="form.whatsOnYourMind"></textarea>
			</div>
			<div class="d-flex justify-content-end mb-3 pt-3 border-top">
				 <button type="submit" class="btn btn-secondary">Get Access Now</button>
			</div>
		</form>
	</div>
</template>

<script>
	import { required,email } from 'vuelidate/lib/validators';
	export default {
		name: 'downloadForm',
		data() {
			return{
				submitStatus: null,
				form: {
					'firstName': '',
					'lastName': '',
					'companyName': '',
					'businessEmail': '',
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
				'businessEmail': {
					required,
					email
				},
			}
		},
		methods: {
			submit() {
				console.log('submit!')
				this.$v.$touch()
				if (this.$v.$invalid) {
					this.submitStatus = 'ERROR'
				} else {
					this.$refs.downloadForm.submit();
				}
			}
		}
	};
</script>