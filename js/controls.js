'use strict';

let searchMarker = new google.maps.Marker({
  map: map,
  animation: google.maps.Animation.BOUNCE,
  draggable: true
});



let txtAddr;

document.addEventListener('DOMContentLoaded', () => {
  let btnSearch = document.getElementById('btnSearch');
  txtAddr = document.getElementById('endereco');

  btnSearch.addEventListener('click', (event) => {
    event.preventDefault();
    geocode(txtAddr.value, finishSearch);
  }, false);
}, false);

const finishSearch = (pos) => {
  searchMarker.setPosition(pos);
  searchMarker.setTitle(txtAddr.value);
  map.setCenter(pos);
};