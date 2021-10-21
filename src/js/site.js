require('./bootstrap');
// enable smooth scrolling for same page anchors (suuport for older browsers)
import SmoothScroll from 'smooth-scroll';
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300,
	offset: function (anchor, toggle) {
		if (anchor.innerText.indexOf('FPGAtalent') !== -1) {
			return 128;
		} else {
			return 100;
		}

	}
});
// Add back to top button
import { addBackToTop } from 'vanilla-back-to-top'
var backToTop = addBackToTop({
    scrollDuration: 200
  });
// Init (opt-in) Bootstrap css tool-tips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
// Init Bootstrap Modal
if (document.getElementById("downloadModal")) {
	var downloadModal = new bootstrap.Modal(document.getElementById('downloadModal'));
}
// Form components validation/masking
import Vuelidate from 'vuelidate';
Vue.use(Vuelidate);

import VueTheMask from 'vue-the-mask';
Vue.use(VueTheMask);
window.addEventListener('load', function(){
	var cookieconsent = initCookieConsent();
	cookieconsent.run({
		current_lang : 'en',
		hide_from_bots: true,
		cookie_expiration: 1,
		theme_css : '/css/site.css',
		onAccept : function(){
			// do something ...
		},
		languages : {
			en : {
				consent_modal : {
					title :  "This site uses cookies.",
					description :  'To learn more, see our <a href="/privacy">Privacy Policy</a>.',
					primary_btn: {
						text: 'Ok',
						role: 'accept_all'  //'accept_selected' or 'accept_all'
					},
					secondary_btn: {
						text : 'Reject',
						role : 'accept_necessary'   //'settings' or 'accept_necessary'
					}
				},
				settings_modal : {
					title : 'Cookie settings',
					save_settings_btn : "Save settings",
					accept_all_btn : "Accept all",
					reject_all_btn : "Reject all", // optional, [v.2.5.0 +]
					close_btn_label: "Close",   
					blocks : [
						{
							title : "Cookie usage",
							description: 'Your cookie usage disclaimer'
						},{
							title : "Strictly necessary cookies",
							description: 'Category description ... ',
							toggle : {
								value : 'necessary',
								enabled : false,
								readonly: true
							}
						},{
							title : "Analytics cookies",
							description: 'Category description ... ',
							toggle : {
								value : 'analytics',
								enabled : false,
								readonly: false
							}
						},
					]
				}
			}
		}
	});
});
var hasClosed = false;
if (document.getElementById("bookACallModal")) {
	var popUpModal = new bootstrap.Modal(document.getElementById('bookACallModal'));
	document.addEventListener("mouseleave", function(event){	
		if(!hasClosed){
			if(event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight))
			{
				popUpModal.show();
				hasClosed = true;
			}
		}
	});
	window.addEventListener('load', function(){
		setTimeout(() => {
			if(!hasClosed){
				popUpModal.show();
				hasClosed = true;
			}
		}, 15000);
	});
}