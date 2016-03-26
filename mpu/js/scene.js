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
var scene1 = new ScrollMagic.Scene({triggerElement: "#parallaxContainer", offset:-300, duration: 8500 })
	.setTween(tween1)
	//.setPin("#parallaxContainer")
	//.addIndicators({name: "paisaje"}) // add indicators (requires plugin)
	.addTo(controller);

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
		repeat: 5,									// repeat 3 times
		immediateRender: true,			// load first image automatically
		ease: Linear.easeNone,			// show every image the same ammount of time
		onUpdate: function () {
		  $("#manwalk").attr("src", imgwalk[obj.curImg]); // set the image source
			}
		}
	);
	// build scene
	var scene_manwalk = new ScrollMagic.Scene({triggerElement: "#walksequence", offset: 300, duration: 23000})
		.setTween(manwalk)
		.setPin("#walksequence")
		.addIndicators({name: "manwalk"}) // add indicators (requires plugin)
		.addTo(controller);

// hola soy Gustavo
var scene_txt03 = new ScrollMagic.Scene({triggerElement: "#txt03", offset: 200, duration: 300,})
	.setTween("#txt03", 1, {opacity: 1,})
	.setPin("#txt03") 
	.addTo(controller)
var scene_txt0b = new ScrollMagic.Scene({triggerElement: "#txt03", offset: 500, duration: 100,})
	.setTween("#txt03", 1, {opacity: 0,})
	.setPin("#txt03") 
	.addTo(controller)

//texto elaboracion 1
var scene_txt04 = new ScrollMagic.Scene({triggerElement: "#txt04", offset: 200, duration: 300,})
	.setTween("#txt04", 1, {opacity: 1,})
	//.setPin("#txt04") 
	.addTo(controller)

//buenos dias Ricardo
var scene_txt05 = new ScrollMagic.Scene({triggerElement: "#txt05", offset: -0, duration: 300,})
	.setTween("#txt05", 1, {opacity: 1,})
	//.setPin("#txt05") 
	.addTo(controller)
var scene_txt05b = new ScrollMagic.Scene({triggerElement: "#txt05", offset: 500, duration: 100,})
	.setTween("#txt05", 1, {opacity: 0,})
	//.setPin("#txt05") 
	.addTo(controller)

//flecha
var scene_flecha = new ScrollMagic.Scene({triggerElement: "#flecha", offset:-200, duration: 500, tweenChanges: true})
	.setTween('#flecha', .5, {rotation: 0, scaleX:1})
	.addTo(controller);	
//reloj
var scene_reloj = new ScrollMagic.Scene({triggerElement: "#reloj", offset:-400, duration: 500, tweenChanges: true})
	.setTween('#reloj', .5, {top: 70, scaleX:1})
	.addIndicators({name: "reloj"}) // add indicators (requires plugin)
	.addTo(controller);	

//texto elaboracion 2
var scene_txt06 = new ScrollMagic.Scene({triggerElement: "#txt06", offset: 200, duration: 300,})
	.setTween("#txt06", 1, {opacity: 1,})
	.setPin("#txt06") 
	.addTo(controller)

//=============================================================
//=======	Google graphs 						===============
//=============================================================
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Fementación', 3],
          ['Sedimentación', 2],
          ['Desidratación', 2],
          ['Solidificación', 2],
        ]);

        var options = {
          title: 'Distribución del tiempo de elaboración (días)',
      	  titleTextStyle:{fontSize:24},
          //is3D: true,
          backgroundColor: 'transparent',
          slices: {
            0: {color: '#2D8146'}, //transparent
            1: {color: '#2E4A73'},
            2: {color: '#AE843C'},
            3: {color: '#AE4C3C'},
          }
        };
        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }

//piechart
var scene_piechart = new ScrollMagic.Scene({triggerElement: "#piechart_3d", offset:0, duration: 500, tweenChanges: true})
	.setTween('#piechart_3d', 2, {rotation: 0, scaleX:1})
	.addTo(controller);	

