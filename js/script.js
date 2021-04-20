    $(document).ready(function(){
      $('.slides').bxSlider();
    });
    
    var slSlider = $('.wrapper_bx').bxSlider({
        auto: true,
          onSlideAfter: function(){
            slSlider.startAuto();
     	 }
    });
      


function initMap(){
  alert('It Works!');
  
  var el = document.getElementById('canvas');
  var myLocation = new google.maps.LatLng(48.85853948884557, 2.294497391554784);
  var mapOptions = {
    center: myLocation,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.HYBRID,
    mapTypeControlOptions: {
    position: google.maps.ControlPosition.BOTTOM_CENTER
    }
  };
  
  var myMap = new google.maps.Map(el, mapOptions);
  
  var marker = new google.maps.Marker({
    position: myLocation,
    map: myMap,
    animation: google.maps.Animation.DROP,
    icon: 'images/eiffel tower.png'
  });

  var contentString = '<h1>EVERYONE!</h1><p>Get vaccinated NOW, so we can all travel and enjoy the world again!!!</p>'
  
  var infowindow = new google.maps.InfoWindow ({
    content: contentString
  });
  
  google.maps.event.addListener(marker, 'mouseover', function() {
    infowindow.open(myMap, marker);
  });
     
  $(document).foundation();
	
}
	
google.maps.event.addDomListener(window, 'load', init);





/// ALSO CSS NORMALIZATION FILE ERRORS. WHY IS IT CAUSING ERRORS, IF I"VE NEVER CHANGED IT. LEAVE IT IN OR NOT???