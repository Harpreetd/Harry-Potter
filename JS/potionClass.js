let hpCharacters = [];
const loadCharacters = async () => {
  try {
    const res = await fetch("https://hp-api.herokuapp.com/api/characters");
    hpCharacters = await res.json();
    console.log(hpCharacters);
    getProf("Severus Snape");
    // return hpCharacters;
  } catch (err) {
    console.error(err);
  }
};

//function for filtering Professor Snape from api data
function getProf(fullName) {
  let professor = hpCharacters.filter(function (data) {
    return data.name == fullName;
  });
  // console.log(professor);
  displayProfessor(professor);
}
//function to display Professor Snape
let professorContainer = document.querySelector(".professor-container");
const displayProfessor = (hpCharacters) => {
  const htmlString = hpCharacters.map((character) => {
    let age = character.yearOfBirth;
    let placeholder = character.image;
    let wandInfo = character.wand.wood;
    return `
      <h2>${character.name}</h2>
      <p class ="character-Age">Status: ${age}</p> 
      <p class="Wand-Info">House: ${wandInfo}</p>
      <img src="${placeholder}" class="character-image"/>
      `;
  });
  professorContainer.innerHTML = htmlString;
};

loadCharacters();
getProf("Severus Snape");
let allStudents = [];
//functions for starting lecture and displaying students
let startLectureBtn = document.querySelector("#start-lecture");
startLectureBtn.addEventListener("click", () => {
  getAllStudents();
});

function getAllStudents() {
  allStudents = hpCharacters.filter((data) => {
    return data.hogwartsStudent == true;
  });
  console.log(allStudents);
  getRandomStudents(allStudents, 10);
}
let studentsContainer = document.querySelector(".students-container");
let studentsList = document.querySelector(".students-list");
let student = document.querySelector(".student");
// let randomTen = [];
const getRandomStudents = (students, numberOfStudents) => {
  let randomTen = [];
  for (let i = 0; i < numberOfStudents; i++) {
    randomTen.push(allStudents[Math.floor(Math.random() * allStudents.length)]);
    const htmlString = randomTen.map((student) => {
      let name = student.name;
      let placeholder;
      if (student.image === "") {
        placeholder = "./images/defaultimage.png";
      } else {
        placeholder = student.image;
      }
      let houseName = student.house;
      return `<li class="student">
      <h2>${name}</h2>
      <p class="house-name">House: ${houseName}</p>
      <img src="${placeholder}" class="character-image"/>
      </li>
      `;
    });

    studentsList.innerHTML = htmlString;
  }

  return randomTen;
};

//function for generating random colors
function generateRandomColor() {
  let maxValue = 0xffffff;
  let randomNumber = Math.floor(Math.random() * maxValue);
  let randomColor = randomNumber.toString(16);
  return `#${randomColor}`;
}
// console.log(generateRandomColor());
