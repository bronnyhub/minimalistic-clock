// Full screen on function

var elem = document.documentElement;
function openFullscreen() {
  if(elem.requestFullscreen) {
    elem.requestFullscreen();
    document.getElementById("expand").style.opacity = "0";
    document.getElementById("side-nav").style.opacity = "0";
    document.getElementById("menu").style.opacity = "0";
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen(); 
  }
}



// Full screen off function

document.addEventListener("keydown", function(event) {
  const key = event.key;
  if (key === "Escape") {
    document.getElementById("expand").style.opacity = "1";
    document.getElementById("side-nav").style.opacity = "1  ";
    document.getElementById("menu").style.opacity = "1";
  }
});

function closeFullscreen() {
  if(document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}



// Clock function

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
  if (i < 10) {i = "0" + i};
  return i;
}



// Sidebar Options

$(".sidebar ul li").on('click' , function() {
  $(".sidebar ul li.active").removeClass('active');
  $(this).addClass('active');
}) 



// Background picker

$('#backgroundPicker').click(function(){
  $('#background-picker-menu').toggle();
});

function changeBackground(){
  let color = document.getElementById('color_value').value;
  document.body.style.backgroundColor = color;
}



// Font picker

$('#fontPicker').click(function(){
  $('#font-picker-menu').toggle();
})


function changeFont(){
  font = document.getElementById('fonts').value;
  document.body.styler.font = font;
}



// Contact

$('#contactMenu').click(function(){
  $('#contact-menu').toggle();
})
