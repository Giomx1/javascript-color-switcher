function changeColor(getColor){
  let bg = document.getElementById("colorChange");// Grabbing my id of colorChange and storing it in bg variable
  bg.style.background = getColor.value;//variable bg will be used to change the background style property. I am using the value property to return the color value.
}