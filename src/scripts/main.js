import Swiper from './web_modules/swiper.js';
import ScrollReveal from './web_modules/scrollreveal.js';

class App {
	constructor() {
		this.activateSliders();
		this.scrollAnimation();
		this.activateMenu();
	}

	activateSliders() {
		if (document.querySelector('.home-slider__wrapper')) {
			new Swiper('.home-slider__wrapper', {
				centeredSlides: true,
				slidesPerView: 'auto',
				touchRatio: 0.2,
				slideToClickedSlide: true,
				pagination: {
					el: '.swiper-pagination',
					type: 'fraction',
					clickable: true,
					renderBullet(index, className) {
						let number = index + 1;
						if (number < 10) {
							number = `0${number}`;
						}
						return `<span class="${className}">${number}</span>`;
					},
				},
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
