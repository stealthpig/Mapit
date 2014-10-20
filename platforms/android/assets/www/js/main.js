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

    //  var request = {
    //     origin: "N15QJ",
    //     destination: "Covent Garden, London",
    //     waypoints: [
    // {
    //   location:"Shoreditch High Street, London",
    //   stopover:false
    // },{,,m   kkkmm
    //     location:"Monument, London",
    //     stopover:true
    // },{
    //   location:"fleet street, London",
    //     stopover:true
    // }],


    //     travelMode: google.maps.TravelMode.WALKING
    // };
   
    // directionsService.route(request, function(response, status) {
    //     if (status == google.maps.DirectionsStatus.OK) {
    //         directionsDisplay.setDirections(response);
    //     }
    // });

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