fetch("http://hp-api.herokuapp.com/api/characters")
  .then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    }
    throw "feilmelding";
  })
  .then((data) => {
    displayTeacher(renderData(data));
  })
  .catch((err) => console.log("first", err));

let staffMembers;

//filtrerer staffmembers

function renderData(data) {
  staffMembers = data.filter(function (data) {
    return data.hogwartsStaff == true;
  });
  console.log(staffMembers);
  return staffMembers;
}

// Display all staffmembers with name, house and image + delete and edit button

const teacherList = document.querySelector(".teacher-list");

const displayTeacher = (hogwartsStaffList) => {
  console.log(hogwartsStaffList);
  hogwartsStaffList.forEach((staffMember) => {
    let placeholder = staffMember.image;
    if (staffMember.image === "") {
      placeholder = "./images/defaultimage.png";
    }
    let hogwartsHouse = staffMember.house;
    if (staffMember.house === "") {
      hogwartsHouse = "Not in a house";
    }

    function changeColor() {
      if (staffMember.house === "Gryffindor") {
        teacherList.style.backgroundColor = "#e6a038;";
      }
    }
    changeColor();

    let hogwartsPatronus = staffMember.patronus;

    teacherList.innerHTML += `<li class="teacher">
        <h2>${staffMember.name}</h2>
        <p class="teacher-house">House: ${hogwartsHouse}</p>
        <p class="teacher-patronus">Patronus: ${hogwartsPatronus}</p>
        <button id="delete-btn" onclick="deleteTeacher()">Delete teacher</button>
        <button id="edit-btn" onclick="editTeacher()">Edit teacher</button>
        <img src="${placeholder}" class="teacher-image"/>

        </li>
        `;
  });

  // Hover effekt for hidden patronus denne trenger man ikke da hover ble lagd i css

  //   let teachers = document.body.querySelectorAll(".teacher");
  //   for (let teacher of teachers) {
  //     teacher.addEventListener("mouseover", function () {
  //       this.querySelector(".teacher-patronus").style.visibility = "visible";
  //     });
  //     teacher.addEventListener("mouseout", function () {
  //       this.querySelector(".teacher-patronus").style.visibility = "hidden";
  //     });
  //   }
};

// function deleteTeacher(staffMember, i) {
//   let askUser = prompt("Do you want to delete? Write yes/no");
//   if (askUser === "yes") {
//     staffMember.splice(i, 1);
//   } else {
//     alert("Nothing has been deleted");
//   }
//   displayTeacher(hogwartsStaffList);
// }

// deleteTeacher(hogwartsStaffList, 1);

//trykk på skjerm så flytter tryllestav seg dit, samme funksjon som banan men denne funka ikke, skjønner ikke hvorfor

// const imgWand = document.createElement("img");
// imgWanda.src = "../images/Wand.png";
// document.body.appendChild(imgWand);

// document.addEventListener(
//   "click",
//   function (ev) {
//     imgWand.style.transform = "translateY(" + (ev.clientY - 25) + "px)";
//     imgWand.style.transform += "translateX(" + (ev.clientX - 25) + "px)";
//   },
//   false
// );
