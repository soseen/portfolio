$(window).scroll(function(){
    $('nav').toggleClass('black-bg', $(window).scrollTop() > 100);
});


