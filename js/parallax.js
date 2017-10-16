$(document).ready(function(){
	$(window).on('scroll', parallax);

	function parallax(){
		// Posición del scroll.
		var s =  $(window).scrollTop();
		
		// Controlar la velocidad del fondo.
		function parallaxBg(element, top){
			$(element).css({
				'background-attachment' : 'fixed',
				'background-position' : 'center ' + -(s*top) + 'px'
			})
		}

		function parallaxText(element, top){
			$(element).css({
				'position' : 'relative',
				'top' : -(s*t) + 'px'
			})
		}

		parallaxBg('body', .4);
		parallaxBg('footer', .6);
		parallaxText('h1', 2);
		parallaxText('.page', .5);
	}
})