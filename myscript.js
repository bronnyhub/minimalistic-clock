var elem = document.documentElement;
function openFullscreen() {
  if(elem.requestFullscreen) {
    elem.requestFullscreen();
    document.getElementById("expand").style.opacity = "0";
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen(); 
  }
}

function closeFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
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