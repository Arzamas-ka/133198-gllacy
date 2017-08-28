var fieldEls = document.querySelectorAll('.field');
for (var i = 0; i < fieldEls.length; i++) {
	fieldEls[i].addEventListener('blur', function() {
  	if (this.value) {
    	this.classList.add('filled');
    } else {
    	this.classList.remove('filled');
    };
  });
}
