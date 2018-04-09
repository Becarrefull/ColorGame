// Generate a random rgb color (...,...,...)
function randomRGB (){
  function randomNum(){
    return Math.floor(Math.random()*256);  
  }
  return "(" + randomNum() + "," + randomNum() + "," + + randomNum() + ")";
}

// Attribute a random rgb color to each colorCase and set the rgbToFind
function modifyRgbCase(){
  for (var i=0 ; i<level ; i++){
    colorCase[i].style.visibility = 'visible';
    colorCase[i].style.backgroundColor = "rgb" + randomRGB();
  }
  rgbToFind = colorCase[Math.floor(Math.random()*level)].style.backgroundColor;
  rgbToFindDisplay.textContent = rgbToFind;
  win.style.display = 'none';
}

var level = 6;
var colorCase = document.getElementsByClassName('colorCase');
var newGame = document.getElementById('newGame');
var levelEasy = document.getElementById('easy');
var levelHard = document.getElementById('hard');
var row2 = document.getElementById('row2')
var rgbToFindDisplay = document.querySelector('#header p') 
var rgbToFind;
var Header = document.getElementById('header')
var win = document.getElementById('win')

// Generate the first set of color
modifyRgbCase();

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

for (var i=0; i<level; i++){
  colorCase[i].addEventListener('click', function(){
    console.log(this.style.backgroundColor)
   if (this.style.backgroundColor !== rgbToFind){
    console.log ('perdu')
    this.style.visibility = 'hidden'
   } else {
    console.log ('gagné')
    Header.style.backgroundColor = rgbToFind;
    win.style.display = 'block';
   }
  })
}
