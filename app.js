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
		

	
	$('.expand_btn_success').hover(
	
	function(){
		$(this).animate({width:'200px', paddingBottom:'10px', paddingTop:'10px'},600);
	},
	function(){
		$(this).animate({width:'170px', paddingBottom:'5px', paddingTop:'5px'},600);
	}
	
	);
	
	
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