<template>
	<div>
		<transition name="fade" mode="out-in">
			<div v-if="hasSuccess" key="success" class="alert alert-success d-flex align-items-center" role="alert">
				<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="me-3" viewBox="0 0 16 16">
					<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
				</svg>
				<div>
					Your Message has been sent! Thank you for contacting Xlera Solutions.
				</div>
			</div>
			<div v-if="hasError" key="error" class="alert alert-danger d-flex align-items-center" role="alert">
				<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="me-3" viewBox="0 0 16 16">
					<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
				</svg>
				<div>
					It looks like we need a bit more information on this form. We have highlighted the form fields that need attention.
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	import { addBackToTop } from 'vanilla-back-to-top'
	export default {
		name: 'formAlerts',
		props: {
		  status: {
			type: [String,Boolean],
			default: false,
		  }
		},
		data() {
			return {
				message: false
			}
		},
		watch: {
			status: function (val, oldVal) {
				if(val !== oldVal){
					this.message = val;
				}
			}
		},
		computed: {
			hasSuccess(){
				if(this.message == 'success'){
					if(this.scroll){
						this.scrollUp();
					}
					return true;
				}
				return false;
			},
			hasError(){
				if(this.message == 'error'){
					if(this.scroll){
						this.scrollUp();
					}
					return true;
				}
				return false;
			}
		},
		methods: {
			scrollUp() {
				var hasBackToTop = document.getElementById('back-to-top');
				if(hasBackToTop){
					hasBackToTop.click();
				}
			},
			removeMessage(){
				var self = this;
				setTimeout(function () { 
					self.message = false; 
				}, 8000);
			}
		}
	};
</script>