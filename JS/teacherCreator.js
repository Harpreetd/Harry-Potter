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
    teacherList.innerHTML += `<li class="">
        <h2>${staffMember.name}</h2>
        <img src="${placeholder}" class=""/>
        </li>
        `;
  });

  // const htmlString = staffMembers
  //   .map((hogwartsStaff) => {
  //     let placeholder = hogwartsStaff.image;
  //     if (staffMembers.image === "") {
  //       placeholder = "./images/defaultimage.png";
  //     }return `<li class="character">
  //       <h2>${hogwartsStaff.name}</h2>
  // teacherList.innerHTML = htmlString;
};
