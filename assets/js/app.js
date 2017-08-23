$(function() {

	var openModal = function(){
			$('.contact-me-modal').addClass('shown');
		},
		closeModal = function() {
			$('.contact-me-modal').removeClass('shown');
		};

	$('.contact-me-modal').on('click', function(e) {
		console.log('you clicked!');
		closeModal();
	});

	$('.submit-btn', '#contact-me').on('click', function(e) {
		e.preventDefault();
		openModal();
	});

	

});