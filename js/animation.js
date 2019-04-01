/*var playButton = document.getElementById('playButton');
playButton.addEventListener('load' , function() {
	var svg = playButton.getSVGDocument();
	var target = [ 
		svg.querySelector('#Ellipse_3750'),
		svg.querySelector('#Ellipse_3749'),
		svg.querySelector('#Ellipse_3748'),
		svg.querySelector('#Ellipse_3747')
	];
	console.log(target);
	var playButtonAnimation = anime({
		targets: target, 
		opacity: '0.1',
		duration: 1000,
		//r: 130,
		loop: true,
		direction: 'alternate',
		easing: 'linear',
		delay: anime.stagger(100)
	});
})*/

//Для ралиолиний
/*
targets: target, 
opacity: '0.1',
duration: 1000,
r: 200,
loop: true,
direction: 'alternate',
easing: 'linear',
*/

//Т.к. нормально спозиционировать точки не получится (из-за того, что они позиционируются относительно контейнера), я меняю их позицию так, чтобы они были на одном уровне с надписями в футере
function dotsPos() {
	var requiredOffset = $(".copyright").offset();
	$(".slick-dots").offset({top: requiredOffset.top});
}
	
$(window).on("load", function() { 
	dotsPos();

	var wh = window.innerHeight;
	var ww = window.innerWidth;
	var animationDuration = 2000;

	var $sideTextLeft = $('#sideTextLeft');
	var $sideTextRight = $('#sideTextRight');
	var $top = $('section#top');
	var $bottom = $('section#bottom');
	var $slider = $('.slider');
	var $largeWord = $('.largeWord');
	var $satellite = $('.satellite');

	var sideTextLeftOffset = $sideTextLeft.offset();
	var sideTextRightOffset = $sideTextRight.offset();
	var topHeight = $top.height();
	var bottomHeight = $bottom.height();
	var sliderOffset = $slider.offset();






	$sideTextLeft.css({
		opacity: '0',
		transform: 'translateY(' + (wh-sideTextLeftOffset.top) + 'px)'
	});
	$sideTextRight.css({
		opacity: '0',
		transform: 'translateX(' + (ww-sideTextRightOffset.left) + 'px)'
	});
	$top.css({
		opacity: '0',
		transform: 'translateY(' + (-topHeight) + 'px)'
	});
	$bottom.css({
		opacity: '0',
		transform: 'translateY(' + (bottomHeight) + 'px)'
	});
	$slider.css({
		opacity: '0',
		transform: 'translateY(' + (wh-sliderOffset.top) + 'px)'
	});
	$largeWord.css({
		opacity: '0'
	});
	$satellite.css({
		opacity: '0'
	});





	var timeline = anime.timeline({
		duration: animationDuration,
		easing: 'easeOutQuint'
	});
	timeline.add({
		targets: $sideTextLeft[0],
		translateY: 0,
		opacity: 1,
	}),
	timeline.add({
		targets: $sideTextRight[0],
		translateX: 0,
		opacity: 1,
	}, animationDuration*0.3),
	timeline.add({
		targets: $slider[0],
		translateY: 0,
		opacity: 1,
	}, animationDuration*0.5);
	timeline.add({
		duration: 5000,
		targets: $largeWord[0],
		opacity: 1,
	}, animationDuration);
	timeline.add({
		duration: 5000,
		targets: $satellite[0],
		opacity: 1,
		complete: function(anim) {
			waweAnimationTop.play();
			waweAnimationBottom.play();
		}
	}, 0);




	var topAnimation = anime({
		targets: $top[0],
		translateY: 0,
		opacity: 1,
		duration: animationDuration,
		easing: 'easeOutQuint'
	});

	var bottomAnimation = anime({
		targets: $bottom[0],
		translateY: 0,
		opacity: 1,
		duration: animationDuration,
		easing: 'easeOutQuint',
		/*update: function(anim) {
			dotsPos();
		}*/
	});






	var elements = [
		//document.getElementById('blur'), 
		document.getElementById('playButton')
	];
	var playButtonAnimation = anime({
		targets: elements,
		//scale: anime.stagger([1.5, 1.05]),
		scale: 1.05,
		duration: 1500,
		loop: true,
		direction: 'alternate',
		easing: 'linear',
	});

	var satelliteAnimation = anime({
		targets: document.getElementsByClassName('satellite'),
		translateY: 30,
		duration: 4000,
		loop: true,
		direction: 'alternate',
		easing: 'linear',
	});

	var waweAnimationTop = anime({
		targets: document.querySelectorAll('#top .wave'),
		top: '-750px',
		left: '-750px',
		height: '1500px',
		width: '1500px',
		opacity: 0,
		duration: 6000,
		loop: true,
		direction: 'normal',
		easing: 'linear',
		autoplay: false,
		delay: anime.stagger(2000)
	});

	var waweAnimationBottom = anime({
		targets: document.querySelectorAll('#bottom .wave'),
		bottom: '-750px',
		right: '-750px',
		height: '1500px',
		width: '1500px',
		opacity: 0,
		duration: 6000,
		loop: true,
		direction: 'normal',
		easing: 'linear',
		autoplay: false,
		delay: anime.stagger(2000)
	});
});