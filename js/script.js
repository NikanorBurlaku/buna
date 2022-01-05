$('.slider').on('init', function (event, slick) {
	console.log('.slider init');

	AOS.init({
		easing: 'ease-out-back',
		duration: 1000
	});
});
$(document).ready(function () { 		//слайдер
	$('.slider').slick({
		centerMode: true,
		slidesToShow: 3,
		autoplay: true,
		speed: 2000,
		lazyLoad: 'ondemand',
		arrows: false,
		autoplaySpeed: 3500,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
function onEntry(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
			change.target.classList.add('element-show');
		}
	});
}

let options = {  //svg
	threshold: [0.5]
};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
	observer.observe(elm);
}
/*
let reservation=document.querySelector('.reservation')

function show()
{
reservation.style.display = (reservation.style.display == "none") ? "block" : "none";
console.log('1')
}*/