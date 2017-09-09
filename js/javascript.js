const ready = () => {
	const fieldEls = document.querySelectorAll('.field');
	const link = document.querySelector('.address__btn');
	const overlay = document.querySelector('.overlay');
	const popup = document.querySelector('.feedback');
	const close = document.querySelector('.feedback__close-btn');
	const name = document.querySelector('[name=feedback-name]');
	const form = popup.querySelector('form');
	const email = popup.querySelector('.feedback__email');
	const storage = localStorage.getItem('name');

	for (const field of fieldEls) {
		field.addEventListener('blur', event => {
	  	if (event.target.value) {
	    	event.target
				.classList.add('filled');
	    } else {
	    	event.target.classList.remove('filled');
	    }
	  });
	}

	link.addEventListener('click', function (evt) {
		evt.preventDefault();
		overlay.classList.add('overlay--show');
	  popup.classList.add('feedback--show');

		if (storage) {
			name.classList.add('filled');
			name.value = storage;
			email.focus();
		} else {
			name.focus();
		}
	});

	close.addEventListener('click', function (evt) {
		evt.preventDefault();
		overlay.classList.remove('overlay--show');
		popup.classList.remove('feedback--show');
		popup.classList.remove('feedback-error');
	});

	form.addEventListener('submit', function (evt) {
		if (!name.value || !email.value) {
	   evt.preventDefault();
		 popup.classList.add('feedback-error');
		}	else {
			localStorage.setItem('name', name.value);
		}
	});

	window.addEventListener('keydown', function (evt) {
		if (evt.keyCode === 27) {
			if (popup.classList.contains('feedback--show')) {
				popup.classList.remove('feedback--show');
			}
		}
	})

}

document.addEventListener("DOMContentLoaded", ready);
