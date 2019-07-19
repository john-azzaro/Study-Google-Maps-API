'use strict';

function initMap() {
  var city = {lat: -25.344, lng: 131.036};                                   // Location stored as a variable
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: city});               // The map, centered on the city of your choice at the given coordinates
  var marker = new google.maps.Marker({position: city, map: map});            // position of marker
}
