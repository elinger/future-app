var mymap = L.map('mapid').setView([43.314997, 21.895955], 13);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZWxpbmdlciIsImEiOiJjaWx5MW81ZHUwMGZ2dmZtNnB1c29qaTgwIn0.AM8S_jBNNSAj9IMg8wQfvA'
}).addTo(mymap);
var marker = L.marker([43.314997, 21.895955]).addTo(mymap);