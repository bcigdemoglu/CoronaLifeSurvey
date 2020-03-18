/*
 the script mus be loaded after the map div is defined.
 otherwise this will not work (we would need a listener to
 wait for the DOM to be fully loaded).
 Just put the script tag below the map div.
 The source code below is the example from the leaflet start page.
*/

const hLoc = [45.4796489,9.1917907];
const bLoc = [37.3882137,-122.0476944];

const map = L.map('worldmap').setView(hLoc, 14);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
	zoomOffset: -1,
	accessToken: document.getElementById('mapviz').getAttribute("data-accesskey")
}).addTo(map);

L.marker(bLoc).addTo(map)
		.bindPopup('Cool apartment here.<br> Easily customizable.');

L.marker(hLoc).addTo(map)
		.bindPopup('Cool university here.<br> Easily customizable.')
		.openPopup();
