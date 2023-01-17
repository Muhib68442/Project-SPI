
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function loginBtn(){
  alert("Log in and Sign in isn't available ! Server Busy.")
}
function mapBtn(){
  alert("Map error")
}
function project(){
  alert("Project Under Construction...!")
}
function notice(){
  alert("Failed to Download .pdf ! please try again...")
}

