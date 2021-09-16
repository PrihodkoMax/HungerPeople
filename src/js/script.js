// window.addEventListener('DOMContentLoaded', function () {

// 	// Menu back panel

// 	const backdrop = document.querySelector('.backdrop');
// 	const menuButton = document.querySelector('.header__logo img');
// 	const menuCloseButton = document.querySelector('.menu__close');
// 	const menuPanel = document.querySelector('menu.menu');

// 	menuButton.addEventListener('click', () => {
// 		showMenu();
// 	});

// 	menuCloseButton.addEventListener('click', () => {
// 		closeMenu();
// 	});

// 	backdrop.addEventListener('click', () => {
// 		closeMenu();
// 	});

// 	function showMenu() {
// 		menuPanel.classList.add('menu_show');
// 		backdrop.classList.add('opened');
// 		document.body.style.overflow = 'hidden';
// 	}

// 	function closeMenu() {
// 		menuPanel.classList.remove('menu_show');
// 		backdrop.classList.remove('opened');
// 		document.querySelector('body').style.overflow = 'auto';
// 	}
// });



window.addEventListener('DOMContentLoaded', () => {
	const menu = document.querySelector('.menumob'),
		menuItem = document.querySelectorAll('.menu_item'),
		hamburger = document.querySelector('.menu_button');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		//  menu.classList.toggle('menu_active');
	});

	// menuItem.forEach(item => {
	// 	 item.addEventListener('click', () => {
	// 		  hamburger.classList.toggle('hamburger_active');
	// 		  menu.classList.toggle('menu_active');
	// 	 })
	// })
})


