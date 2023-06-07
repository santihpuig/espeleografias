// Sidebar

var sidebar = L.control.sidebar("infosidebar", { position: "left" });
sidebar.addTo(map);

var helpButton = new L.Control.Button(L.DomUtil.get("helpbutton"), {
  toggleButton: "active",
});

helpButton.addTo(map);

helpButton.on("click", function () {
  if (helpButton.isToggled()) {
    sidebar.hide();
  } else {
    sidebar.show();
  }
});
