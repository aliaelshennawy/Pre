import Swiper from './web_modules/swiper.js';
import { Navigation, Pagination } from './web_modules/swiper.js';
import ScrollReveal from './web_modules/scrollreveal.js';

class App {
	constructor() {
		this.activateSliders();
		this.scrollAnimation();
		this.activateMenu();
		this.languageSwitcher();
		this.showMap();
	}
	languageSwitcher() {
		const switchToAr = document.querySelector('.language-switch-ar');
		const switchToEn = document.querySelector('.language-switch-en');
		const element = document.querySelector('html');
		switchToAr.addEventListener('click', () => {
			document.body.className = 'ar';
			element.setAttribute('dir', 'rtl');
			element.setAttribute('lang', 'ar');
			switchToEn.classList.toggle('hidden');
			switchToAr.classList.add('hidden');
		});
		switchToEn.addEventListener('click', () => {
			document.body.className = 'en';
			element.setAttribute('dir', 'ltr');
			element.setAttribute('lang', 'en');
			switchToAr.classList.toggle('hidden');
			switchToEn.classList.add('hidden');
		});
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
		if (document.querySelector('.ammenties-slider')) {
			new Swiper('.ammenties-slider', {
				slidesPerView: '1',
				pagination: {
					el: '.swiper-pagination',
					type: 'fraction',
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			});
		}
		if (document.querySelector('.unit-types-slider')) {
			new Swiper('.unit-types-slider', {
				centeredSlides: true,
				// spaceBetween: 120,
				slidesPerView: 'auto',
				roundLengths: true,
				loop: true,
			});
		}
		if (document.querySelector('.career-banner-slider')) {
			new Swiper('.career-banner-slider', {
				slidesPerView: '1',
				pagination: {
					el: '.swiper-pagination',
					type: 'fraction',
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
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
				pagination: {
					el: '.swiper-pagination',
					type: 'fraction',
				},
			});
		}
		if (document.querySelector('.community-slider')) {
			new Swiper('.community-slider', {
				slidesPerView: 'auto',
				centeredSlides: true,
				spaceBetween: 20,
				pagination: {
					el: '.swiper-pagination',
					type: 'fraction',
				},
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
	showMap() {
		const map = document.querySelector('.show-map');
		const masterClick = document.querySelector('.map-details-click');
		const masterMap = document.querySelector('.map-details');
		const masterClose = document.querySelector('.close-map');
		map.addEventListener('click', () => {
			masterClick.classList.toggle('hidden');
			masterMap.classList.toggle('hidden');
		});
		masterClose.addEventListener('click', () => {
			masterClick.classList.remove('hidden');
			masterMap.classList.add('hidden');
		});
	}
	scrollAnimation() {
		ScrollReveal().reveal('.animate', { delay: 200 });
	}
	isArabic(text) {
		const arabic = /[\u0600-\u06FF]/;
		return arabic.test(text);
	}
}

new App();