//texto elaboracion 3
var scene_txt07 = new ScrollMagic.Scene({triggerElement: "#txt07", offset: 200, duration: 100,})
	.setTween("#txt07", 1, {opacity: 1,})
	.setPin("#txt07") 
	.addTo(controller)

//trigger video cuando el scroll sea mayor de 300
var video1 = 0
function green() {
	if ($(window).scrollLeft()>6000 && video1 == 0){ //no permitas que se inicie cada vez que se mueva el cursor
		//$('#video').css('top','0');
		$('#video').html('<iframe width="400" height="290" src="https://www.youtube.com/embed/g6u-hGnCYsI?autoplay=1&loop=1&playlist=g6u-hGnCYsI" frameborder="0" allowfullscreen></iframe>');
		$('#tv2').css({'opacity':'1', 'z-index':'0'});
		video1 = 1
	}
}
green();
$(window).scroll(green);

//vamos a ver un video
var scene_txt08 = new ScrollMagic.Scene({triggerElement: "#txt08", offset: -100, duration: 300,})
	.setTween("#txt08", 1, {opacity: 1,})
	//.setPin("#txt08") 
	.addTo(controller)
var scene_txt08b = new ScrollMagic.Scene({triggerElement: "#txt08", offset: 500, duration: 100,})
	.setTween("#txt08", 1, {opacity: 0,})
	//.setPin("#txt08") 
	.addTo(controller)

//Parallax 2
var tween_para2 = new TimelineMax ()
	.add([
	TweenMax.to("#parallaxContainer2 .layerb1", 1, {backgroundPosition: "-40% 0", ease: Linear.easeNone}),
	TweenMax.to("#parallaxContainer2 .layerb2", 1, {backgroundPosition: "-125% 0", ease: Linear.easeNone}),
	//TweenMax.to("#parallaxContainer .layer3", 1, {backgroundPosition: "-200% 100%", ease: Linear.easeNone})
		]);
// Animate parallax
var scene1 = new ScrollMagic.Scene({triggerElement: "#parallaxContainer2", offset:-300, duration: 8500 })
	.setTween(tween_para2)
	//.setPin("#parallaxContainer")
	//.addIndicators({name: "paisaje"}) // add indicators (requires plugin)
	.addTo(controller);

//texto propiedades 1
var scene_txt09 = new ScrollMagic.Scene({triggerElement: "#txt09", offset: 200, duration: 300,})
	.setTween("#txt09", 1, {opacity: 1,})
	//.setPin("#txt09") 
	.addTo(controller)

//trigger barchar cuando el scroll sea mayor de 9500
var bc1 = 0

function barchar() {
	if ($(window).scrollLeft()>8500 && $(window).scrollLeft()<9000 && bc1 == 0){ //no permitas que se inicie cada vez que se mueva el cursor
		//$('#video').css('top','0');
		$('#graph2a').animate({'width':'400'}, 1000);
		$('#graph2b').animate({'width':'500'}, 1000);
		$('#graph2c').animate({'width':'300'}, 1000);
		$('#graph2d').animate({'width':'200'}, 1000);		
		$('#graph2, #susana').animate({'opacity':'1'}, 1000);
		bc1 = 1
	}
	if (bc1 == 1 && ($(window).scrollLeft()>9500 || $(window).scrollLeft()<8500))
	{ //no permitas que se inicie cada vez que se mueva el cursor
		//$('#video').css('top','0');
		$('#graph2a').animate({'width':'0'}, 1000);
		$('#graph2b').animate({'width':'0'}, 1000);
		$('#graph2c').animate({'width':'0'}, 1000);
		$('#graph2d').animate({'width':'0'}, 1000);	
		$('#graph2, #susana').animate({'opacity':'0'}, 1000);	
		bc1 = 0
	}
}
barchar();
$(window).scroll(barchar);

