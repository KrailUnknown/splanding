$(window).on("load", function() { // Как только все элементы будут загружены
	var $homePage 	 = $('.mainPage');
	var $contactPage = $('.contactPage');
	var $menuBlock 	 = $('.menuBlock');
	var $menuSection = $('.menuSection');
	var $copyright 	 = $(".copyright")
	//var whg 		 = window.innerHeight;
	//$('.mainPage').height(window.innerHeight);


	
	//$(window).on("resize", dotsPos());

	$('.loadingScreen').fadeOut(900);


	$('.openMenu').click( function() {
		$menuBlock.fadeIn(900);
	});

	$('.closeMenu').click( function() {
		$menuBlock.fadeOut(900);
	});


	$menuSection.click( function (){
		var target = $(this).attr('target');
		$menuSection.removeClass('active');
		$(this).addClass('active');
		switch(target) {
			case 'home':
				$contactPage.css('display', 'none');
				$homePage.css('display', 'block');
				break;
			case 'contactus':
				$contactPage.css('display', 'block');
				$homePage.css('display', 'none');
				break;
		};
		$menuBlock.fadeOut(900);
	});	
})