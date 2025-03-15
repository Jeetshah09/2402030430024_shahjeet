// Handle login form
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Placeholder login
    if (username === "admin" && password === "admin") {
      alert("Welcome, " + username + "!");
    } else {
      alert("Incorrect username or password.");
    }
  }
  
  // Initialize Leaflet Map
  const map = L.map('map').setView([20.5937, 78.9629], 5); // Center on India
  
  // Add base layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  
  // Function to Load GeoJSON dynamically
  function loadAnimalTrackingData() {
    // Simulated API call (replace this URL with your real API endpoint)
    const apiURL = 'https://api.example.com/animal-tracking';
  
    // Fetch API
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        // Adding GeoJSON Layer to Map
        L.geoJSON(data, {
          onEachFeature: function (feature, layer) {
            layer.bindPopup(`<b>${feature.properties.name}</b><br>Status: ${feature.properties.status}`);
          }
        }).addTo(map);
      })
      .catch(error => console.error('Error loading animal data:', error));
  }
  
  // Call function to load data
  loadAnimalTrackingData();
  
  // Smooth scroll navigation
  document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  