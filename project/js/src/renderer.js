function showView(id_sender, content, slider) {
    if( id_sender )
        activeBreadcrumb(id_sender);
    else
        activeBreadcrumb("projects-button");

    hideAll();
    $(content).show();

    if(slider)
        showProjectSlider(slider);
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

function hideAll() {
    $("#home").hide();
    $("#dss").hide();
    $("#projects").hide();
    $("#contact").hide();
    
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

showView('home-button', '#home');