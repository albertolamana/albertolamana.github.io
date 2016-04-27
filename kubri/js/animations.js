$(document).ready(function(){

$(".pie").click(function(){
     $(this).hide();
});

$("#test2").click(function(){
     $(this).animate({
     	left:'+=150px',
     }, 1000);
});

$("#test3").click(function(){
	$(this).toggleClass('rotate-90');
});

$('.tp1').mouseenter(function(){
	$('.tt1').animate({opacity:1,}, 700, "easeInCubic");
}).mouseleave(function(){
	$('.tt1').animate({opacity:0,}, 300);
});
$('.tp2').mouseenter(function(){
	$('.tt2').animate({opacity:1,}, 700, "easeInCubic");
}).mouseleave(function(){
	$('.tt2').animate({opacity:0,}, 300);
});
$('.tp3').mouseenter(function(){
	$('.tt3').animate({opacity:1,}, 700, "easeInCubic");
}).mouseleave(function(){
	$('.tt3').animate({opacity:0,}, 300);
});


}); /*end function load*/


$(window).scroll(mueve);
var bc1=0;
function mueve() {
	var myalt = $(window).scrollTop()/$(window).height()*100;
	if (myalt>180 && myalt<300 && bc1 == 0){ //no permitas que se inicie cada vez que se mueva el cursor
		$('#caja1').animate({'left':'30%'}, 2000);
		$('#bandw').toggleClass('gocolor');		
		bc1 = 1;
	}
	if (bc1 == 1 && (myalt>300 || myalt<180))
	{ //no permitas que se inicie cada vez que se mueva el cursor
		$('#caja1').animate({'left':'-300'}, 1000);
		$('#bandw').toggleClass('fotocamino');			
		bc1 = 0;
	}
}




$(window).scroll(function(){

	var yOffset = window.pageYOffset;
	var speed = 1.4;
	$('#caja3').css({"top":300 + (yOffset / speed) + "px"});

	var myalt = $(window).scrollTop()/$(window).height()*100;
	if (myalt>320 && myalt<400){ //no permitas que se inicie cada vez que se mueva el cursor
		$('#caja2').css({'top': myalt + 20 + 'vh'});//freeze object
	}

    var posY = $(window).scrollTop()/$(window).height()*100;
    var posX = $(window).scrollLeft() + $(window).width()/2; 
    $("#coordinates").html("Scroll: " + posY.toFixed(0) + " vh" +"<br>"
    	+ $(window).scrollTop()+"px" + "<br>"
    	+ "yOffset= " + yOffset);

});


