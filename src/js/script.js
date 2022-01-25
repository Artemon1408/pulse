// $(document).ready(function(){
// 	$('.carousel__inner').slick({
// 		speed: 1200,
// 		// adaptiveHeight: true,
// 		prevArrow: '<button type="button" class="slick-prev"><img src="../images/logo/chevron_left_solid.png"></button>',
// 		nextArrow: '<button type="button" class="slick-next"><img src="../images/logo/chevron_right_solid.png"></button>',
// 		responsive: [
// 				{
// 					breakpoint: 768,
// 					settings: {
// 						dots: true,
// 						arrows: false
// 				}
// 			}
// 		],
		
// 	});
// });

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
	controls: false,
	nav: false,

	responsive : {
		320: {
			edgePadding: 20,
			gutter: 20,
			items: 1, 
			nav: true
		},
		
		575: {
			edgePadding: 20,
			gutter: 20,
			items: 1,
			
			
			
		},
		991: {
			gutter: 30,
			items: 1,
			nav: true
			
		},
		992: {
			items: 1,
			nav: false
			

		}
} 
	
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});

