const CustomMarker = L.Icon.extend({
  options: {
    iconSize:     [24, 24/38*51],
    shadowSize:   [0, 0],
    iconAnchor:   [12, 24/38*51],
  }
});

const blueMarker = new CustomMarker({iconUrl: 'https://arbyn.argabioso.com/ebike/fare/images/marker-blue.png'});
const redMarker = new CustomMarker({iconUrl: 'https://arbyn.argabioso.com/ebike/fare/images/marker-red.png'});
var personMarkerIcon = L.icon({
    iconUrl: 'https://arbyn.argabioso.com/ebike/fare/images/person.png',
    iconSize:     [24, 24], // size of the icon
    iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location
});

const APP_ZOOM = 18;

const IP_GEOLOCATION__API_KEY = [
  "f985", "fd58", "fad8", "4ae5", "a3fd", "b5e9", "e8a0", "ddcf"
].join("")

document.addEventListener("DOMContentLoaded", (event) => {
  const map = L.map('map', { zoomControl: false }).setView(
    [14.655215189590614, 120.96979574916335],
    APP_ZOOM,
  );

  const tiles = L.tileLayer(
    GMapTile.getURL(
      [
        {
          elementType: 'labels',
          stylers: [{visibility: 'on'}],
        },
      ],
    ),
    {
      maxZoom: 19,
      minZoom: 5,
      edgeBufferTiles: 10,
      subdomains:['mt0','mt1','mt2','mt3'],
    }
  ).addTo(map);

  let personMarker = null;

  let watchID;
  let positionOptions = {
      enableHighAccuracy: true, // Uses GPS if available
      timeout: 5000, // Milliseconds to wait before timeout if no position is received
      maximumAge: 0 // Set to 0 to ensure the device doesn't return a cached position
  };

  var pathLine = L.polyline([], {color: '#aeaeae', weight: 6}).addTo(map);

  let allPositions = [];

  let currentLatitude = null;
  let currentLongitude = null;

  let isTracking = false;
  let startPosition = null;
  let endPosition = null;

  let startMarker = null;
  let stopMarker = null;

  document.getElementById('start-stop-btn').addEventListener('click', function() {
      if (!isTracking) {
          startTracking();
      } else {
          stopTracking();
          alert(calculateFare());
      }
  });

  function startTracking() {
      if (navigator.geolocation) {
          watchID = navigator.geolocation.watchPosition(positionUpdate, positionError, positionOptions);
          isTracking = true;

        document.querySelector("#start-stop-btn .btn-label").textContent = "Stop Tracking";
        document.querySelector("#start-stop-btn .material-icon").textContent = "stop_circle";
      } else {
          console.log("Geolocation is not supported by this browser.");
      }
  }

  function positionUpdate(position) {
      currentLatitude = position.coords.latitude;
      currentLongitude = position.coords.longitude;

      let coords = [currentLatitude, currentLongitude];

      if (startPosition === null) {
          startPosition = coords;
          // map.flyTo(coords, APP_ZOOM, {
          //   animate: true,
          //   duration: 2
          // });
          startMarker = L.marker(startPosition, {icon: blueMarker}).addTo(map);
          personMarker = L.marker(startPosition, {icon: personMarkerIcon}).addTo(map);
      }

      personMarker.setLatLng(coords);
      map.setView(coords, APP_ZOOM);
      pathLine.addLatLng(coords);
      allPositions.push(coords);

      // Update the position on your map or perform your calculations here

      // console.log("Latitude: " + currentLatitude + ", Longitude: " + currentLongitude);
  }

  function positionError(error) {
      console.warn('ERROR(' + error.code + '): ' + error.message);
  }

  function stopTracking() {
      isTracking = false;
      if (navigator.geolocation) {
          navigator.geolocation.clearWatch(watchID);
          stopPosition = [currentLatitude, currentLongitude];

          startMarker = L.marker(stopPosition, {icon: redMarker}).addTo(map);
          map.setView(stopPosition);
          // console.log("Latitude: " + currentLatitude + ", Longitude: " + currentLongitude);
      }

      document.querySelector("#start-stop-btn .btn-label").textContent = "Start Tracking";
      document.querySelector("#start-stop-btn .material-icon").textContent = "transportation";
  }

  function calculateFare() {
      // Calculate distance between startPosition and endPosition
      // Apply fare calculation logic
      // Display fare in an alert or on the page
      let distance = calculateTotalDistance(allPositions);
      if (distance < 600) {
        return 50;
      }

      return (0.05263158 * (distance - 600)) + 50;
  }
});

function calculateTotalDistance(coords) {
    let totalDistance = 0;
    const earthRadiusKm = 6371;

    for (let i = 1; i < coords.length; i++) {
        const [lat1, lon1] = coords[i - 1];
        const [lat2, lon2] = coords[i];

        const dLat = degreesToRadians(lat2 - lat1);
        const dLon = degreesToRadians(lon2 - lon1);

        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        totalDistance += earthRadiusKm * c;
    }

    return totalDistance * 1000;
}

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}
