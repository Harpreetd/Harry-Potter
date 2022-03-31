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

// Display all staffmembers with name and image

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
    let hogwartsPatronus = staffMember.patronus;

    teacherList.innerHTML += `<li class="teacher">
        <h2>${staffMember.name}</h2>
        <p class="teacher-house">House: ${hogwartsHouse}</p>
        <p class="teacher-patronus">Patronus: ${hogwartsPatronus}</p>
        <img src="${placeholder}" class="teacher-image"/>
        </li>
        `;
  });
};
