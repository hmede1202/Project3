function int(){
  alert('it works')
  
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(33.51713103580776, -117.76123910392413);
  var mapOptions = {
    center: myLocation,
    zoom:18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions:{
      position: google.maps.ControlPosition.BOTTOM_CENTER
      }  
    };

  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    icon: 'iit-icon.png'  
  });  
  
  var contentString = '<h1>Hunter Joseph Mede</h1><Summer is almost here!!!</p>'
  
  var inforwindow = new google.maps.InfoWindow ({
    content: contentString  
  });
  
  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap,marker);
  });
  
}

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.51713103580776, lng: -117.76123910392413 },
    zoom: 8,
  });
}
