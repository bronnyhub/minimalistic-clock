var elem = document.documentElement;
function openFullscreen() {
  if(elem.requestFullscreen) {
    elem.requestFullscreen();
    document.getElementById("expand").style.opacity = "0";
    document.getElementById("menu").style.opacity = "0";
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen(); 
  }
}

document.addEventListener("keydown", function(event) {
  const key = event.key; // Or const {key} = event; in ES6+
  if (key === "Escape") {
    document.getElementById("expand").style.opacity = "1";
    document.getElementById("menu").style.opacity = "1";
  }
});

function closeFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
    alert("Press ESC again for icons to show.");
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}


function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
} 

function checkTime(i) {	
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}