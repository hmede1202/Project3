function initMap() {
  var options = {
    center: { lat: 37.58562191393767, lng: -122.34749983121557 };
    zoom: 3
    }
  
  const map = new google.maps.Map(document.getElementById("canvas"), options), {
    zoom: 3,
    center: { lat: 37.58562191393767, lng: -122.34749983121557 },
    mapTypeId: "terrain",
  });
  
  const flightPlanCoordinates = [
    { lat: 37.58562191393767, lng: -122.34749983121557 },
    { lat: 48.86171043060136, lng: 2.295554326041113 },
  ];
  
   const flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });
  
  flightPath.setMap(map);
}


    


  

