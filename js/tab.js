$(document).ready(function(){
	$('.tab').click(function(e){
		var index=$(this).index();
		console.log(index);
		$('#main').children('.article').hide();
		$('#main').children('.article').eq(index).show();
		e.preventDefault();
	})

});