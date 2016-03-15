/*
Author: Ivan Tovar (Webmaster at S+E)
e-mail: ivxn2309@hotmail.com
  Date: Feb 05, 2016
*/

//To indicate if actually is viewing a preview of a work
var work_preview = false;

$( document ).ready(function(){
    setTimeout(executeComponents, 1800);

    $(window).on('scroll', function() {
        var anchor_offset = 651;
        var footer = document.getElementById("footer");
        if ( $(window).scrollTop() > anchor_offset || work_preview ) 
            footer.style.bottom = "0px"
        else if (footer.style.bottom != "-90px")
            footer.style.bottom = "-90px"
    });
});

function executeComponents() {
    new navplate({
        selector: '#nav-trigger',
        type: 'slide',
        active: 'always',
        reveal: 'left'
    });

    new flickerplate({
        selector: '#mainbanner',
        dots: true,
        arrows: false,
        autoFlick: false,
        animation: 'transform-slide'
    });

    new flickerplate({
        selector: '#portfolio',
        dots: false,
        arrows: true,
        animation: 'transition-slide',
        autoFlick: false
    });

    new formplate({
        selector: '.formplate'
    });
}


setTimeout(function(){
    $(".se-pre-con").fadeOut("slow");
    setTimeout(function() {
        $("#web-content").fadeIn("slow");  
    }, 500);
    //$("#web-content").css("display","inherit");
    //$("#web-content").fadeIn("slow");
}, 
2500);