function init(){
  alert('it works');
  
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(48.85853948884557, 2.294497391554784);
  var mapOptions = {
    center: myLocation,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CETER
    }
  };
 
  var myMap = new google.maps.Map(el, mapOptions);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.BOUNCE,
    icon: 'images/eiffel tower.png'  
  });
  
  var contentString = '<h1>EVERYONE!</h1><p>Get vaccinated NOW, so we can all travel and enjoy the world again!!!</p>'
  
  var infowindow = new google.maps.InfoWindow ({
    content: contentString
  });
  
  google.maps.event.addListener(marker, 'mousemove', function() {
    infowindow.open(myMap, marker);
  });
}

google.maps.event.addDomListener(window, 'load', init);

