'use strict';
let map;
let marker;
let infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 15
  });

  marker = new google.maps.Marker({
    position: {lat: -34.397, lng: 150.644},
    map: map,
    title: 'Hello, world!',
    animation: google.maps.Animation.DROP,
    draggable: true
  });

  infoWindow = new google.maps.InfoWindow({
    content: 'Hey there =)'
  });

  marker.addListener('click', markerClick);
  marker.addListener('dragend', dragEnd);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(userPos);
  } else {
    alert('No geolocation');
  }
}

function markerClick() {
  marker.setAnimation(marker.getAnimation() == google.maps.Animation.BOUNCE ? null : google.maps.Animation.BOUNCE);
  infoWindow.setContent('Hey there =)');
  infoWindow.open(map, marker);
}

function dragEnd() {
  let pos = marker.getPosition();
  infoWindow.setContent('You dropped me at ' + 'lat: ' + pos.lat() + ' lng: ' + pos.lng());
  infoWindow.open(map, marker);
  /*setTimeout(function () {
   infoWindow.close();
   marker.setAnimation(null)
   }, 2000);*/
}

function userPos(position) {
  let pos = {lat: position.coords.latitude, lng: position.coords.longitude};
  marker.setPosition(pos);
  map.setCenter(pos);
}