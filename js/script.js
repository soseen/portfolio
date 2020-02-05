var blackBackground = false;


$(window).scroll(function(){
	$('nav').toggleClass('black-bg', $(window).scrollTop() > 100);
});

$('.fa-bars').click(function(){
    changeNavbarColor(blackBackground);
});

function changeNavbarColor(isBackgroundBlack){
    if(isBackgroundBlack === true){
        $('nav').css('background', "transparent");
        $('nav').css('border', "unset");
        blackBackground = false;
        console.log('jestem se tu');
    }
    else {
        $('nav').css('background', "black");
        $('nav').css('border', "1px solid white");
        blackBackground = true;
        
    }
    console.log(Boolean(blackBackground));
    return blackBackground;
}
