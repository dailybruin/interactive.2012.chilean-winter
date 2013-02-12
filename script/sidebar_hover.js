$(document).ready(function() {

    $('.hlinks').each(
        function()
        {
            var name = $(this).attr('id');
            var position = $(this).position();
            console.log(position);
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

    $('.vlinks .verticaltext').click(function(e){
        if($(this).parent('.vlinks').hasClass('active'))
        {
            $('.vcontent').hide("slide",{direction:"left"},1000,function(){
                $('#backdrop').css({'z-index':5}).fadeOut(1000);
                $(this).parent('.vlinks').removeClass('active');
            });
        }
        else
        {
            $('#backdrop').fadeIn(1000).css({'z-index':10});
            $(this).parent('.vlinks').addClass('active').children('.vcontent').show("slide", { direction: "left" }, 1000);
        }
        e.preventDefault();

    })
    
});
	
