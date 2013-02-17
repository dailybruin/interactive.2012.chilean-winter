$(document).ready(function() {

	$('.definition').each(function(){
		$(this).hide();
	});

    $('.define').hover(
    	function() {
    		var name = $(this).attr('name');
    		var position = $(this).position();
    		$('.definition[name="'+name+'"]').css({'left':position.left+5,'top':position.top+25}).fadeIn(500);
    	},
    	function() {
    		$('.definition').hide();
    	}
    	);
    
});
	
