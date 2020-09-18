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
				slidesPerView: '4',
				touchRatio: 0.2,
				observer: true,
				observeParents: true,
				slideToClickedSlide: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			});
		}
		if (document.querySelector('.news-slider')) {
			new Swiper('.news-slider', {
				slidesPerView: 3,
				loop: false,
				centerInsufficientSlides: true,
			});
		}
		if (document.querySelector('.events-slider')) {
			new Swiper('.events-slider', {
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
