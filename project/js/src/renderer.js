function showView(id_sender, content) {
    activeBreadcrumb(id_sender);
    hideAll();
    $(content).show();
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
}

showView('home-button', '#home');