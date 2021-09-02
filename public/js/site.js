var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

const navbar = document.querySelector('#subnav');
const scrollspy = VanillaScrollspy(navbar,300);
scrollspy.init();
