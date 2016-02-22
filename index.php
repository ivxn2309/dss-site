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
</head>
<body>
<div id="webplate-content" style="display:none;"> <!-- Loading -->
	
	<!-- ================== Header ================== -->
    <div class="row not-extended page-top">
        <div class="span-4 span-large-4">
            <img class="logo" src="project/img/welcome/logo.png">
        </div>
        <div class="span-8 span-large-8">
            <a id="nav-trigger" class="fa fa-bars fa-2x" href="#mobile-menu"></a>
        </div>
        <div class="span-8 span-large-8">
            <nav id="menubar" class="navigation">
                <ul>
                    <li><a id="home-button" class="now" href="javascript:showView('home-button', '#home')">INICIO</a></li>
                    <li><a id="dss-button" href="javascript:showView('dss-button', '#dss')">DSS</a></li>
                    <li><a id="projects-button" href="javascript:showView('projects-button', '#projects')">PROYECTOS</a></li>
                    <li><a id="contact-button" href="javascript:showView('contact-button', '#contact')">CONTACTO</a></li>
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
        <div id="home"><?php include "views/home.html" ?></div>
        <div id="dss"><?php include "views/dss.html" ?></div>
        <div id="projects"><?php include "views/projects.html" ?></div>
        <div id="contact"><?php include "views/contact.html" ?></div>
    </div>
    <!-- ************************** End of Main Content ************************* -->

    <!-- ================== Footer ================== -->
    <footer class="row not-extended">
        <div class="span-12 span-large-5"><img src="project/img/footer-image.png"></div>
        <div id="social-icons" class="span-12 span-large-7">
            <a class="fa fa-linkedin" href="#"></a>
            <a class="fa fa-twitter" href="#"></a>
            <a class="fa fa-youtube" href="#"></a>
            <a class="fa fa-facebook" href="#"></a>
        </div>
    </footer>
    <!-- ================== End of Footer ================== -->

    <!-- ================== Mobile Menu ================== -->
    <div id="mobile-menu" class="mobile-nav">
        <ul>
            <li><a href="javascript:showView('home-button', '#home')">INICIO</a></li>
            <li><a href="javascript:showView('dss-button', '#dss')">DSS</a></li>
            <li><a href="javascript:showView('projects-button', '#projects')">PROYECTOS</a></li>
            <li><a href="javascript:showView('contact-button', '#contact')">CONTÁCTO</a></li>
        </ul>
    </div>
    <!-- ================== End of Mobile Menu ================== -->

    <!--<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYA3pM4DiDiDsTK02z77FdsdEY_NBpK20&callback=initMap" type="text/javascript"></script>-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="project/js/src/maps.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?callback=initMap" type="text/javascript"></script>
    

<!-- This scripts are used to manage the asynchronous load -->
<!--
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
<script type="text/javascript" src="project/js/app.js"></script>
<script type="text/javascript" src="project/js/src/renderer.js"></script>
-->

<!-- ============================================================= -->

</div><!-- End Loading -->

<!-- Webplate -->
<script id="webplate" src="start.js"></script>
</body>
</html>
