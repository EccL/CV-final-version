/*scroll*/
$(document).ready(function(){
	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
		e.preventDefault();
		var target = this.hash,
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 1100, 'swing', function () {
			window.location.hash = target;
		});
	});
});
/*wow-animation*/
new WOW().init();
/*navbar-collapse*/
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
/*validation*/

/*button*/
$(document).ready(function() {
    $("#scr-button").hide();
	$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 600) {
            $('#scr-button').fadeIn();
        } else {
            $('#scr-button').fadeOut();
        }
    });
	   $('#scr-button').click(function() {
	   $('body').animate({scrollTop: 0}, 1000);
	   return false;
        });
	});
});