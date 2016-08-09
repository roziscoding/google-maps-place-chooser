'use strict';

let searchMarker;
let btnSearch;
let txtAddr;

document.addEventListener('DOMContentLoaded', () => {
  initObjs();
}, false);

const finishSearch = (pos) => {
  searchMarker.setPosition(pos);
  searchMarker.setTitle(txtAddr.value);
  map.setCenter(pos);
};

const initObjs = () => {

  btnSearch = document.getElementById('btnSearch');
  txtAddr = document.getElementById('endereco');

  btnSearch.addEventListener('click', search, false);

  searchMarker = new google.maps.Marker({
    map: map,
    animation: google.maps.Animation.BOUNCE,
    draggable: true
  });
}

const search = (e) => {
  e.preventDefault();
  geocode(txtAddr.value, finishSearch);
}