require('./bootstrap');
// enable smooth scrolling for same page anchors (suuport for older browsers)
import SmoothScroll from 'smooth-scroll';
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 300
});
// Add back to top button
import { addBackToTop } from 'vanilla-back-to-top'
addBackToTop({
    scrollDuration: 200
  });
// Init (opt-in) bootstrap css tool tips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

