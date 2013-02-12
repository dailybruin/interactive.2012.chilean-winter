$(document).ready(
function() {

	var mosaicHeight = $('#mosaicContainer').height();
	$('#mosaicTitle').css({'width':(3*mosaicHeight/4)-10,'height':mosaicHeight/4-10})

	//largecontainers
	$('.largecontainer').each(
		function(){
				var width = mosaicHeight/2;
				$(this).css({'width':width,'height':width});
	})
	//smalltiles
	.children().addClass('tiles').each(
		function(){
			var width = ($(this).parent().width()/2)-10;
			console.log('child width '+width);
			$(this).css({'width':width,'height':width,'border':'5px solid #fff'});
			var index = $(this).index();
			switch(index)
			{
				case 0: 
				$(this).css({'top':'0','left':'0'});
				break;

				case 1: 
				$(this).css({'top':'0','right':'0'});
				break;

				case 2: 
				$(this).css({'bottom':'0','left':'0'});
				break;

				case 3: 
				$(this).css({'bottom':'0','right':'0'});
				break;
			}
		}).hover(
		function(){
			var widthSmall = ($(this).parent().width()/2)-10;
			//$('.tiles').animate({'width':widthSmall,'height':widthSmall},300,function(){$(this).css('z-index','0');});
			var width = $(this).width()*1.3;
			$(this).css('z-index','3');
			var index = $(this).index();
			switch(index)
			{
				case 0: 
				$(this).css({'border-bottom':'10px solid #fff','border-right':'10px solid #fff'});
				break;

				case 1: 
				$(this).css({'border-bottom':'10px solid #fff','border-left':'10px solid #fff'});
				break;

				case 2: 
				$(this).css({'border-top':'10px solid #fff','border-right':'10px solid #fff'});
				break;

				case 3: 
				$(this).css({'border-top':'10px solid #fff','border-left':'10px solid #fff'});
				break;
			}
			$(this).animate({'width': width,'height':width}, 300);
		},
		function(){
			var width = ($(this).parent().width()/2)-10;
			$(this).animate({'width': width,'height':width}, 300, function(){$(this).css('z-index','0');});
		}
	);

		$('.largecontainer').each(
			function(){
				randomIndex = Math.floor(Math.random()*10/2.5);
				console.log('random Index '+ randomIndex);
				var width = $(this).children().width()*1.3;
				$(this).children().eq(randomIndex).css({'z-index':'2','width': width,'height':width});
				var index = $(this).index();
			switch(randomIndex)
			{
				case 0: 
				$(this).children().eq(randomIndex).css({'border-bottom':'10px solid #fff','border-right':'10px solid #fff'});
				break;

				case 1: 
				$(this).children().eq(randomIndex).css({'border-bottom':'10px solid #fff','border-left':'10px solid #fff'});
				break;

				case 2: 
				$(this).children().eq(randomIndex).css({'border-top':'10px solid #fff','border-right':'10px solid #fff'});
				break;

				case 3: 
				$(this).children().eq(randomIndex).css({'border-top':'10px solid #fff','border-left':'10px solid #fff'});
				break;
			}
			});

}
);