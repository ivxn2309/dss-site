/*
Author: Ivan Tovar (Webmaster at S+E)
e-mail: ivxn2309@hotmail.com
  Date: Feb 05, 2016
*/

//To indicate if actually is viewing a preview of a work
var work_preview = false;
var material_passed = false;

$( document ).ready(function(){
    setTimeout(executeComponents, 1800);

    $(window).on('scroll', function() {
        var footer_offset = $("#somosdss").offset().top; //651
        var footer = document.getElementById("footer");
        if ( $(window).scrollTop() > footer_offset || work_preview ) 
            footer.style.bottom = "0px"
        else if (footer.style.bottom != "-90px")
            footer.style.bottom = "-90px"

        var metrics_offset = ($("#metrics").offset().top) - 300;
        if( $(window).scrollTop() > metrics_offset && !work_preview && !material_passed) {
            material_passed = true;
            //animateNumber($("#var_num_30"), 35);
            $('#var_num_30').animateNumber({ number: 30 });
            $('#cab_num_111').animateNumber({ number: 111 });
            $('#ace_num_30').animateNumber({ number: 30 });
            $('#pro_num_12').animateNumber({ number: 12 });
        }
    });
});

function animateNumber(element_jq, lim) {
    for (var i = 0; i <= lim; i++) {
        setHTML(element_jq, i);
    };  
}

function setHTML(element_jq, txt) {
    console.log(txt);
    element_jq.html(txt);
}

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