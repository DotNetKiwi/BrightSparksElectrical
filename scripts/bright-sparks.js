// Toggles between wide and stacked navigation menu
function toggleNav() {
    var x = document.getElementById("stackedNav");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Toggles between wide and stacked footer
function toggleFooter() {
    var x = document.getElementById("stackedFooter");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

