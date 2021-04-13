function int(){
  alert('it works')
  
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.51713103580776, lng: -117.76123910392413 },
    zoom: 8,
  });
}

window.addEventListener('load', init);