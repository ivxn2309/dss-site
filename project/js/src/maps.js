var googleMapStyle;
var googleMapType;
var googleMapOptions;
var googleMapIcon;
var googleMapMarker;
var map;

var renderMap = function(center, zoom, element) {
	// if element doesnt exist we need to bail out
	if($('#' + element).length == 0) return;

	// create a new StyledMapType object, passing it the array of styles, as well as the name to be displayed on the map type control.
	googleMapType = new google.maps.StyledMapType(googleMapStyle, {name: "Springfield"});

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
			mapTypeIds: [google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.TERRAIN, 'Springfield']
		}
	};
	 
	// set up new google map
	map = new google.maps.Map(document.getElementById(element), googleMapOptions);

	// associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('Springfield', googleMapType);
	map.setMapTypeId('Springfield');
}

var plotMapPoint = function(lat, lng, url) {
	    googleMapMarker = new google.maps.Marker({
		url:url,
		map: map,
		animation: google.maps.Animation.BOUNCE,
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
	googleMapStyle = [
	  {
	    featureType: "all",
	    stylers: [
	      { saturation: -100 }
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

	// render the map
	if(screen.width > 700)
		renderMap([20.634039, -103.464467], 15, 'googleMap');
	else
		renderMap([20.634039, -103.460786], 15, 'googleMap');

	//Show Marker
	plotMapPoint(20.627659, -103.449177,"https://www.google.com.mx/maps/place/20%C2%B039'57.2%22N+103%C2%B023'01.0%22W/@20.627807,-103.4493126,17.25z/data=!4m2!3m1!1s0x0:0x0");

	//This timeout is because the framework does not show correctly the map till resize 
	setTimeout(function(){google.maps.event.trigger(map, 'resize');}, 3000);
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

