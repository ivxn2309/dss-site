var mainmap;
var contactmap;

var googleMapStyle1;
var googleMapStyle2;
var googleMapType;
var googleMapOptions;
var googleMapIcon;
var googleMapMarker;

var renderMap = function(center, zoom, element, map, style) {
	// if element doesnt exist we need to bail out
	if($('#' + element).length == 0) return;

	// create a new StyledMapType object, passing it the array of styles, as well as the name to be displayed on the map type control.
	googleMapType = new google.maps.StyledMapType(style, {name: "DSS"});

	// create a map object, and include the MapTypeId to add to the map type control.
	googleMapOptions = {
		zoom: zoom,
		disableDefaultUI: true,
		mapTypeControl: false,
		zoomControl: false,
		scaleControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		center: new google.maps.LatLng(center[0],center[1]),
		mapTypeControlOptions: {
			mapTypeIds: [google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.TERRAIN, 'DSS']
		}
	};
	 
	// set up new google map
	map = new google.maps.Map(document.getElementById(element), googleMapOptions);

	// associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('DSS', googleMapType);
	map.setMapTypeId('DSS');
	return map;
}

var plotMapPoint = function(lat, lng, url, map) {
	    googleMapMarker = new google.maps.Marker({
		url:url,
		map: map,
		animation: google.maps.Animation.DROP,
		position: new google.maps.LatLng(lat,lng),
		icon: googleMapIcon
	});

	googleMapMarker.setMap(map);
	google.maps.event.addListener(googleMapMarker, 'click', function() {
		window.open(googleMapMarker.url);
	});
};

function initMap() {
	// set src of google map icon for markers
	googleMapIcon = {
		url: 'project/img/marker.png',
		scale: '0.2'
	}

	// custom google map styling
	googleMapStyle1 = [
	  {
	    featureType: "all",
	    stylers: [
	      { saturation: -50 }
	    ]
	  },{
	    featureType: "road.arterial",
	    elementType: "geometry",
	    stylers: [
	      { visibility: "off" }
	    ]
	  },{
	    featureType: "poi.business",
	    elementType: "labels",
	    stylers: [
	      { visibility: "off" }
	    ]
	  }
	];

	googleMapStyle2 = [
	  {
	    featureType: "all",
	    stylers: [
	      { saturation: -100 }, 
	      { lightness: -35 },
	      { invert_lightness: false }, 
	      { gamma: 0.8 }
	    ]
	  },{
	    featureType: "road.arterial",
	    elementType: "geometry",
	    stylers: [
	      { visibility: "off" }
	    ]
	  },{
	    featureType: "poi.business",
	    elementType: "labels",
	    stylers: [
	      { visibility: "off" }
	    ]
	  }
	];

	mainmap = renderMap([20.634039, -103.469000], 15, 'googleMap', mainmap, googleMapStyle1);
	contactmap = renderMap([20.634039, -103.464467], 15, 'map-contact', contactmap, googleMapStyle2);

	//Show Marker
	plotMapPoint(20.627659, -103.449177,"https://www.google.com.mx/maps/place/20%C2%B039'57.2%22N+103%C2%B023'01.0%22W/@20.627807,-103.4493126,17.25z/data=!4m2!3m1!1s0x0:0x0", mainmap);
	plotMapPoint(20.627659, -103.449177,"https://www.google.com.mx/maps/place/20%C2%B039'57.2%22N+103%C2%B023'01.0%22W/@20.627807,-103.4493126,17.25z/data=!4m2!3m1!1s0x0:0x0", contactmap);

	$( window ).on('resize',function(){
	    google.maps.event.trigger(mainmap, 'resize');
	    mainmap.panTo(googleMapMarker.getPosition());

	    google.maps.event.trigger(contactmap, 'resize');
	    contactmap.panTo(googleMapMarker.getPosition());
	});

	//This timeout is because the framework does not show correctly the map till resize 
	setTimeout(resizeMaps, 3000);
}

function resizeMaps() {
	google.maps.event.trigger(mainmap, 'resize');
	google.maps.event.trigger(contactmap, 'resize');
	contactmap.panTo(googleMapMarker.getPosition());
	mainmap.panTo(googleMapMarker.getPosition());
}

/*
$( window ).on('resize',function(){
    google.maps.event.trigger(map, 'resize');
    map.panTo(googleMapMarker.getPosition());
});
*/
/*
$( document ).on('load',function(){
	google.maps.event.addListener(map, "idle", function(){
        google.maps.event.trigger(map, 'resize');
    });
});
*/

