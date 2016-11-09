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
var bc1=0, bc2=0, bc3=0;
function mueve() {
	var myalt = $(window).scrollTop()/$(window).height()*100;
	if (myalt>150 && myalt<250 && bc1 == 0){ //no permitas que se inicie cada vez que se mueva el cursor
		$('#bandw').toggleClass('gocolor');	
		$('#caja6').animate({'left':'30%', 'top':'180vh'}, 2000);
		$('#caja4').animate({'left':'10%', 'top':'200vh'}, 2500);
		$('#caja5').animate({'left':'40%', 'top':'220vh'}, 3000);
		$('#caja7').animate({'left':'20%', 'top':'240vh'}, 3000);
		bc1 = 1;
	}
	if (bc1 == 1 && (myalt>250 || myalt<150))
	{ //no permitas que se inicie cada vez que se mueva el cursor
		$('#bandw').toggleClass('fotocamino');	
		$('#caja6').animate({'left':'-700', 'top':'180vh'}, 1000);
		$('#caja4').animate({'left':'-700', 'top':'200vh'}, 1000);
		$('#caja5').animate({'left':'-700', 'top':'220vh'}, 1000);
		$('#caja7').animate({'left':'-700', 'top':'240vh'}, 1000);		
		bc1 = 0;
	}
	//caja 8 entra por la izquierda
	if (myalt>250 && myalt<350 && bc2 == 0){ //no permitas que se inicie cada vez que se mueva el cursor
		$('#caja8').animate({'right':'40%', 'top':'320vh'}, 3000);
		bc2 = 1;
	}
	if (bc2 == 1 && (myalt>350 || myalt<250))
	{ //no permitas que se inicie cada vez que se mueva el cursor
		$('#caja8').animate({'right':'0', 'top':'320vh'}, 1000);		
		bc2 = 0;
	}
	//bola rodando al final
	if (myalt>500 && bc3 == 0){ //no permitas que se inicie cada vez que se mueva el cursor
		$('#rodando').animate({'right':'0', 'top':'520vh'}, 1000);	
		bc3 = 1;
	}
	if (bc3 == 1 && myalt<450)
	{ //no permitas que se inicie cada vez que se mueva el cursor
		$('#rodando').animate({'right':'-300', 'top':'520vh'}, 1000);		
		bc3 = 0;
	}

}

$(window).scroll(function(){

	var yOffset = window.pageYOffset;
	//parallax
	$('#caja3').css({"top": 300 + (yOffset / 1.4) + "px"});
	$('#logo').css({"top": 50 +  (yOffset / 1.7) + "px"});
	$('#mybox1').css({"top": 300 +  (yOffset / 3) + "px"});


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


