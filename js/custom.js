
$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass("fa-times");
        $('header').toggleClass("toggle");
    });
    $(window).on("scroll load",function(){
            $("#menu").removeClass("fa-times");
        $('header').removeClass("toggle");

        if($(this).scrollTop ()> 0){
            $('#up').show();

        }else{
            $('#up').hide();
        }
    });

  // Smooth scrolling  

$('a[href *= "#"]').on('click',function(e){
    // e.preventDefault();

    $('html, body').animate({
        scrollTop : $($(this).attr('href')).offset().top,
    },1000,'linear');

});



});