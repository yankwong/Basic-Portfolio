(function($) {

	var openModal = function($modal){
			$modal.addClass('shown');
		},
		closeModal = function($modal) {
			$modal.removeClass('shown');
		},
		setupModal = function() {
			var $modal = $('.contact-me-modal');

			$modal.on('click', function(e) {
				closeModal($modal);
			});

			$('.submit-btn', '#contact-me').on('click', function(e) {
				e.preventDefault();
				openModal($modal);
			});
		};


	$(function(){
		setupModal();
	});

})(jQuery);