function int(){
  alert('it works');
  
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(48.85853948884557, 2.294497391554784);
  var mapOptions = {
    center: myLocation,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CETER
    }
  };
 
  var myMap = new google.maps.Map(el, mapOptions);
  });

}

google.maps.event.addDomListener(window, 'load', init);

, 