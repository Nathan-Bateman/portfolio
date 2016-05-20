//make sticky header functionality
var sticky = $('.sticky');
var defaultHeader = $('.default');
$(window).scroll(function() {
	if ($(window).width() >= 768 && $(this).scrollTop() >=180) {
		sticky.removeClass( "hide-menu" );
		//defaultHeader.toggleClass( "hide-menu" );
		console.log($(this).scrollTop());
		console.log('defaultHeader.scrollTop()');
	} else {
		sticky.addClass('hide-menu');
	};
});
//modal data attributes to load
var projectModal = $('#work').on('show.bs.modal', function (event) {
  var imgClicked = $(event.relatedTarget); // Button that triggered the modal
  var imgFiletoLoad = imgClicked.data('img'); // Extract info from data-* attributes
  var description = imgClicked.data('description');
  var skills = imgClicked.data('skills');
  var titleToLoad = imgClicked.data('title');
  var liveLink = imgClicked.data('live');
  var gitLink = imgClicked.data('git');
  var modal = $(this);
  modal.find('.modal-title').text(titleToLoad);
  modal.find('.modal-body .description').text(description);
  modal.find('.modal-body .skills').text(skills);
  modal.find('.modal-body img').attr("src",imgFiletoLoad);
  modal.find('.modal-footer .live').attr("href",liveLink);
  modal.find('.modal-footer .git').attr("href",gitLink);
});