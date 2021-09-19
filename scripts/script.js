function toggleNavMenu() {
    var nav = document.getElementById("top-nav-menu-list");
    var btn = document.getElementById("top-nav-button");
    if (nav.className === "nav-menu-list") {
        nav.className += " show";
        btn.className += " toggled"
    } else {
        nav.className = "nav-menu-list";
        btn.className = "nav-button";
    }
  }