// var app = {

//     initialize: function() {
//         this.bindEvents();
//     },

//     bindEvents: function(){
//         document.addEventListener('deviceready', this.onDeviceReady, false);
//     },

//     onDeviceReady: function(){
//         document.write("Testing");
//         navigator.geolocation.getCurrentPostion(app.onSuccess, app.onError);
//     },

//     onSuccess: function(position) {
//         alert(position);
//         var longitude = position.coords.longitude;
//         var latitude = position.coords.latitude;
//         var latlong = new google.maps.LatLng(latitude, longitude);

//         var mapOptions = {
//             center: latlong,
//             zoom: 16,
//             mayTypeId: google.maps.MapTypeId.Roadmap
//         };

//         var map=new google.maps.Map(document.getElementById("geolocation"), mapOptions)
//     },

//     onError: function(error) {
//             alert('code:'    +error.code     + '\n'  + 'message: '  +error.message + '\n');
//       },
// }



// app.initialize();
// // app.onSuccess({coords: {latitude: 50, longitude: 0}});

var markers = [];
var bounds = new google.maps.LatLngBounds();

navigator.geolocation.getCurrentPosition(function(position) {
    var longitude = position.coords.longitude;
    var latitude = position.coords.latitude;
    var latlong = new google.maps.LatLng(latitude, longitude);

    var mapOptions = {
        center: latlong,
        zoom: 16,
        mayTypeId: google.maps.MapTypeId.Roadmap
    };

    var map=new google.maps.Map(document.getElementById("geolocation"), mapOptions);
    var directionsDisplay;
    var directionsService = new google.maps.DirectionsService();

    directionsDisplay = new google.maps.DirectionsRenderer();

    directionsDisplay.setMap(map);

    var input=document.getElementById('search-field');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var searchBox = new google.maps.places.SearchBox(input);

    google.maps.event.addListener(searchBox, 'places_changed', function(){
        var places = searchBox.getPlaces();

        places.forEach(function(place) {
            var image = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };
      
            var marker = new google.maps.Marker({
                map: map,
                icon: image,
                title: place.name,
                position: place.geometry.location
            });
            bounds.extend(place.geometry.location);
            markers.push(marker);
        }) 

        map.fitBounds(bounds);

        if (markers.length >= 2) {
            var origin = markers[0].position;
            var destination = markers[markers.length-1].position;
            var waypoints = markers.slice(1, -1).map(function(marker) {
                return {
                    location: marker.position,
                    stopover: true
                };
            });

            var request = {
                origin: origin,
                destination: destination,
                waypoints: waypoints,
                travelMode: google.maps.TravelMode.WALKING
            };

            directionsService.route(request, function(response, status) {
                if (status === google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                }
            });
        }
    });

    google.maps.event.addListener(map, "bounds_changed", function() {
        var bounds = map.getBounds();
        searchBox.setBounds(bounds);
    });
}, function(error) {
    alert('code:'    +error.code     + '\n'  + 'message: '  +error.message + '\n');
}); 



// var watchID = navigator.geolocation.watchPosition(function(position) {
//   // do_something(position.coords.latitude, position.coords.longitude);
// });



// var position = {coords: {latitude: 50, longitude: 0}};

// var longitude = position.coords.longitude;
// var latitude = position.coords.latitude;
// var latlong = new google.maps.LatLng(latitude, longitude);

// var mapOptions = {
//     center: latlong,
//     zoom: 16,
//     mayTypeId: google.maps.MapTypeId.Roadmap
// };

// var map=new google.maps.Map(document.getElementById("geolocation"), mapOptions)