//texto propiedades 2
var scene_txt10 = new ScrollMagic.Scene({triggerElement: "#txt10", offset: 200, duration: 300,})
	.setTween("#txt10, #doctor", 1, {opacity: 1,})
	//.setPin("#txt10") 
	.addTo(controller)

//texto propiedades 3
var scene_txt11 = new ScrollMagic.Scene({triggerElement: "#txt11", offset: 200, duration: 300,})
	.setTween("#txt11", 1, {opacity: 1,})
	//.setPin("#txt11") 
	.addTo(controller)

//bike
var scene_bike = new ScrollMagic.Scene({triggerElement: "#bike", offset:1000, duration:1})
	.setTween("#bike", 0.1, {opacity:1})
	.setPin("#bike")
	.addTo(controller)
var scene_bike2 = new ScrollMagic.Scene({triggerElement: "#bike", offset:1000, duration:7600})
	.setTween("#bike", 1, {x:5000})
	.setPin("#bike")
	.addTo(controller)

// saludo bike
var scene_txt12 = new ScrollMagic.Scene({triggerElement: "#txt12", offset: 200, duration: 300,})
	.setTween("#txt12", 1, {opacity: 1,})
	.setPin("#txt12") 
	.addTo(controller)
var scene_txt12b = new ScrollMagic.Scene({triggerElement: "#txt12", offset: 500, duration: 100,})
	.setTween("#txt12", 1, {opacity: 0,})
	.setPin("#txt12") 
	.addTo(controller)

//Parallax 3
var tween_para3 = new TimelineMax ()
	.add([
	TweenMax.to("#parallaxContainer3 .layerc1", 1, {backgroundPosition: "-40% 0", ease: Linear.easeNone}),
	TweenMax.to("#parallaxContainer3 .layerc2", 1, {backgroundPosition: "-125% 0", ease: Linear.easeNone}),
	//TweenMax.to("#parallaxContainer .layer3", 1, {backgroundPosition: "-200% 100%", ease: Linear.easeNone})
		]);
// Animate parallax
var scene_para3 = new ScrollMagic.Scene({triggerElement: "#parallaxContainer3", offset:-300, duration: 9500 })
	.setTween(tween_para3)
	//.setPin("#parallaxContainer")
	//.addIndicators({name: "paisaje"}) // add indicators (requires plugin)
	.addTo(controller);

//puedes disfrutar...
var scene_txt13 = new ScrollMagic.Scene({triggerElement: "#txt13", offset: 0, duration: 300,})
	.setTween("#txt13", 1, {opacity: 1,})
	//.setPin("#txt11") 
	.addTo(controller)

var scene_que_serpiente = new ScrollMagic.Scene({triggerElement: "#queso_serpiente", offset: 0, duration: 100,})
	.setTween("#queso_serpiente", 1, {opacity: 1,})
	//.setPin("#txt11") 
	.addTo(controller)

