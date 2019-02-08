// JS Document

var menu = document.querySelector('#bmenu');
var main = document.querySelector('main');
var sidenav = document.querySelector('.nav');

menu.addEventListener('click', function(e) {
sidenav.classList.toggle('open');
e.stopPropagation();
});
main.addEventListener('click', function() {
sidenav.classList.remove('open');
});