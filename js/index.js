      function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 13,
          center: { lat: 48.85853948884557, lng: 2.294497391554784 },
        });
        marker = new google.maps.Marker({
          map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: { lat: 48.77, lng: 2.20 },
        });
        marker.addListener("click", toggleBounce);
      }

      function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }

