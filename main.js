function changeColor(getColor){
  let bg = document.getElementById("colorChange")// Grabbing by id which is stored in the body element. Since I want to change the color of the body.
  let selectColor = getColor.value; //grabbing the color values of the option elements and storing it in new variable
  bg.style.background = selectColor;//since selectColor stores the color values I will be using it to change the style properties.
}
