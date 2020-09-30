import Swiper from './web_modules/swiper.js';
import { Navigation, Pagination } from './web_modules/swiper.js';
import ScrollReveal from './web_modules/scrollreveal.js';

class App {
	constructor() {
		this.activateSliders();
		this.scrollAnimation();
		this.activateMenu();
	}

	activateSliders() {
		Swiper.use([Navigation, Pagination]);
		if (document.querySelector('.home-slider__wrapper')) {
			new Swiper('.home-slider__wrapper', {
				slidesPerView: '1',
				touchRatio: 0.2,
				slideToClickedSlide: true,
				pagination: {
					el: '.swiper-pagination',
					type: 'fraction',
				},
			});
		}
		if (document.querySelector('.shop-slider')) {
			new Swiper('.shop-slider', {
				slidesPerView: 'auto',
				pagination: {
					el: '.swiper-pagination',
					type: 'fraction',
				},
			});
		}
		if (document.querySelector('.news-slider')) {
			new Swiper('.news-slider', {
				slidesPerView: 3,
				loop: false,
				centerInsufficientSlides: true,
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 0,
					},
					768: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
				},
			});
		}
		if (document.querySelector('.unit-slider-wrapper')) {
			new Swiper('.unit-slider-wrapper', {
				slidesPerView: 'auto',
				centeredSlides: true,
				slidesPerGroup: 1,
				spaceBetween: 20,
			});
		}
		if (document.querySelector('.events-slider')) {
			new Swiper('.events-slider', {
				slidesPerView: 'auto',
			});
		}
		if (document.querySelector('.community-slider')) {
			new Swiper('.community-slider', {
				slidesPerView: 'auto',
				centeredSlides: true,
				spaceBetween: 20,
			});
		}
		if (
			window.matchMedia('(max-width: 767px)').matches &&
			document.querySelector('.grid-banner-wrapper')
		) {
			new Swiper('.grid-banner-wrapper', {
				slidesPerView: 'auto',
			});
		}
	}
	activateMenu() {
		const menu = document.querySelector('.header-menu');
		const nav = document.querySelector('.header-nav');
		if (!menu) {
			return;
		}
		menu.addEventListener('click', () => {
			document.body.classList.toggle('menu-opened');
			nav.classList.toggle('hidden');
		});
	}
	scrollAnimation() {
		ScrollReveal().reveal('.animate', { delay: 200 });
	}
}

new App();
