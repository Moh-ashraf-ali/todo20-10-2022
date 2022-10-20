let inputs = document.querySelectorAll('input');
let notask = document.querySelector('.notask');
let allTasks = document.querySelector('.allTasks');
let button = document.querySelector('button');
let validationMeassage = document.querySelectorAll('.validationMeassage');
let validationSpan = document.querySelectorAll('.validationSpan');
let closeValidationMeassage = document.querySelectorAll('.closeValidationMeassage');
let darkMood = document.querySelector('.darkMood');
let links = document.querySelectorAll('link');




// let disableFun = () => {
//   if (inputs[0].value.trim() == "" || inputs[0].value.length < 3 || inputs[0].value.length > 100 ||
//     inputs[1].value.trim() == "" || inputs[1].value.length < 3 || inputs[1].value.length > 100 ||
//     inputs[2].value.trim() == "" || inputs[2].value.length < 3 || inputs[2].value.length > 100 )
//    {
//     button.disabled = true;
//   } else {
//     button.disabled = false;

//   }
// }




// dark mood function
let darkMoodfunction = () => {
  if (links[2].href == "./css/main.css") {
    links[2].href = "./css/dark.css";
  } else {
    links[2].href = "./css/main.css";
  }
}
// to close validation message
for (let i = 0; i < validationMeassage.length; i++) {
  closeValidationMeassage[i].addEventListener('click', function () {
    validationMeassage[i].classList.add('hide');
  })
}

// add task button function
let addTask = () => {
  if (inputs[0].value.trim() == "" || inputs[0].value.length < 3 || inputs[0].value.length > 100) {
    if (inputs[0].value.trim() == "") {
      validationMeassage[0].classList.remove('hide');
      validationSpan[0].innerHTML = `Canot add empty data `;
    } else if (inputs[0].value.length < 3) {
      validationMeassage[0].classList.remove('hide');
      validationSpan[0].innerHTML = `Please enter data more than 3 character `;
    } else if (inputs[0].value.length > 100) {
      validationMeassage[0].classList.remove('hide');
      validationSpan[0].innerHTML = `Please enter data less than 100 character `;
    }
  }
  if (inputs[1].value.trim() == "" || inputs[1].value.length < 3 || inputs[1].value.length > 100) {
    if (inputs[1].value.trim() == "") {
      validationMeassage[1].classList.remove('hide');
      validationSpan[1].innerHTML = `Canot add empty data `;
    } else if (inputs[1].value.length < 3) {
      validationMeassage[1].classList.remove('hide');
      validationSpan[1].innerHTML = `Please enter data more than 3 character `;
    } else if (inputs[1].value.length > 100) {
      validationMeassage[1].classList.remove('hide');
      validationSpan[1].innerHTML = `Please enter data less than 100 character `;
    }

  }
  if (inputs[2].value.trim() == "" || inputs[2].value.length < 3 || inputs[2].value.length > 100) {
    if (inputs[2].value.trim() == "") {
      validationMeassage[2].classList.remove('hide');
      validationSpan[2].innerHTML = `Canot add empty data `;
    } else if (inputs[2].value.length < 3) {
      validationMeassage[2].classList.remove('hide');
      validationSpan[2].innerHTML = `Please enter data more than 3 character `;
    } else if (inputs[2].value.length > 100) {
      validationMeassage[2].classList.remove('hide');
      validationSpan[2].innerHTML = `Please enter data less than 100 character `;
    }
  } else {
    
    for (let i = 0; i < validationMeassage.length; i++) {
      validationMeassage[i].classList.add('hide');
    }
    notask.classList.add('hide');
    allTasks.innerHTML += `   
  <div style="display: flex; justify-content: space-between;" 
    class=" text-center oneTask  alert alert-primary" role="alert">
  <img  src="${inputs[1].value}" alt="">
      <label >${inputs[0].value} </label>
    <label>${inputs[2].value}</label>
    <i class=" closeNotask fa-solid fa-trash-can"></i>
  </div>
  `
    inputs[1].value = "";
    inputs[0].value = "";
    inputs[2].value = "";


  }
}

//  show notask div
let showNotask = () => {
  if (allTasks.children.length == 0) {
    notask.classList.remove('hide');
  }
}

// add task button event
button.addEventListener('click', addTask);

// close ended task and finally show notask div
document.addEventListener('click', function (t) {
  if (t.target.classList.contains('closeNotask')) {
    t.target.parentElement.remove();
  }
  showNotask();
})
// show ended task by do line-through in text and bgc grey 
document.addEventListener('click', function (r) {
  if (r.target.classList.contains('oneTask')) {
    r.target.classList.toggle('endtask')
  }
})
// dark mood event
darkMood.addEventListener('click', darkMoodfunction);



// end todoapp