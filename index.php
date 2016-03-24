<!DOCTYPE html>
<html>
<!-- Author: Ivan Tovar (Webmaster at S+E) -->
<!-- e-mail: ivxn2309@hotmail.com -->
<!--   Date: Jan 19, 2016 -->
<head>
    <meta charset="utf-8">
    <meta http-equiv="Content-type" content="text/html;charset=UTF-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>DSS</title>
    <link rel="icon" type="image/png" href="project/img/welcome/favicon.png" />
    <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,500,700' rel='stylesheet' type='text/css'>

    <!-- JQuery -->
    <script type="text/javascript" src="project/js/jquery.min.js"></script>
    <script type="text/javascript" src="project/js/jquery.mobile.customized.min.js"></script>
    <script type="text/javascript" src="project/js/jquery.easing.1.3.js"></script>

    <!-- Navplate -->
    <script src="project/component/navplate/js/min/navplate.js"></script>
    <link href="project/component/navplate/css/navplate.css" rel="stylesheet" type="text/css">

    <!-- Flickerplate -->
    <script src="project/component/flickerplate/js/min/flickerplate.js"></script>
    <link href="project/component/flickerplate/css/flickerplate.css" rel="stylesheet" type="text/css">

    <!-- Formplate -->
    <script src="project/component/formplate/js/min/formplate.js"></script>
    <link href="project/component/formplate/css/formplate.css" rel="stylesheet" type="text/css">

    <!-- Modalplate -->
    <script src="project/component/modalplate/js/min/modalplate.js"></script>
    <link href="project/component/modalplate/css/modalplate.css" rel="stylesheet" type="text/css">

    <!-- Buttonplate -->
    <script src="project/component/buttonplate/js/min/buttonplate.js"></script>
    <link href="project/component/buttonplate/css/buttonplate.css" rel="stylesheet" type="text/css">

    <!-- Hammer -->
    <script src="project/component/hammerjs/hammer.js"></script>

    <!-- Animation of numbers -->
    <script type="text/javascript" src="project/js/jquery.animateNumber.min.js"></script>

    <!-- DSS Scripts -->
    <script src="project/js/src/events.js?230320161852"></script>
    <script src="project/js/src/script.js?230320161852"></script>    

    <!-- DSS Stylesheets -->
    <link href="project/css/main-base.css?230320161852" rel="stylesheet" type="text/css">
    <link href="project/css/main-page.css?230320161852" rel="stylesheet" type="text/css">

    <link href="project/css/home-base.css?230320161852" rel="stylesheet" type="text/css">
    <link href="project/css/home-page.css?230320161852" rel="stylesheet" type="text/css">

    <link href="project/css/info-base.css?230320161852" rel="stylesheet" type="text/css">
    <link href="project/css/info-page.css?230320161852" rel="stylesheet" type="text/css">

    <link href="project/css/contact-base.css?230320161852" rel="stylesheet" type="text/css">
    <link href="project/css/contact-page.css?230320161852" rel="stylesheet" type="text/css">

    <link href="project/css/portfolio-base.css?230320161852" rel="stylesheet" type="text/css">
    <link href="project/css/portfolio-page.css?230320161852" rel="stylesheet" type="text/css">

    <!-- Camera for projects -->
    <script type="text/javascript" src="project/js/camera.min.js"></script>
    <link href="project/css/camera.css" rel="stylesheet" type="text/css">
    <link href="project/css/gallery-base.css?230320161852" rel="stylesheet" type="text/css">
    <link href="project/css/gallery-page.css?230320161852" rel="stylesheet" type="text/css">

    <script type="text/javascript">
    /*
    jQuery(function(){
        jQuery('#slider-p1').camera({
            fx: 'simpleFade',
            playPause: false,
            height: '500px',
            autoAdvance: false,
            pagination: false,
            thumbnails: true
        });
    });
*/
    </script>

</head>
<body>
<div class="se-pre-con"></div>
<script type="text/javascript">
    var img = new Image();
    img.src = 'project/img/loader.gif';
    $('.se-pre-con').css('background-image', 'url("' + img.src + '?x=' + Date.now() + '")' );
