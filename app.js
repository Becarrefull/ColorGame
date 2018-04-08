function randomRGB (){
  function randomNum(){
    return Math.floor(Math.random()*256);  
  }
  return "(" + randomNum() + "," + randomNum() + "," + + randomNum() + ")";
}

function modifyRgbCase(){
  for (var i=0 ; i<level ; i++){
    colorCase[i].style.backgroundColor = "rgb" + randomRGB();
  }
}

var level = 6;
var colorCase = document.querySelectorAll('.colorCase');
var newGame = document.getElementById('newGame');
var levelEasy = document.getElementById('easy');
var levelHard = document.getElementById('hard');
var row2 = document.getElementById('row2')

levelEasy.addEventListener('click', function(){
  level = 3;
  row2.style.display = "none";
  modifyRgbCase();
})

levelHard.addEventListener('click', function(){
  level = 6;
  row2.style.display = "block";
  modifyRgbCase();
})

newGame.addEventListener('click', modifyRgbCase)