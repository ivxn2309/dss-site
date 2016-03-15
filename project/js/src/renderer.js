function showView(id_sender, content, slider, mobile) {
    if( id_sender )
        activeBreadcrumb(id_sender);
    else
        activeBreadcrumb("projects-button");

    hideAll(slider);
    

    if(slider) {
        $(content).show();
        showProjectSlider(slider);
        work_preview = true;
    }
    else {
        showAll();
        work_preview = false;
    }

    if(mobile) {
        scrollToAnchor(content);
    }

    resizeMaps();
}

function activeBreadcrumb(id_elem) {
    resetBreadcrumb();
    var button = document.getElementById(id_elem);
    web.classAdd(button, "now");
}

function resetBreadcrumb() {
    var homebutton = document.getElementById("home-button");
    var dssbutton = document.getElementById("dss-button");
    var projbutton = document.getElementById("projects-button");
    var contactbutton = document.getElementById("contact-button");

        web.classRemove(homebutton, "now");
        web.classRemove(dssbutton, "now");
        web.classRemove(projbutton, "now");
        web.classRemove(contactbutton, "now");
}

function showAll() {
    $("#home").show();
    $("#dss").show();
    $("#projects").show();
    $("#contact").show();
}

function hideAll(all) {
    if(all) {
        $("#home").hide();
        $("#dss").hide();
        $("#projects").hide();
        $("#contact").hide();
    }
    
    $("#project1-info").hide();
    $("#project2-info").hide();
    $("#project3-info").hide();
    $("#project4-info").hide();
}

var sliders = {};
function showProjectSlider(id_jq_obj) {
    //Si no esta iniciado el slider
    if(!sliders[id_jq_obj]) {
        //Se ejecuta el slider
        jQuery(function(){
            jQuery(id_jq_obj).camera({
                fx: 'simpleFade',
                playPause: false,
                height: '500px',
                autoAdvance: false,
                pagination: false,
                thumbnails: true
            });
        });
        //Se registra como iniciado
        sliders[id_jq_obj] = "Ready";
    }
}

function scrollToAnchor(anchor){
    $(document.body).animate({
        'scrollTop': $(anchor).offset().top
    }, 2000);
}

showView('home-button', '#home');

