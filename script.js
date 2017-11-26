function initMap() {
    $.get( 'map_style.js', function( data ) {
        if (data) {
	    var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 2,
                center: {lat: 0, lng: 0},
	        styles: JSON.parse(data)
            });
            loadPlaces(map);
        }
    });
}

function loadPlaces(map) {
    $.getJSON("places.json", function(json1) {
        $.each(json1, function(key, data) {
            var latLng = new google.maps.LatLng(data.latitude, data.longitude);
            // Creating a marker and putting it on the map
            var marker = new google.maps.Marker({
                position: latLng,
                title: data.name,
		map: map
            });
	   
            //marker.setMap(map);
        });
    });
}

