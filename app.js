function randomRGB (){
  function randomNum(){
    return Math.floor(Math.random()*256);  
  }
  return "(" + randomNum() + "," + randomNum() + "," + + randomNum() + ")";
}

var colorCase = document.querySelectorAll('.colorCase');




for (var i=0 ; i<colorCase.length ; i++){
  colorCase[i].style.backgroundColor = "rgb" + randomRGB();
}