</script>
<div id="web-content" style="display:none;"> <!-- Loading -->
	<!-- ================== Header ================== -->
    <div id="fixed-top" class="row not-extended page-top">
        <div class="span-4 span-large-4">
            <img class="logo" src="project/img/welcome/logo.png" style="width: 280px; margin-top: -5px">
        </div>
        <div class="span-8 span-large-8">
            <a id="nav-trigger" class="fa fa-bars fa-2x" href="#mobile-menu"></a>
        </div>
        <div class="span-8 span-large-8">
            <nav id="menubar" class="navigation">
                <ul>
                    <li><a id="home-button" class="now" href="#home" onclick="javascript:showView('home-button', '#home')">INICIO</a></li>
                    <li><a id="dss-button" href="#dss" onclick="javascript:showView('dss-button', '#dss')">DSS</a></li>
                    <li><a id="projects-button" href="#projects" onclick="javascript:showView('projects-button', '#projects')">PROYECTOS</a></li>
                    <li><a id="contact-button" href="#contact" onclick="javascript:showView('contact-button', '#contact')">CONTACTO</a></li>
                    <li id="search-area">
                        <input id="search-text" type="text" placeholder="Búsqueda..." onblur="javascript:hideSearchBox()">
                    </li>
                    <li id="search-icon">
                        <a id="lupita" href="javascript:toggleSearchBox()"><img src="project/img/lupita.png" width="12px"></a>                        
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <!-- ================== End of Header ================== -->
    <!-- ***************************** Main Content ***************************** -->
    <div id="maincontent">
        <!-- Load main content pages -->
        <div id="home"><?php include "views/home.html" ?></div>
        <div id="dss"><?php include "views/dss.html" ?></div>
        <div id="projects"><?php include "views/projects.html" ?></div>
        <div id="contact"><?php include "views/contact.html" ?></div>
        <!-- Load the projects -->
        <div id="project1-info"><?php include "views/projects/project1.html" ?></div>
        <div id="project2-info"><?php include "views/projects/project2.html" ?></div>
        <div id="project3-info"><?php include "views/projects/project3.html" ?></div>
        <div id="project4-info"><?php include "views/projects/project4.html" ?></div>
    </div>
    <script type="text/javascript">
    /* This function allows a smooth scroll */
        $(function() {
          $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1200);
                return false;
              }
            }
          });
        });
    </script>
    <!-- ************************** End of Main Content ************************* -->

    <!-- ================== Footer ================== -->
    <footer id="footer" class="row not-extended">
        <div class="span-12 span-large-12">
            <img src="project/img/footer-image.png" style="margin-bottom: -15px"><br>
            <b style="font-size: 10px; letter-spacing: 1px">DSS Estructuras. © Todos los derechos reservados.</b>
        </div>
    </footer>
    <!-- ================== End of Footer ================== -->

    <!-- ================== Mobile Menu ================== -->
    <div id="mobile-menu" class="mobile-nav">
        <ul>
            <li><a href="javascript:showView('home-button', '#home', null, 'mobile')">INICIO</a></li>
            <li><a href="javascript:showView('dss-button', '#dss', null, 'mobile')">DSS</a></li>
            <li><a href="javascript:showView('projects-button', '#projects', null, 'mobile')">PROYECTOS</a></li>
            <li><a href="javascript:showView('contact-button', '#contact', null, 'mobile')">CONTACTO</a></li>
        </ul>
    </div>
    <!-- ================== End of Mobile Menu ================== -->
    <!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCD2rNOPtKSTk_s8Z7YdWzjs_xHWiAGXi0" type="text/javascript"></script> -->
    <script src="https://maps.googleapis.com/maps/api/js" type="text/javascript"></script>
    <script src="project/js/src/maps.js" type="text/javascript"></script>
    <script type="text/javascript">
        initMap();
    </script>
</div><!-- End Loading -->

<!-- Webplate -->
<script id="webplate" src="start.js"></script>
</body>
</html>
<!-- ============================================================= -->
<!-- <script src="project/js/src/renderer.js"></script> -->
<!-- ============================================================= -->
<script type="text/javascript">
    setTimeout(resizeMaps, 8000);
</script>
