// Puntos de cuevas

var popupCuevas = function (feature, marker) {
  marker.bindPopup(
    "<b>Tipología</b><br><br> " +
      feature.properties.tipologia +
      "<br><br><b>Estado de conservación</b><br><br>" +
      feature.properties.conserva +
      "<br><br><b>Observaciones</b><br><br>" +
      feature.properties.observa +
      "<br><br>" +
      feature.properties.embed1
  );
};

function estiloCuevas(feature, layer) {
  return {
    radius: 5,
    fillColor: "#cea256",
    color: "#cea256",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.7,
  };
}

var cuevas = L.geoJson(cuevas, {
  pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, estiloCuevas);
  },
  style: estiloCuevas,
  onEachFeature: popupCuevas,
}).addTo(map);

var markersCluster = L.markerClusterGroup({
  maxClusterRadius: 25,
  showCoverageOnHover: false,
  zoomToBoundsOnClick: true,
});

markersCluster.addLayer(cuevas);
map.addLayer(markersCluster);
