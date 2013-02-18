$(document).ready(function(){
	$('#main').children('.article').hide().eq(0).show();
	$('#main').children('.articleimg').hide().eq(0).show();
	$('.tab').click(function(e){
		$('.tabs').children().removeClass('activetab');
		$(this).addClass('activetab');
		var index=$(this).index();
		//console.log(index);
		$('#main').children('.article').hide();
		$('#main').children('.articleimg').hide();
		$('#main').children('.article').eq(index).show();
		$('#main').children('.articleimg').eq(index).show();
		$(document).scrollTop(467);
		e.preventDefault();
	});

	$('.nextsection').click(function(e){
		var curindex=$('.activetab').index();
		$('.tabs').children().removeClass('activetab');
		$('.tabs').children().eq(curindex+1).addClass('activetab');
		$('#main').children('.article').hide();
		$('#main').children('.articleimg').hide();
		$('#main').children('.article').eq(curindex+1).show();
		$('#main').children('.articleimg').eq(curindex+1).show();
		$(document).scrollTop(467);
		//console.log(curindex);
		e.preventDefault();
	});

});