// Fetch Api
let url = "http://hp-api.herokuapp.com/api/characters";
function fetchData(houseName) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderData(data, houseName);
    });
}
let hogwartsStaff;
function renderData(data, houseName) {
  hogwartsStaff = data.filter(function (data) {
    return data.house == houseName;
  });
  console.log(hogwartsStaff);
}

//hogwartsStaff;
//"hogwartsStaff":true
/*
document.querySelector(".gryffindor-btn").onclick = () => {
  fetchData("Gryffindor");
};
document.querySelector(".slytherin-btn").onclick = () => {
  fetchData("Slytherin");
};
document.querySelector(".hufflepuff-btn").onclick = () => {
  fetchData("Hufflepuff");
};
document.querySelector(".ravenclaw-btn").onclick = () => {
  fetchData("Ravenclaw");
};
*/
