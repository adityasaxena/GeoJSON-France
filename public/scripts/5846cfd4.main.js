$(document).ready(function(){function a(){var a={center:{lat:46.71109,lng:1.7191036},zoom:8},c=new google.maps.Map(document.getElementById("map-canvas"),a);c.data.loadGeoJson("/data"),c.data.setStyle(function(){return{fillColor:"rgba(255, 0, 0, 0.3)",strokeWeight:.5}}),c.data.addListener("click",function(a){document.getElementById("info").textContent=a.feature.getProperty("nom")}),c.data.addListener("mouseover",function(a){c.data.revertStyle(),c.data.overrideStyle(a.feature,{strokeWeight:2})}),c.data.addListener("mouseout",function(){c.data.revertStyle()});var d=[[47.4746479,-.5549147],[47.240989,-1.5341311],[48.9012319,6.0518403],[48.8202074],[48.7668719,7.2584229],[47.5132479,7.00086]];b(c,d)}function b(a,b){console.log(b);for(var c=0;c<b.length;c++){var d=b[c],e=new google.maps.LatLng(d[0],d[1]);new google.maps.Marker({position:e,map:a})}}console.log("Hello"),console.log(google),google.maps.event.addDomListener(window,"load",a)});