const nav = document.querySelector('#nav');
const loader = document.querySelectorAll('#loader path');

for (let i = 0; i < loader.length; i++) {
	console.log(`Letter ${i} is ${loader[i].getTotalLength()}`);
}
//preloader
$(window).on('load', function () {
	$('#loader').delay(500).fadeOut(5000);
	$('#preloader').delay(2000).slideUp(1000);
});

// Nav scroll

window.addEventListener('scroll', () => {
	if (window.pageYOffset > 50) {
		nav.classList.add('navscroll');
		nav.classList.remove('nave');
	} else {
		nav.classList.remove('navscroll');
		nav.classList.add('nave');
	}
});

// var typed = new Typed('#typed', {
// 	stringsElement: '#typed-strings',
// 	typeSpeed: 100,
// 	loop: true,
// 	loopCount: Infinity,
// });

$('.slider').slick({
	speed: 800,
	arrows: false,
	dots: false,
	autoplay: true,

	cssEase: 'linear',
});
