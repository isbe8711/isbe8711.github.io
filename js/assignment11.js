
// EVENT LISTENERS


function button1Clicked() {
  document.getElementById('button-1').classList.toggle('was-clicked');
}


function windowLoaded(){
  console.log("linked ok !");
  document.getElementById('button-1').addEventListener('click',button1Clicked);

  function windowLoaded(){
    console.log("linked ok !");
    document.getElementById('button-2').addEventListener('mouseover',button2Clicked);


  /*
  mouseover
  mouseleave
  mousedown
  */
}

window.onload= windowLoaded;
