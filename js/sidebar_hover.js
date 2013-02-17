$(document).ready(function() {

    $.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
    };

    $(['media/gallery_hover.jpg','media/profiles_hover.jpg']).preload();

    $('.hlinks').each(
        function()
        {
            var name = $(this).attr('id');
            var position = $(this).position();
            //console.log(position);
            $('.hexpand[name="'+name+'"]').css({'left':position.left,'top':position.top+70}).hide();
        }
    ).click(
        function(e)
        {
            var name = $(this).attr('id');
            $('.hexpand[name="'+name+'"]').slideToggle();
            e.preventDefault();
        }
    );

    $('#side-nav-bottom a').click(function(e){e.preventDefault();});

    $('.vlinks .verticaltext').click(function(e){
        if($(this).siblings('.vcontent').css('display')=='block')
        {
            $('.vcontent').hide("slide",{direction:"left"},700,function(){
                $('#backdrop').css({'z-index':5}).fadeOut(700);
                //$(this).parent('.vlinks').removeClass('active');
            });
        }
        else
        {
            $('.vlinks').removeClass('active');
            $('#backdrop').fadeIn(700).css({'z-index':10});
            $(this).parent('.vlinks').addClass('active').children('.vcontent').show("slide", { direction: "left" }, 700);
        }
        e.preventDefault();

    });

    $('#backdrop, .exit').click(function(e){
        $('.vcontent').hide("slide",{direction:"left"},700,function(){
            $('#backdrop').css({'z-index':5}).fadeOut(700);
        });
        e.preventDefault();
    });

    $(document).keyup(function(e){
        if (e.keyCode==27)
        {
            $('.vcontent').hide("slide",{direction:"left"},700,function(){
            $('#backdrop').css({'z-index':5}).fadeOut(700);
            });
        }
    });
    
});
	
