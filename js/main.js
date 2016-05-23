//make sticky header functionality
var sticky = $('.sticky');
var defaultHeader = $('.default');
var projectOne =  $('.c-one');
var projectTwo =  $('.c-two');
var projectThree =  $('.c-three');
var projectFour =  $('.c-four');
var projectFive =  $('.c-five');
var projectSix =  $('.c-six');
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

//slider carousel
$(document).ready(function() { 

	var displayCarousel = [projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix];
	$(".carousel-wrapper li:first").before($(".carousel-wrapper li:last"));
	$( ".arrow-wrapper-right" ).click(function() {
		console.log('right');
		var item_width = $('.carousel-wrapper li').outerWidth();
		var left_indent = parseInt($('.carousel-wrapper').css('left')) - item_width;
	  		$( ".carousel-wrapper" ).animate({ "left": left_indent }, 'slow', function(){ 

	  			$('.carousel-wrapper li:last').after($('.carousel-wrapper li:first'));
	  			$('.carousel-wrapper').css({'left' : '-450px'}); 
	  		}); 
	});

	$( ".arrow-wrapper-left" ).click(function() {
		console.log('left');
		var item_width = $('.carousel-wrapper li').outerWidth();
		var left_indent = parseInt($('.carousel-wrapper').css('left')) + item_width;
		$( ".carousel-wrapper" ).animate({ "left": left_indent }, 'slow', function(){ 
			$('.carousel-wrapper li:first').before($('.carousel-wrapper li:last'));
			$('.carousel-wrapper').css({'left' : '-450px'});

		});
	});

});