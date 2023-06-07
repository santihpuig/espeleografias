// Mapas base

var map = L.map("map", { center: [38.631817, -0.860312], zoom: 17 });

var ortofoto = L.tileLayer(
  "https://api.mapbox.com/styles/v1/santihpuig/cki640m4i1d2k19piouwlxrsj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FudGlocHVpZyIsImEiOiJrYkhOMDVnIn0.ak6qwXtkOps01I5G-LCS_A",
  {
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org"> OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</			a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    detectRetina: true,
    minZoom: 17,
    maxZoom: 20,
    opacity: 0.75,
  }
).addTo(map);

var vectorial = L.tileLayer(
  "https://api.mapbox.com/styles/v1/santihpuig/cj8op69ix8wx02rnrf366r4qo/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2FudGlocHVpZyIsImEiOiJrYkhOMDVnIn0.ak6qwXtkOps01I5G-LCS_A",
  {
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org"> OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</			a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    detectRetina: true,
    minZoom: 17,
    maxZoom: 20,
  }
);

// Selector de capa base

var baseLayers = {
  Ortofoto: ortofoto,
  Simple: vectorial,
};

L.control
  .layers(baseLayers, null, { collapsed: false, position: "bottomright" })
  .addTo(map);
