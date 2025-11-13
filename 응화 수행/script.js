$('ul > li').mouseenter(function(){
    $(this).children('.sub-menu').stop().slideDown();
})

$('ul > li').mouseleave(function(){
    $(this).children('.sub-menu').stop().slideUp();
})

setInterval(function() {
    $('.slide > div').animate({left:'-1200px'},function(){
        $('.slide > div').css({left:0});
        $('.slide > div > a:first-child').appendTo('.slide > div');
    })
} , 3000)