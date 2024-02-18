import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'leaflet-control-geocoder';
import 'leaflet/dist/leaflet.css';

function LeafletMap() {
  useEffect(() => {
    // Check if the map container already has a map associated with it
    if (!document.getElementById('map')._leaflet_id) {
      // Initialize map
      const map = L.map('map').setView([37.349526422884885, -121.93695270483332], 13);

      // Add OpenStreetMap tile layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Function to fetch restaurant data from Yelp Fusion API
      function fetchRestaurants(latitude, longitude) {
        // Your fetch code here
      }

      // Call fetchRestaurants function with the initial map center coordinates
      fetchRestaurants(37.349526422884885, -121.93695270483332);

      // Initialize Leaflet Routing Machine
      L.Routing.control({
        // Routing options
      }).addTo(map);
      setTimeout(() => {
        map.invalidateSize();
      }, 400);
    }
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
 <div>
    <div id="map" style={{ height: '100vh', width: '100vw', position: 'absolute', top: 0, left: 0 }}></div>
  </div>
        <div id="routing-control"></div>
    </div>
  );
}

export default LeafletMap;
