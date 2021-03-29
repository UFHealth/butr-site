document.addEventListener("DOMContentLoaded", () => {
  Butr.init({
    AutoAnchors: true,
    // Sidebar options
    AutoSidebar: true,
    olClass: "list-reset",
    liClass: "",
    aClass: "nav-link",
    // Marker options
    Marker: true,
    scrollingElement: null,
    scrollOffset: 24,
    duration: 400,
    markerClass: "marker",
    activeClass: "navlink-active",
    // Sticky Nav options
    StickyNav: true,
    mediaQuery: "(min-width: 1200px)",
  });
});
