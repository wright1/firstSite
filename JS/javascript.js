

var lastEl = document.getElementById("links");
var headEl = document.getElementById("headLink");
var backEl = document.getElementById("back")

 


function scrollToItem(item) {
    var diff=(item.offsetTop-window.scrollY)/8;
    if (Math.abs(diff)>1) {
        window.scrollTo(0, (window.scrollY+diff))
        clearTimeout(window._TO)
        window._TO=setTimeout(scrollToItem, 30, item)
    } else {
        window.scrollTo(0, item.offsetTop)
    }
}

headEl.addEventListener("click", function(){ scrollToItem(lastEl)}, false);
backEl.addEventListener("click", function(){ scrollToItem(headEl)}, false);