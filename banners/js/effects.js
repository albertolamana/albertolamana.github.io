$(document).ready(function(){
    

//$("#raya").hover(function(){
//    $('#rayaduras').css("opacity","1");
//});

$("#raya").hover(function(){
    $('#boxrayaduras').animate({opacity:1,}, 500);
    $('#quesopizza').animate({opacity:1,}, 10000); 
}, function(){
	$('#boxrayaduras').animate({opacity:0,}, 500);
});


$(".draggable" ).draggable({});
$("#bike").droppable({
    drop: function( event, ui ) {
		$('#bike').animate({left:350,}, 1000);
		$('#quesobike').hide();
    }
});

$("#granjero").click(function(){
    $('#granjero').hide();
    $('#vacas').show();
    $('#gotasleche').show();
    $('#botella').show();
});

$('.col3').mousemove(function(e){
  var x = e.pageX - 1000;
  $('#botella').css('left', x + 'px');
}); 




});