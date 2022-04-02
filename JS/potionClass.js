

//function for generating random colors
function generateRandomColor() {
  let maxValue = 0xffffff;
  let randomNumber = Math.floor(Math.random() * maxValue);
  console.log(randomNumber);
  randomNumber = randomNumber.toString(16);
  console.log(randomNumber);
  let randomColor = randomNumber.padStart(6, 0);
  console.log(randomColor);
    return(`#${randomColor}`);
}
console.log(generateRandomColor());
