var main = function() {
	
	//Navbar - Animation lorsqu'on se place sur la barre
	$('.nav_extension').hide();
	$('.navbar').mouseenter(function(){
		$('.nav_extension').slideDown(1000);
		$('.navbar').animate({top :'+=25px'},'slow');

	});
	
	$('.navbar').mouseleave(function(){
		$('.nav_extension').slideUp(1000);
		$('.navbar').animate({top:'-=25px'},'slow');
	});
	
	
	//Changement du logo lorsqu'on se place au dessus
	$('.mini_logo').hover(
	
		function(){
			$(this).attr('src', 'images/images_site/Logo_mini_on.png');
		},
		function(){
			$(this).attr('src', 'images/images_site/Logo_mini_off.png');
		});
		
	//Expansion du bouton 'S'inscrire maintenant'
	$('.expand_btn_success').hover(
	
	function(){
		$(this).animate({width:'200px', paddingBottom:'10px', paddingTop:'10px'},600);
	},
	function(){
		$(this).animate({width:'170px', paddingBottom:'5px', paddingTop:'5px'},600);
	}
	
	);
	
	//Changement du curseur 'active' pour la Navbar
	$('.navbar-nav a').click(function(){
		$('.active').removeClass('active');
		$(this).parent().addClass('active');
	});
	
	$('.btn_scroll').click(function(){
		var scr = $(document).scrollTop();
		alert("You're at " + scr + " pixels from the top");
	});
	
	//Scrolling features (Show containers)
	$('.content_cont').hide();
	$('.signup_cont').hide();
	
	$(document).scroll(function(){
		var y = $(this).scrollTop();
		if (y > 82) {$('.content_cont').fadeIn(3000);}
		if (y > 222) {
			$('body nav').css('opacity','0.5');
		} else {
			$('body nav').css('opacity','1');
		}
		if (y > 654) {$('.signup_cont').fadeIn(3000);}
	});
	
	
/*
	$('.content_cont').hide();
	$('.signup_cont').hide();
	
	$('#header').mouseleave(function(){
		$('.content_cont').fadeIn(3000);
	});
	
	$('.content_cont').mouseleave(function(){
		$('.signup_cont').fadeIn(3000);
	});
*/
	
/*
	$('body').hide();
	$('body').fadeIn(3000);
	
	$('.content_cont').hide();
	
	$('.how_works').click(function(){
			
		$('.content_cont').slideToggle('slow');
		
	});
*/



};

$(document).ready(main);