//serpiente
function pathPrepare ($el) {
	var lineLength = $el[0].getTotalLength();
	$el.css("stroke-dasharray", lineLength);
	$el.css("stroke-dashoffset", lineLength);
	console.log(lineLength);
	}
	var $word = $("path#lineAB");	
	pathPrepare($word);
	var tween_write = new TimelineMax()
		.add(TweenMax.to($word, 2, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
	var scene_write = new ScrollMagic.Scene({triggerElement: "#serpiente", duration: 300, tweenChanges: true})
		.setTween(tween_write)
		.addTo(controller);		

	var $word = $("path#lineCD");	
	pathPrepare($word);
	var tween_write = new TimelineMax()
		.add(TweenMax.to($word, 5, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
	var scene_write = new ScrollMagic.Scene({triggerElement: "#serpiente", duration: 400, tweenChanges: true})
		.setTween(tween_write)
		.addIndicators({name: "write"}) // add indicators (requires plugin)
		.addTo(controller);		

	var $word = $("path#lineEF");	
	pathPrepare($word);
	var tween_write = new TimelineMax()
		.add(TweenMax.to($word, 6, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
	var scene_write = new ScrollMagic.Scene({triggerElement: "#serpiente", duration: 500, tweenChanges: true})
		.setTween(tween_write)
		.addIndicators({name: "write"}) // add indicators (requires plugin)
		.addTo(controller);	

var scene_original = new ScrollMagic.Scene({triggerElement: "#original", offset: 100, duration: 300,})
	.setTween("#original", 1, {opacity: 1,})
	//.setPin("#txt11") 
	.addTo(controller)

var scene_crema = new ScrollMagic.Scene({triggerElement: "#crema", offset: 100, duration: 300,})
	.setTween("#crema", 1, {opacity: 1,})
	//.setPin("#txt11") 
	.addTo(controller)

var scene_rayado = new ScrollMagic.Scene({triggerElement: "#rayado", offset: 100, duration: 300,})
	.setTween("#rayado", 1, {opacity: 1,})
	//.setPin("#txt11") 
	.addTo(controller)

//platos cayendo
var scene_aperitivo = new ScrollMagic.Scene({triggerElement: "#aperitivo", offset:-400, duration: 500, tweenChanges: true})
	.setTween('#aperitivo', .5, {top: 300, scale:1.4})
	.addTo(controller);	
var scene_carnequeso = new ScrollMagic.Scene({triggerElement: "#carnequeso", offset:-400, duration: 500, tweenChanges: true})
	.setTween('#carnequeso', .5, {top: 300, scale:1.5})
	.addTo(controller);	
var scene_convino = new ScrollMagic.Scene({triggerElement: "#convino", offset:-400, duration: 500, tweenChanges: true})
	.setTween('#convino', .5, {top: 300, scale:1.5})
	.addTo(controller);	
var scene_ensalada = new ScrollMagic.Scene({triggerElement: "#ensalada", offset:-400, duration: 500, tweenChanges: true})
	.setTween('#ensalada', .5, {top: 300, scale:1.5})
	.addTo(controller);
var scene_pizza = new ScrollMagic.Scene({triggerElement: "#pizza", offset:-400, duration: 500, tweenChanges: true})
	.setTween('#pizza', .5, {top: 300, scale:1.5})
	.addTo(controller);	
var scene_sandwich = new ScrollMagic.Scene({triggerElement: "#sandwich", offset:-400, duration: 500, tweenChanges: true})
	.setTween('#sandwich', .5, {top: 300, scale:1.5})
	.addTo(controller);	
var scene_taco = new ScrollMagic.Scene({triggerElement: "#taco", offset:-400, duration: 500, tweenChanges: true})
	.setTween('#taco', .5, {top: 300, scale:1.5})
	.addTo(controller);

// Hola Rafa
var scene_txt14 = new ScrollMagic.Scene({triggerElement: "#txt14", offset: 200, duration: 300,})
	.setTween("#txt14", 1, {opacity: 1,})
	//.setPin("#txt14") 
	.addTo(controller)
var scene_txt14b = new ScrollMagic.Scene({triggerElement: "#txt14", offset: 500, duration: 100,})
	.setTween("#txt14", 1, {opacity: 0,})
	//.setPin("#txt14") 
	.addTo(controller)

// Mensaje rafa
var scene_txt15 = new ScrollMagic.Scene({triggerElement: "#txt15", offset: 0, duration: 300,})
	.setTween("#txt15", 1, {opacity: 1,})
	//.setPin("#txt15") 
	.addTo(controller)
var scene_txt15b = new ScrollMagic.Scene({triggerElement: "#txt15", offset: 500, duration: 100,})
	.setTween("#txt15", 1, {opacity: 0,})
	//.setPin("#txt15") 
	.addTo(controller)

// Ahora vamos a la tienda
var scene_txt16 = new ScrollMagic.Scene({triggerElement: "#txt16", offset: 0, duration: 300,})
	.setTween("#txt16", 1, {opacity: 1,})
	//.setPin("#txt15") 
	.addTo(controller)
var scene_txt16b = new ScrollMagic.Scene({triggerElement: "#txt16", offset: 500, duration: 100,})
	.setTween("#txt16", 1, {opacity: 0,})
	//.setPin("#txt15") 
	.addTo(controller)

//Parallax 4
var tween_para4 = new TimelineMax ()
	.add([
	TweenMax.to("#parallaxContainer4 .layerd1", 1, {backgroundPosition: "-40% 0", ease: Linear.easeNone}),
	TweenMax.to("#parallaxContainer4 .layerd2", 1, {backgroundPosition: "-125% 0", ease: Linear.easeNone}),
	//TweenMax.to("#parallaxContainer .layer3", 1, {backgroundPosition: "-200% 100%", ease: Linear.easeNone})
		]);
// Animate parallax
var scene_para4 = new ScrollMagic.Scene({triggerElement: "#parallaxContainer4", offset:-300, duration: 9500 })
	.setTween(tween_para4)
	//.setPin("#parallaxContainer")
	//.addIndicators({name: "paisaje"}) // add indicators (requires plugin)
	.addTo(controller);

//precios
$(document).ready(function(){
    $("#parme1label").click(function(){
        $("#parme1down").slideToggle("slow");
    });
    $("#parme2label").click(function(){
        $("#parme2down").slideToggle("slow");
    });
});

// Ahdios
var scene_txt17 = new ScrollMagic.Scene({triggerElement: "#txt17", offset: 0, duration: 300,})
	.setTween("#txt17", 1, {opacity: 1,})
	//.setPin("#txt15") 
	.addTo(controller)

//bike rotate
var scene_bikerotate = new ScrollMagic.Scene({triggerElement: "#txt17", offset:200, duration:50})
	.setTween("#bike", 1, {rotation:45})
	.addTo(controller)


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////













//draggable box
// $('#draggable').draggable(
//     {
//         drag: function(){
//             var offset = $(this).offset();
//             var xPos = offset.left;
//             var yPos = offset.top;
//             $('#posX').text('x: ' + xPos);
//             $('#posY').text('y: ' + yPos);
//             if (xPos > 300) {
//             	$('#draggable').draggable({ disabled: true }); 
//             	$('#draggable').css({'background-color':'green', 'border':'blue solid 4px', 'width':'300px'})
//             	$('#draggable').animate({top:50, left:100});
//         	}
//         }
//     });



// //conejo, hombre andando
//  var images = [
//  	"img/man1.png",
//  	"img/man2.png",
//  	"img/man3.png",
//  	"img/man4.png",
//  	"img/man5.png"
//  	];
// // 	// TweenMax can tween any property of any object. We use this object to cycle through the array
// // 	// create tween
//  	var obj2 = {curImg: 0};
//  	var conejo = TweenMax.to(obj2, 0.2, 
//  		{
//  		curImg: images.length - 1,	// animate propery curImg to number of images
//  		roundProps: "curImg",				// only integers so it can be used as an array index
//  		repeat: 20,									// repeat 3 times
//  		immediateRender: true,			// load first image automatically
//  		ease: Linear.easeNone,			// show every image the same ammount of time
//  		onUpdate: function () {
//  		  $("#conejo").attr("src", images[obj2.curImg]); // set the image source
//  			}
//  		}
//  	);
// // 	// build scene
//  	var scene_conejo = new ScrollMagic.Scene({triggerElement: "#imagesequence", offset:-200, duration: 8000})
//  		.setTween(conejo)
//  		.setPin("#imagesequence")
//  		.addIndicators({name: "conejo"}) // add indicators (requires plugin)
//  		.addTo(controller);

// //mensaje 1
// var scene_mg1a = new ScrollMagic.Scene({triggerElement:'#mg1', offset: -50, duration: 1000})
// 	.setTween("#mg1", 100, {opacity: 1})
// 	.setPin('#mg1')
//  	.addTo(controller)
// 	.addIndicators({name: "1"});
// var scene_mg1b = new ScrollMagic.Scene({triggerElement:'#mg1', offset: 1200, duration: 300})
// 	.setTween("#mg1", 1, {opacity: 0})
// 	.setPin('#mg1')
//  	.addTo(controller)
//  	.addIndicators({name: "2"});	









// //bezier
// var tl = new TimelineMax({
//   repeat: -1,
//   yoyo: true
// });
// var bezier_path = [	{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 150 }, { x: 200, y: 150 },
// 					{ x: 300, y: 200 }, { x: 300, y: 0 }, { x: 0, y: 0 }];

// tl.staggerTo($('.bezier > svg'), 5, { bezier: {
//   type: 'thru',
//   values: bezier_path,
//   curviness: 0.5
// }, ease: Power1.easeInOut }, 0.0222);

// //volando
// var flightpath = {	
// 		entry : {	curviness: 2, autoRotate: true, values: [
// 											 {x: 0, y: 0 }, 
// 											 { x: 100, y: 0 }, 
// 											 { x: 100, y: 150 }, 
// 											 { x: 200, y: 150 }]},
// 		looping : {	curviness: 1.25, autoRotate: true,	values: [
// 											{x: 510,	y: 60},
// 											{x: 620,	y: -60},
// 											{x: 500,	y: -100},
// 											{x: 380,	y: 20},
// 											{x: 500,	y: 60},
// 											{x: 580,	y: 20},
// 											{x: 620,	y: 15}]},
// 		leave : {curviness: 1.25, autoRotate: true,	values: [
// 											{x: 660,	y: 20},
// 											{x: 800,	y: 130},
// 											{x: $(window).width() + 300,	y: -100},]}};


// //var flightpath =[{ x: 200, y: 1000 }, { x: 100, y: 0 }, { x: 100, y: 150 }, { x: 200, y: 150 }];
// var tween_flight = new TimelineMax()
// 	.add(TweenMax.to($("#pajaro"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
// 	//.add(TweenMax.to($("#pajaro"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
// 	//.add(TweenMax.to($("#pajaro"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));
// var scene_pajaro = new ScrollMagic.Scene({triggerElement: "#target_pajaro", duration: 1000, offset: 100})
// 	.setPin("#target_pajaro")
// 	.setTween(tween_flight)
// 	.addTo(controller);


// //casa, solo escena, set pin es lo más importante
// var scene_casa = new ScrollMagic.Scene({triggerElement:'#casa',	offset: -50,duration: 3500})
// 	.setPin('#casa')
//  	.addTo(controller)
// 	.addIndicators({name: "casa"});

// //pop
// var pop1 = new TweenMax.to('#pop1', .5, {opacity:1});
// var scene_pop = new ScrollMagic.Scene({triggerElement:'#pop1', offset:0, duration:20,})
// 	.setTween(pop1)
//  	.addTo(controller)
// 	.addIndicators({name: "pop"});
// var scene_pop2 = new ScrollMagic.Scene({triggerElement: "#pop1", offset: 100,  duration: 1500})
// 	.setPin("#pop1")
// 	.addIndicators({name: "pop fijo"}) // add indicators (requires plugin)
// 	.addTo(controller);
// var pop1b = new TweenMax.to('#pop1', .5, {opacity:0});
// var scene_pop3 = new ScrollMagic.Scene({triggerElement:'#pop1', offset:1600, duration:200,})
// 	.setTween(pop1b)
//  	.addTo(controller)
// 	.addIndicators({name: "popb"});

// // Create tween muñeco
// var mun = new TweenMax.fromTo('#muneco', .5, 
// 	{scale: .05, rotation: -10, top: 0},
//    	{scale: 1, rotation: 0, top: 50});
// var scene_mun = new ScrollMagic.Scene({triggerElement:'#muneco', offset:0, duration:300,})
// 	.setTween(mun)
//  	.addTo(controller)
// 	.addIndicators({name: "mun"});
// var scene_num2 = new ScrollMagic.Scene({triggerElement: "#muneco", offset: 300,  duration: 4200})
// 	.setPin("#muneco")
// 	.addIndicators({name: "mun fijo"}) // add indicators (requires plugin)
// 	.addTo(controller);
// var mun2 = new TweenMax.to('#muneco', .5, {opacity:0});
// var scene_mun3 = new ScrollMagic.Scene({triggerElement:'#muneco', offset:4500, duration:200})
// 	.setTween(mun2)
//  	.addTo(controller)
// 	.addIndicators({name: "mun2"});

// //coche
// var scene_coche = new ScrollMagic.Scene({triggerElement: "#coche", offset:-50, duration: $(window).width() - 100,})
// 	.setTween("#coche", 1, {scale: 1.5,})
// 	.setPin("#coche") 
// 	.addTo(controller)
// 	.addIndicators({name: "coche"}) // add indicators (requires plugin)

// //saludo
// //var scene_saludo = new ScrollMagic.Scene({triggerElement: "#saludo", offset: 100, duration:1100})
// //	.setPin("#saludo") 
// //	.addTo(controller)
// //	.addIndicators({name: "saludo"})

// //plane
// //var scene_plane = new ScrollMagic.Scene({triggerElement: "#plane", offset:0, duration:8000})
// //	.setTween("#plane", 1, {scale: 50, x:800, y:-800})
// //	.setPin("#plane")
// //	.addTo(controller)
// //	.addIndicators({name: "plane"})




// //graph http://greensock.com/svg-tips
// //var scene_graph = new ScrollMagic.Scene({triggerElement: "#graph", duration: 800, tweenChanges: true})
// //	.setTween('.boxg', 1, {x:10, scaleX:4, rotation:0, opacity:1, fill:"#ff0000"})
// //	.setPin('#graph')
// //	.addIndicators({name: "g"}) // add indicators (requires plugin)
// //	.addTo(controller);	
// //graph title
// //var scene_graph_title = new ScrollMagic.Scene({triggerElement: "#propiedades", duration: 800, tweenChanges: true})
// //	.setTween('#propiedades', 1, {opacity:1})
// //	.setPin('#propiedades')
// //	.addTo(controller);	


// //caja de verde a naranja
// var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger1"})
// 	.setTween("#animate1", 0.1, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
// 	.addIndicators({name: "caja verde (duration: 0)"}) // add indicators (requires plugin)
// 	.addTo(controller);

// //caja azul se queda fija
// var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger2", offset: 200,  duration: 300})
// 	.setPin("#pin1")
// 	.addIndicators({name: "caja azul (duration: 300)"}) // add indicators (requires plugin)
// 	.addTo(controller);

// //parallax texto
// var tween5 = new TimelineMax ()
// 	.add([
// 	TweenMax.fromTo("#parallaxText .layer1", 1, {scale: 3, autoAlpha: 0.05, left: 300}, {left: -350, ease: Linear.easeNone}),
// 	TweenMax.fromTo("#parallaxText .layer2", 1, {scale: 2, autoAlpha: 0.3, left: 150}, {left: -175, ease: Linear.easeNone})
// 		]);
// var scene5 = new ScrollMagic.Scene({triggerElement: "#trigger2", offset:1500, duration: $(window).width()})
// 	.setTween(tween5)
// 	.addIndicators({name: "parallax texto"}) // add indicators (requires plugin)
// 	.addTo(controller);

//add scenes here



//use keys to jump to anchors
// $(document).keypress(function(e) {
//     switch(e.keyCode) { //39 right, 37 left
//         case 38: //scroll up
//         	$(document).scrollLeft($("#coche").offset().left );
//         break;
//         case 40: //scroll down
//             //right arrow pressed
//         break;
//     }
// });

//move to next - previous section see: http://jsfiddle.net/yn6maby0/25/

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 38, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);


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


}); //end function line 3






