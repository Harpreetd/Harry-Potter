

//function for generating random colors
function generateRandomColor() {
  let maxValue = 0xffffff;
  let randomNumber = Math.floor(Math.random() * maxValue);
  console.log(randomNumber);
  let randomColor = randomNumber.toString(16);
  console.log(randomColor);
    return(`#${randomColor}`);
}
console.log(generateRandomColor());
