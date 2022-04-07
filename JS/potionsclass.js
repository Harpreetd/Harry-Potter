let hpCharacters = [];

// The function for fetching the API
const getCharcters = async () => {
  const data = await fetch("https://hp-api.herokuapp.com/api/characters");
  hpCharacters = await data.json();

  // console.log(hpCharacters);
  getSeverus();
  getStudents();
};

// The function for getting professor Severus Snape from the API
function getSeverus() {
  let professor = hpCharacters.filter(function (data) {
    return data.name == "Severus Snape";
  });
  displaySeverus(professor);
  console.log(hpCharacters);
}

// The function for displaying professor Severus Snape
let severusContainer = document.querySelector(".severus-snape-container");
let severusInfoContainer = document.createElement("div");
severusInfoContainer.classList.add("severus-info-container");
let severusName = document.createElement("h2");
let severusAge = document.createElement("p");
let severusWand = document.createElement("p");
let btnContainer = document.createElement("div");
btnContainer.classList.add("btn-container");
let startBtn = document.createElement("button");
btnContainer.append(startBtn);
let severusImage = document.createElement("img");
severusName.classList.add("severus-name");
severusAge.classList.add("severus-age");
severusWand.classList.add("severus-wand");
severusImage.classList.add("severus-img");
startBtn.classList.add("start-btn");
severusContainer.append(severusInfoContainer);
severusInfoContainer.append(
  severusName,
  severusAge,
  severusWand,
  severusImage,
  btnContainer
);

function displaySeverus(professor) {
  professor.map((severus) => {
    severusName.innerHTML = severus.name;
    severusAge.innerHTML = `Age: ${calculateAge(severus.yearOfBirth)}`;
    severusWand.innerHTML = "Wand: vet ikke enda";
    startBtn.innerHTML = "Start teaching";
    severusImage.src = severus.image;
  });
  // The hover effect on Severus Image
  severusImage.addEventListener("mouseover", () => {
    chatBubbleContainer.style.visibility = "visible";
  });
  severusImage.addEventListener("mouseout", () => {
    chatBubbleContainer.style.visibility = "hidden";
  });
}

function calculateAge(age) {
  return 2022 - age;
}

// The mouseover effect
let chatBubbleContainer = document.createElement("div");
let magicSpell = document.createElement("h2");
magicSpell.innerHTML = "Avadakadabra!";
document.body.append(chatBubbleContainer);
chatBubbleContainer.append(magicSpell);

let wrapper = document.querySelector(".wrapper");
wrapper.appendChild(chatBubbleContainer);

chatBubbleContainer.classList.add("magicspell-container");
magicSpell.classList.add("magicspell");

// funsjonen som skal starte klassen

let showStudents = document.querySelector(".students-container");
showStudents.style.display = "none";

// Random farge funksjon

startBtn.addEventListener("click", () => {
  showStudents.style.display = "block";
  getStudents();
});

// getStudents();

// let students = [];
function getStudents() {
  studentContainer.innerHTML = "";
  let students = hpCharacters.filter(function (data) {
    return data.hogwartsStudent == true;
  });
  getRandomStudents(students, 10);
}
let studentContainer = document.querySelector(".students-list");
let studentList = document.createElement("li");
studentList.classList.add("student-card");
let studentInfo = document.createElement("div");
studentInfo.classList.add("student-info");
let studentName = document.createElement("h2");
let studentHouse = document.createElement("p");
let deleteButton = document.createElement("button");
deleteButton.classList.add("delete-student-btn");
deleteButton.setAttribute("id", "deletebtn");
let studentPlaceholder = document.createElement("img");
studentPlaceholder.classList.add("students-image");
// let randomTen = [];
const getRandomStudents = (students, tenStudents) => {
  for (let i = 0; i < tenStudents; i++) {
    hpCharacters.push(students[Math.floor(Math.random() * students.length)]);
    let randomStudents = hpCharacters
      .map((student) => {
        (studentName.innerHTML = student.name),
          (studentHouse.innerHTML = `House: ${student.house}`),
          (deleteButton.innerHTML = "Delete student");
        studentPlaceholder.src = student.image;
        if (student.image == "") {
          studentPlaceholder.src = "./images/default-image.png";
        }
        if (student.house == "") {
          studentHouse.innerHTML = "House: Unknown";
        }
      })
      .join("");
    studentContainer.innerHTML += randomStudents;

    // deleteStudent(i, students);
    let allDeleteBtns = document.querySelectorAll(".delete-student-btn");
    for (let i = 0; i < allDeleteBtns.length; i++) {
      allDeleteBtns[i].addEventListener("click", () => {
        allDeleteBtns[i].style.backgroundColor = "blue";
        let userAnswer = prompt("Do you want to delete this student? yes/no:");
        if (userAnswer == "yes") {
          students.splice(i, 1);
        } else {
          alert("You didn't delete this student.");
        }
      });
    }
    let studentCard = document.querySelectorAll(".student-card");
    for (let i = 0; i < studentCard.length; i++) {
      function setBg() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        studentCard[i].style.backgroundColor = "#" + randomColor;
      }
      setBg();
    }
    studentContainer.append(studentList);
    studentInfo.append(studentName, studentHouse, deleteButton);
    studentList.append(studentInfo, studentPlaceholder);
  }
};
// function deleteStudent(i, students) {
//   // let userAnswer = prompt("Do you want to delete this character? yes/no");
//   getRandomStudents(students);
// }

getCharcters();

// deleteButton.addEventListener("click", deleteStudent)

// deleteButton.addEventListener(("click", function) (i) => {
//   studentCard.splice(i, 1);
//   alert("Jeg funker!");
//   // getRandomStudents();
// });

console.log(deleteButton);
