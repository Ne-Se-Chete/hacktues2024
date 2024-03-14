var map = L.map('map');
var markers = [];

let customMarker = L.Marker.extend({
    options: {
        time: "",
        PH: 0
    }
});


data = [{
    latitude: 43.2321,
    longtitude: 23.4563,
    time: "08:09",
    PH: 7
},
{
    latitude: 42.6499,
    longtitude: 23.3638,
    time: "09:15",
    PH: 8
},
{
    latitude: 42.6535,
    longtitude: 23.3727,
    time: "12:37",
    PH: 4
},
{
    latitude: 42.6698,
    longtitude: 23.3836,
    time: "03:48",
    PH: 5.6
}
]


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        map.setView([latitude, longitude], 15);
        L.marker([latitude, longitude]).addTo(map);
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    });
    } else {
    console.log("Geolocation is not supported by this browser.");
}

marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

function createMarker(object){
    for(let i = 0; i < object.length; i++) {
        // let marker = new customMarker([object[i].latitude, object[i].longitude], {
            
        //     time: object[i].time,
        //     PH: object[i].PH
        // });
        console.log(object[i])
        L.marker([object[i].latitude, object[i].longtitude]).addTo(map).bindPopup("popupContent").openPopup()
createMarker(data);