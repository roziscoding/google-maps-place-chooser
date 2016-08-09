'use strict';

let geocode;

document.addEventListener('DOMContentLoaded', () => {
  const geocoder = new google.maps.Geocoder();

  geocode = (addr, cbk) => {
    geocoder.geocode({
      address: addr
    }, (results, status) => {
      if (status == google.maps.GeocoderStatus.OK) {
        let pos = results[0].geometry.location;
        cbk(pos);
      } else {
        alert('Erro no geocoding: ' + status);
      }
    });
  };
}, false);

