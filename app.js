var main = function() {
	
	$('img').animate({ top: "+=100px"}, 1000 );
	
	$('.nav_extension').hide();
	
	$('.navbar').mouseenter(function(){
		$('.nav_extension').slideDown(1000);
		$('.navbar').animate({top :'+=25px'},'slow');
		//$('.navbar-header').addClass('navbar-bigger');
		//$('.navbar-header').addClass('navbar-bigger-pad');
		//$('.navbar-collapse').addClass('navbar-bigger-pad');
	});
	
	$('.navbar').mouseleave(function(){
		$('.nav_extension').slideUp(1000);
		$('.navbar').animate({top:'-=25px'},'slow');
		//$('.navbar-header').removeClass('navbar-bigger');
		//$('.navbar-header').removeClass('navbar-bigger-pad');
		//$('.navbar-collapse').removeClass('navbar-bigger-pad');
	});
/*
	$('.navbar').css('opacity','0.9');

	$('.navbar').mouseenter(function(){
		$('.navbar').hide();
		$('.navbar-header').addClass('navbar-bigger');
		$('.navbar-header').addClass('navbar-bigger-pad');
		$('.navbar-collapse').addClass('navbar-bigger-pad');
		$('.navbar').slideDown(1000);


	});
	
	$('.navbar').mouseleave(function(){
		
		$('.navbar-header').removeClass('navbar-bigger');
		$('.navbar-header').removeClass('navbar-bigger-pad');
		$('.navbar-collapse').removeClass('navbar-bigger-pad');
		

	});
*/




		
/*
//	$('.navbar').css('background-color','yellow');
	$('.navbar-header').css('height','100px');

//	$('.navbar-header').css('background-color','red');
//	$('.navbar-collapse').css('background-color','green');
	
	$('.navbar-header').css('padding-top','25px');
	$('.navbar-collapse').css('padding-top','25px');
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