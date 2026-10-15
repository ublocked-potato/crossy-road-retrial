function openFullscreen(id) {
    var elem = document.getElementById(id);
    if (elem.requestFullscreen) { elem.requestFullscreen(); }
    else if (elem.webkitRequestFullscreen) { elem.webkitRequestFullscreen(); }
    else if (elem.msRequestFullscreen) { elem.msRequestFullscreen(); }
}
