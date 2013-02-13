$(document).ready(function(){
	$('#main').children('.article').hide().eq(0).show();
	$('.tab').click(function(e){
		var index=$(this).index();
		console.log(index);
		$('#main').children('.article').hide();
		$('#main').children('.article').eq(index).show();
		e.preventDefault();
	})

});