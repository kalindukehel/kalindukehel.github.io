// When the user scrolls down 120px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (screen && screen.width < 750){
    var fromtop = (-0.22)*(screen.width) + 205;
  }else{
    var fromtop = 100;
  }
  if (document.body.scrollTop > fromtop || document.documentElement.scrollTop > fromtop) {
    document.getElementById("portrait").style.width = "75px";
    document.getElementById("headbar").style["background-color"] = "#222831";
    document.getElementById("headbar").style["box-shadow"]= "rgba(2, 12, 27, 0.7) 0px 8px 15px -13px";
    document.getElementById("about-me").style.opacity = "0";
    document.getElementById("about-me").style.visibility = "hidden";
    document.getElementById("icons").style.opacity = "0";
    document.getElementById("icons").style.visibility = "hidden";
    document.getElementById("headbar").style.height = "15.5%";
  } else {
    document.getElementById("portrait").style.width = "";
    document.getElementById("headbar").style["box-shadow"]= "";
    document.getElementById("headbar").style["background-color"] = "";
    document.getElementById("about-me").style.opacity = "1";
    document.getElementById("about-me").style.visibility = "";
    document.getElementById("icons").style.opacity = "1";
    document.getElementById("icons").style.visibility = "";
    document.getElementById("headbar").style.height = "";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
