$(function() {
    $('#Carousel').carousel({interval: 8500});
    $('.nav-link').mouseenter(function(){
        $(this).css('text-decoration', 'underline');
    });
    $('.nav-link').mouseleave(function(){
        $(this).css('text-decoration', 'none');
    });
});