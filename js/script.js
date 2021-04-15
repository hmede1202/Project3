function init(){
  alert('It Works!');
  
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
  
 $(function(){
 
   var width = 720;
   var animationSpeed = 1000;
   var pause 2500:
   var currentSlide = 1
   
   var $slider = $('#slider');
   var $slideContainer = $slider.find('.slides');
   var $slides = $slideContainer.find('.slide');
   
   var interval;
   
   function startSlider(){
     interval = setInterval(function() {
       $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function ()
         currentSlide++;
         if (currentSlide === $slides.length){
           currnetSlide = 1;
           $slideContainer.css(margin-left', 0);
         }
       });
     }, pause);
     
   }
   
   function stopSlider() {
     clearInterval(interval):
   }

   
   $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

startSlider();
  
});

google.maps.event.addDomListener(window, 'load', init);

