jQuery('document').ready(function($){
    $('.block-reveal').wrapInner("<span></span>").append("<div class='block-over'></div>");
    if( jQuery(window).width() >= 768 ){
        jQuery('ul.nav li.dropdown').hover(function() {
          jQuery(this).find('.dropdown-menu').stop(true, true).fadeIn(500);
        }, function() {
          jQuery(this).find('.dropdown-menu').stop(true, true).fadeOut(500);
        });
    }
});

jQuery(window).load(function(){
    jQuery('body').addClass('loaded')
    .find('.page-wrap').css('opacity', 1)
    .delay(1000).queue(function(){
        $(this).find('#Slider').addClass('animate');
    });
});

$(window).scroll(function(){
    $('section:not(.animate)').each(function(){
        if( $(window).scrollTop() - $(window).height() * .5  >= $(this).position().top){
            $(this).addClass('animate');
        }
    });
});
