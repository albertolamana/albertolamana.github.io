var controller = new ScrollMagic.Controller({vertical: false});

$(function () { // wait for document ready

// Main Parallax
var tween1 = new TimelineMax ()
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

//draggable box
$('#draggable').draggable(
    {
        drag: function(){
            var offset = $(this).offset();
            var xPos = offset.left;
            var yPos = offset.top;
            $('#posX').text('x: ' + xPos);
            $('#posY').text('y: ' + yPos);
            if (xPos > 300) {
            	$('#draggable').draggable({ disabled: true }); 
            	$('#draggable').css({'background-color':'green', 'border':'blue solid 4px', 'width':'300px'})
            	$('#draggable').animate({top:50, left:100});
        	}
        }
    });

//primer hombre andando
var imgwalk = [
	"img/walk23.png",
	"img/walk22.png",
	"img/walk21.png",
	"img/walk20.png",
	"img/walk19.png",
	"img/walk18.png",
	"img/walk17.png",
	"img/walk16.png",
	"img/walk15.png",
	"img/walk14.png",
	"img/walk13.png",
	"img/walk12.png",
	"img/walk11.png",
	"img/walk10.png",
	"img/walk9.png",
	"img/walk8.png",
	"img/walk7.png",
	"img/walk6.png",
	"img/walk5.png",
	"img/walk4.png",
	"img/walk3.png",	
	"img/walk2.png",
	"img/walk1.png"	
	];
	// TweenMax can tween any property of any object. We use this object to cycle through the array
	// create tween
	var obj = {curImg: 0};
	var manwalk = TweenMax.to(obj, 0.2, 
		{
		curImg: imgwalk.length - 1,	// animate propery curImg to number of images
		roundProps: "curImg",				// only integers so it can be used as an array index
		repeat: 10,									// repeat 3 times
		immediateRender: true,			// load first image automatically
		ease: Linear.easeNone,			// show every image the same ammount of time
		onUpdate: function () {
		  $("#manwalk").attr("src", imgwalk[obj.curImg]); // set the image source
			}
		}
	);
	// build scene
	var scene_manwalk = new ScrollMagic.Scene({triggerElement: "#walksequence", offset: 0, duration: 8000})
		.setTween(manwalk)
		.setPin("#walksequence")
		.addIndicators({name: "manwalk"}) // add indicators (requires plugin)
		.addTo(controller);

//conejo, hombre andando
 var images = [
 	"img/man1.png",
 	"img/man2.png",
 	"img/man3.png",
 	"img/man4.png",
 	"img/man5.png"
 	];
// 	// TweenMax can tween any property of any object. We use this object to cycle through the array
// 	// create tween
 	var obj2 = {curImg: 0};
 	var conejo = TweenMax.to(obj2, 0.2, 
 		{
 		curImg: images.length - 1,	// animate propery curImg to number of images
 		roundProps: "curImg",				// only integers so it can be used as an array index
 		repeat: 20,									// repeat 3 times
 		immediateRender: true,			// load first image automatically
 		ease: Linear.easeNone,			// show every image the same ammount of time
 		onUpdate: function () {
 		  $("#conejo").attr("src", images[obj2.curImg]); // set the image source
 			}
 		}
 	);
// 	// build scene
 	var scene_conejo = new ScrollMagic.Scene({triggerElement: "#imagesequence", offset:-200, duration: 8000})
 		.setTween(conejo)
 		.setPin("#imagesequence")
 		.addIndicators({name: "conejo"}) // add indicators (requires plugin)
 		.addTo(controller);

//mensaje 1
var scene_mg1a = new ScrollMagic.Scene({triggerElement:'#mg1', offset: -50, duration: 1000})
	.setTween("#mg1", 100, {opacity: 1})
	.setPin('#mg1')
 	.addTo(controller)
	.addIndicators({name: "1"});
var scene_mg1b = new ScrollMagic.Scene({triggerElement:'#mg1', offset: 1200, duration: 300})
	.setTween("#mg1", 1, {opacity: 0})
	.setPin('#mg1')
 	.addTo(controller)
 	.addIndicators({name: "2"});	

//flecha
var scene_flecha = new ScrollMagic.Scene({triggerElement: "#flecha", offset:-200, duration: 500, tweenChanges: true})
	.setTween('#flecha', .5, {width:350, scaleX:1})
	.addIndicators({name: "flecha"}) // add indicators (requires plugin)
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

//writing
function pathPrepare ($el) {
	var lineLength = $el[0].getTotalLength();
	$el.css("stroke-dasharray", lineLength);
	$el.css("stroke-dashoffset", lineLength);
	console.log(lineLength);
	}
	var $word = $("path#word");	
	pathPrepare($word);
	var tween_write = new TimelineMax()
		.add(TweenMax.to($word, 3, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
	var scene_write = new ScrollMagic.Scene({triggerElement: "#writing", duration: 300, tweenChanges: true})
		.setTween(tween_write)
		.addIndicators({name: "write"}) // add indicators (requires plugin)
		.addTo(controller);		

//graph http://greensock.com/svg-tips
var scene_graph = new ScrollMagic.Scene({triggerElement: "#graph", duration: 800, tweenChanges: true})
	.setTween('.boxg', 1, {x:10, scaleX:4, rotation:0, opacity:1, fill:"#ff0000"})
	.setPin('#graph')
	.addIndicators({name: "g"}) // add indicators (requires plugin)
	.addTo(controller);	
//graph title
var scene_graph_title = new ScrollMagic.Scene({triggerElement: "#propiedades", duration: 800, tweenChanges: true})
	.setTween('#propiedades', 1, {opacity:1})
	.setPin('#propiedades')
	.addTo(controller);	


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

//move to next - previous section see: http://jsfiddle.net/yn6maby0/25/




//mouse wheel scrolls horizontal
$("html, body").mousewheel(function(event, delta) {
    this.scrollLeft -= (delta * 30);
    event.preventDefault();
    });
//smooth scroll
$('a').bind('click',function(event){
    var $anchor = $(this);
	    $('html, body').stop().animate({
            scrollLeft: $($anchor.attr('href')).offset().left
        }, 15000);
        event.preventDefault();
    });

function show() {
    var offset = $("#child").offset();
    //var posY = $(window).scrollTop();
    var posX = $(window).scrollLeft() + $(window).width()/2; 
    $("#coordinates").html("Left: " + posX + " px");
}
show();
$(window).scroll(show);

});
