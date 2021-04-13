function int(){
  alert('it works');
  
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 48.85853948884557, lng: 2.294497391554784 },
    zoom: 8,
  });
}

google.maps.event.addDomListenser(window, 'load', init);

, 