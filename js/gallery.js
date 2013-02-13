$(document).ready(
function() {

    var imageString = $('#images').html();
    //console.log(imageString);
    $('#thumbnails').html(imageString);
    var numImages = 0;

    var parentHeight = $('#slideshow img').parents('#slideshowcontainer').height();
    $('#slideshow #images').children().each(function(){
        imageHeight = $(this).height();
        marginHeight = Math.floor((parentHeight - imageHeight)/6);
        //console.log('marginheight' + marginHeight);
        $(this).css({'margin-top':marginHeight,'margin-bottom':marginHeight});
    }).first().css('margin-top',marginHeight*3 +'px');
    var nextImage = marginHeight*2;
    $('#thumbnails').children().eq(0).css({'border':'5px solid #2b5683','margin':'0px'});
	//$('#slideshowcontainer').prepend('<div id="left" class="picnav"><a href="#" class="arrows">&lt;</a></div>');
    //$('<div id="right" class="picnav"><a href="#" class="arrows">&gt;</a></div>').insertBefore('#thumbnails');

    //var heightImage = $('#slideshow img').height();
    //var heightNav = $('#arrows').height();
    //var paddingOffset = Math.floor((heightImage-heightNav)/2);
    //var heightAdjusted = heightImage-paddingOffset;

    var scrollLength = Math.floor(marginHeight+imageHeight);
    //console.log('scrollLength' + scrollLength);

    var curPicIndex = 0
    /**$('#right').click(
        function()
        {
            $('#slideshow img').eq(curPicIndex).hide("slide", {direction: "left"}, 500);
            $('#thumbnails img').eq(curPicIndex).css({'border':'none','margin':'5px'});
            if (curPicIndex < numImages-1)
                $('#slideshow img').eq(++curPicIndex).show("slide", {direction: "right"}, 500);
            else
            {
                curPicIndex=0;
                $('#slideshow img').eq(curPicIndex).show("slide", {direction: "right"}, 500);
            }
            $('#thumbnails img').eq(curPicIndex).css({'border':'5px solid #fff','margin':'0px'});
            $('#thumbnails').scrollLeft(curPicIndex * 114);
        }
    );

    $('#left').click(
        function()
        {
            $('#slideshow img').eq(curPicIndex).hide("slide", {direction: "right"}, 500);
            $('#thumbnails img').eq(curPicIndex).css({'border':'none','margin':'5px'});
            if (curPicIndex > 0)
                $('#slideshow img').eq(--curPicIndex).show("slide", {direction: "left"}, 500);
            else
            {
                curPicIndex=numImages-1;
                $('#slideshow img').eq(curPicIndex).show("slide", {direction: "left"}, 500);
            }
            $('#thumbnails img').eq(curPicIndex).css({'border':'5px solid #fff','margin':'0px'});
            $('#thumbnails').scrollLeft(curPicIndex * 114);
        }
    );**/

    $('#thumbnails img, #slideshow img').click(
        function(e)
        {
            if (curPicIndex!=$(this).index())
            {
                    $('#thumbnails').children().eq(curPicIndex).css({'border':'none','margin':'5px'});
                    curPicIndex = $(this).index();
                    $('#slideshow').animate({ scrollTop: (curPicIndex)*scrollLength }, 600);
                    $('#thumbnails').children().eq(curPicIndex).css({'border':'5px solid #2b5683','margin':'0px'});
                    var thumbHeight = $('#thumbnails').children().first().height();
                    var thumbMargin = parseInt($('#thumbnails').children().first().css('margin'));
                    $('#thumbnails').animate({ scrollTop: (curPicIndex * (thumbHeight+thumbMargin)) }, 600);
            }
            e.preventDefault();
        }
    );
}
);
	
