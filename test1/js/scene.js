var controller = new ScrollMagic.Controller({vertical: false});

$(window).load(function () { // wait for document ready

    $(".back_home").click(function(){
 		//$(".svg1").fadeToggle(2000);      
       	$('html, body').animate({scrollLeft: $("#sec01").offset().left}, 2000);
       	$(".ok, .wrong, .pregunta, .respuesta").hide();
    });

    $(".start").click(function(){
    	$("#p1, #p1r1, #p1r2, #p1r3").slideDown(1000);
    });



//pregunta 1 respuesta 1 OK - sevilla
    $("#p1r1").click(function(){
    	$('html, body').stop().animate({scrollLeft: $(window).width()}, 3000, "swing");
        $("#m1ok").delay(2000).slideDown(1000);
        $("#p2").delay(3000).slideDown(1000);  
     	$("#p2r1").delay(3000).slideDown(2000);   	
     	$("#p2r2").delay(3000).slideDown(3000); 
     	$("#p2r3").delay(3000).slideDown(4000);                 
    });

//pregunta 1 respuesta 2 WRONG - madrid
    $("#p1r2").click(function(){
    	$('html, body').stop().animate({scrollLeft: $(window).width()}, 3000, "swing");
        $("#m1wrong").delay(2000).slideDown(1000);
    });
//pregunta 1 respuesta 3 WRONG - zaragoza
    $("#p1r3").click(function(){
    	$('html, body').stop().animate({scrollLeft: $(window).width()}, 3000, "swing");
        $("#m1wrong").delay(2000).slideDown(1000);
    });


//pregunta 2 respuesta 1 WRONG - 1468
    $("#p2r1").click(function(){ 
    	$('html, body').stop().animate({scrollLeft: '+='+$(window).width()}, 3000, "swing");
        $("#m2wrong").delay(2000).slideDown(1000);
        //$(".back_home").delay(4000).fadeToggle(1000);       
    });

//pregunta 2 respuesta 2 OK - 1971
    $("#p2r2").click(function(){
    	$('html, body').stop().animate({scrollLeft: '+='+$(window).width()}, 3000, "swing");
        $("#m2ok").delay(2000).slideDown(1000);
        $("#p3").delay(3000).slideDown(1000);
     	$("#p3r1").delay(3000).slideDown(2000);   	
     	$("#p3r2").delay(3000).slideDown(3000); 
     	$("#p3r3").delay(3000).slideDown(4000);          

    });
//pregunta 2 respuesta 3 WRONG - 2002
    $("#p2r3").click(function(){
    	$('html, body').stop().animate({scrollLeft: '+='+$(window).width()}, 3000, "swing");
        $("#m2wrong").delay(2000).slideDown(1000);
        //$(".back_home").delay(4000).fadeToggle(1000);
    });




// Main Parallax
/*var tween1 = new TimelineMax ()
	.add([
	TweenMax.to("#parallaxContainer .layer1", 1, {backgroundPosition: "-40% 0", ease: Linear.easeNone}),
	TweenMax.to("#parallaxContainer .layer2", 1, {backgroundPosition: "-125% 0", ease: Linear.easeNone}),
	//TweenMax.to("#parallaxContainer .layer3", 1, {backgroundPosition: "-200% 100%", ease: Linear.easeNone})
		]);
// Animate parallax
var scene1 = new ScrollMagic.Scene({triggerElement: "#parallaxContainer", offset:$(window).width(), duration: 8500 })
	.setTween(tween1)
	//.setPin("#parallaxContainer")
	.addIndicators({name: "paisaje"}) // add indicators (requires plugin)
	.addTo(controller);

//casa, solo escena, set pin es lo más importante
var scene_casa = new ScrollMagic.Scene({triggerElement:'#casa',	offset: -50,duration: 3500})
	.setPin('#casa')
 	.addTo(controller)
	.addIndicators({name: "casa"});

//pop
var pop1 = new TweenMax.to('#pop1', .5, {opacity:1});
var scene_pop = new ScrollMagic.Scene({triggerElement:'#pop1', offset:0, duration:20,})
	.setTween(pop1)
 	.addTo(controller)
	.addIndicators({name: "pop"});
var scene_pop2 = new ScrollMagic.Scene({triggerElement: "#pop1", offset: 100,  duration: 1500})
	.setPin("#pop1")
	.addIndicators({name: "pop fijo"}) // add indicators (requires plugin)
	.addTo(controller);
var pop1b = new TweenMax.to('#pop1', .5, {opacity:0});
var scene_pop3 = new ScrollMagic.Scene({triggerElement:'#pop1', offset:1600, duration:200,})
	.setTween(pop1b)
 	.addTo(controller)
	.addIndicators({name: "popb"});

// Create tween muñeco
var mun = new TweenMax.fromTo('#muneco', .5, 
	{scale: .05, rotation: 0, top: 0},
   	{scale: 1, top: 50});
var scene_mun = new ScrollMagic.Scene({triggerElement:'#muneco', offset:0, duration:300,})
	.setTween(mun)
 	.addTo(controller)
	.addIndicators({name: "mun"});
var scene_num2 = new ScrollMagic.Scene({triggerElement: "#muneco", offset: 300,  duration: 4200})
	.setPin("#muneco")
	.addIndicators({name: "mun fijo"}) // add indicators (requires plugin)
	.addTo(controller);
var mun2 = new TweenMax.to('#muneco', .5, {opacity:0});
var scene_mun3 = new ScrollMagic.Scene({triggerElement:'#muneco', offset:4500, duration:200})
	.setTween(mun2)
 	.addTo(controller)
	.addIndicators({name: "mun2"});

//coche
var scene_coche = new ScrollMagic.Scene({triggerElement: "#coche", offset:-50, duration: $(window).width() - 100,})
	.setTween("#coche", 1, {scale: 1.5,})
	.setPin("#coche") 
	.addTo(controller)
	.addIndicators({name: "coche"}) // add indicators (requires plugin)

//saludo
var scene_saludo = new ScrollMagic.Scene({triggerElement: "#saludo", offset: 100, duration:1100})
	.setPin("#saludo") 
	.addTo(controller)
	.addIndicators({name: "saludo"})

//plane
var scene_plane = new ScrollMagic.Scene({triggerElement: "#plane", offset:0, duration:8000})
	.setTween("#plane", 1, {scale: 50, x:800, y:-800})
	.setPin("#plane")
	.addTo(controller)
	.addIndicators({name: "plane"})


//caja de verde a naranja
var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger1"})
	.setTween("#animate1", 0.1, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
	.addIndicators({name: "caja verde (duration: 0)"}) // add indicators (requires plugin)
	.addTo(controller);

//caja azul se queda fija
var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger2", offset: 200,  duration: 300})
	.setPin("#pin1")
	.addIndicators({name: "caja azul (duration: 300)"}) // add indicators (requires plugin)
	.addTo(controller);

//parallax texto
var tween5 = new TimelineMax ()
	.add([
	TweenMax.fromTo("#parallaxText .layer1", 1, {scale: 3, autoAlpha: 0.05, left: 300}, {left: -350, ease: Linear.easeNone}),
	TweenMax.fromTo("#parallaxText .layer2", 1, {scale: 2, autoAlpha: 0.3, left: 150}, {left: -175, ease: Linear.easeNone})
		]);
var scene5 = new ScrollMagic.Scene({triggerElement: "#trigger2", offset:1500, duration: $(window).width()})
	.setTween(tween5)
	.addIndicators({name: "parallax texto"}) // add indicators (requires plugin)
	.addTo(controller);

//add scenes here
//conejo, hombre andando
var images = [
	"img/man1.png",
	"img/man2.png",
	"img/man3.png",
	"img/man4.png",
	"img/man5.png"
	];
	// TweenMax can tween any property of any object. We use this object to cycle through the array
	// create tween
	var obj = {curImg: 0};
	var conejo = TweenMax.to(obj, 0.2, 
		{
		curImg: images.length - 1,	// animate propery curImg to number of images
		roundProps: "curImg",				// only integers so it can be used as an array index
		repeat: 20,									// repeat 3 times
		immediateRender: true,			// load first image automatically
		ease: Linear.easeNone,			// show every image the same ammount of time
		onUpdate: function () {
		  $("#conejo").attr("src", images[obj.curImg]); // set the image source
			}
		}
	);
	// build scene
	var scene_conejo = new ScrollMagic.Scene({triggerElement: "#imagesequence", offset:-200, duration: 8000})
		.setTween(conejo)
		.setPin("#imagesequence")
		.addIndicators({name: "conejo"}) // add indicators (requires plugin)
		.addTo(controller);

//jquery transtions
//$('.box').transition({scale:2.2});
//ver http://ricostacruz.com/jquery.transit/
//ver: http://www.w3schools.com/jquery/jquery_events.asp

//Start - diversas formas para hacer scroll
    $("#bt1").click(function(){
        //$(document).scrollLeft($("#pin1").offset().left );  //scroll to id
        //$(document).scrollTop( $("#parallaxText").offset().top );  para vertical
		//$(document).scrollLeft(1300);  //jump 1300px to left
    	$('html, body').stop().animate({scrollLeft: $("#rv3").offset().left+2000}, 3000, "swing");
    	$("#rv3").slideToggle(2000);
    	$("#rvp3").hide();
    });

//boton texto toggle, en css display:none para que comience invisible
    $("#rvp1").click(function(){
        $("#rv1").toggle(3000, "swing");
    });

//animación de texto
    $("#rvp2").click(function(){
        $("#rv2").animate({left:200, opacity:1}, 3000);  //{left:'+=200'}
    });
    $("#rvp2b").click(function(){
        $("#rv2").animate({left:200, opacity:0}, 500);  //{left:'+=200'}
    });

//slidetoggle, en css display:none para que comience invisible
	$("#rvp3").click(function() {
        $("#rv3").slideToggle(1000);
        });

//ejemplos de animación con toggle:
//    $("button").click(function(){
//        $("div").animate({
//            height: 'toggle'
//		  });
//    });

//use keys to jump to anchors
$(document).keypress(function(e) {
    switch(e.keyCode) { //39 right, 37 left
        case 38: //scroll up
        	$(document).scrollLeft($("#coche").offset().left );
        break;
        case 40: //scroll down
            //right arrow pressed
        break;
    }
});
*/
//move to next - previous section see: http://jsfiddle.net/yn6maby0/25/
var sections = $('.panelSection');
console.log(sections);
var i =0;

// function next(){
//     if(i == 0){
//         $('.prev-section').show();
//     }
//     if(i < sections.length -1){
//         i++;
//         if(i == sections.length -1){
//              $('.next-section').hide();   
//         }
//         //$(document).scrollLeft($(sections[i]).offset().left );
//        	$('html, body').stop().animate({scrollLeft: $(sections[i]).offset().left}, 1000);
// 	}
// }	
// function prev(){
//     if(i == sections.length -1){
//         $('.next-section').show();
//     }
//     if(i > 0){
//         i--;
//         if(i == 0){
//             $('.prev-section').hide();
//         }
//        	$('html, body').stop().animate({scrollLeft: $(sections[i]).offset().left}, 1000);
//     }    
// }

// $('html').keydown(function(e){
//     if(e.which == '38'){ //flecha arriba
//         prev();    
//     }
//    if(e.which == '40'){ //flecha abajo
//         next();    
//     }
// });

// $('.next-section').click(function(e){
//    e.preventDefault();
//    next();
// });

// $('.prev-section').click(function(e){
//    e.preventDefault();
//    prev();
// });    

//mouse wheel scrolls horizontal
//$("html, body").mousewheel(function(event, delta) {
//    this.scrollLeft -= (delta * 30);
//    event.preventDefault();
//    });

//smooth scroll
$('.secjump a').bind('click',function(event){
    var $anchor = $(this);
	    $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 1000);
        event.preventDefault();
    });

//show coordinates
// function show() {
//     //var posY = $(window).scrollTop();
//     var posX = $(window).scrollLeft() + $(window).width()/2; 
//     $("#coor").html("Left: " + posX + " px");
    
// }
// show();
// $(window).scroll(show);

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);



});
