////////////////// WEEK 1 ///////////////////
/////// JAVASCRIPT: Generate OUTPUT /////////

//alert("Hello world");
//prompt("Put your name:");
//document.write("<h1>Time to learn Javascript</h1>");

document.getElementById("test").innerHTML = "Hello World!";

console.log("Leave a secret");
console.log(window.location);
console.log(Date.now());

///////// VARIABLES /////////////

// const name = prompt("Enter your name: ");
// document.write(name);
// document.write("<h1>" + name + "</h1>");
// document.write(document.baseURI + "<br>");
// document.write(document.title + "<br>");

/////////// DATA TYPES /////////////

const width = window.innerWidth;
console.log("Scren width = " + width + "px");

const locat = window.location;
const status = false;
const windowStatus = window.closed;
console.log(windowStatus);

const links = document.getElementsByTagName("div");
//links.forEach((link) => console.log(link));
// for (const link of links) {
//   //console.log(link);
// }

const x = 12;
console.log(x == "12");
console.log(x === "12");
console.log(x !== "12");

/////////// FUNCTIONS /////////////

console.log("------------ FUNCTIONS -----------");

function welcomeMessage() {
  const user = prompt("Whats's your name? ");
  const msg = `welcome dear ${user}`;

  alert(msg);

  setTimeout(() => console.log(msg), 3000);
}
//welcomeMessage();

/////////// EVENTS /////////////

const btnDisplayDate = document.getElementsByClassName("displayDate");
const dateTxt = document.querySelector(".date");

const displayDate = () => {
  dateTxt.textContent = Date();
};

const btnFirst = document.querySelector(".first");
const btnSecond = document.querySelector(".second");
const stuff = document.getElementById("stuff");

btnFirst.addEventListener("click", function () {
  stuff.innerHTML = "Clicked first button";
});
btnSecond.addEventListener("click", function () {
  stuff.innerHTML = "Clicked second button";
});
//----------------------------------

const btn_open = document.querySelector(".btn-open");
const btn_close = document.querySelector(".btn-close");
const btn_switch = document.querySelector(".btn-switch");
const details = document.getElementById("details");

const openDetails = () => {
  details.classList.add("open");
  details.classList.remove("closed");
};

const closeDetails = () => {
  details.classList.add("closed");
  details.classList.remove("copen");
};

btn_open.addEventListener("click", openDetails);
btn_close.addEventListener("click", closeDetails);

btn_switch.addEventListener("click", function () {
  details.classList.toggle("closed");
});

/////////////  IMAGE  ///////////////
const imgs = document.querySelectorAll(".img");
const gallery = document.querySelector(".gallery");
const btnCloseModal = document.querySelector(".close_modal");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const imgContainer = document.querySelector(".img-container");

const openModal = () => {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};

const closeModal = () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

overlay.addEventListener("click", closeModal);
btnCloseModal.addEventListener("click", closeModal);

// imgs.forEach((img) => img.addEventListener("click", openModal));
imgs.forEach((img) => {
  img.addEventListener("click", function (e) {
    //console.log(e.target.getAttribute("src"));
    const imgSource = e.target.getAttribute("src");
    const image = `<img src="${imgSource}" alt="" />`;
    imgContainer.insertAdjacentHTML("afterbegin", image);
    openModal();
  });
});
///////////////////////////////////////////////
////////////  ARRAYS  ////////////

const nbElectPerDept = document.querySelector(".arr_nb_elect");
const totalElect = document.querySelector(".total_elect");
const avgElect = document.querySelector(".avg_elect");
const largestDept = document.querySelector(".largest_dept");
const lowestDept = document.querySelector(".lowest_dept");
const arrElectors = document.querySelector(".arr_elect");

const nb_electors = [560000, , , 32000, 25900, 300000, 400000, , 20000];

if (nb_electors.length > 0) {
  for (const val of nb_electors) {
    if (val != undefined) {
      const html = `<p class="arr_nb_elect">${val}</p>`;

      arrElectors.insertAdjacentHTML("beforeend", html);
    }
  }
} else {
  arrElectors.insertAdjacentHTML("beforeend", "Empty array");
}

// Total number of electors & average number
let sum = 0;
let count = 0;
if (nb_electors.length > 0) {
  for (const electors of nb_electors) {
    if (electors != undefined) {
      sum += electors;
      count = count + 1;
    }
  }
  totalElect.textContent = `${sum}`;
  avgElect.textContent = `${Math.trunc(sum / count)}`;
}

//  Largest number of electors per departement
let min = (max = nb_electors[0]);
if (nb_electors.length > 0) {
  for (let i = 0; i < nb_electors.length; i++) {
    if (nb_electors[i] != undefined) {
      if (min > nb_electors[i]) {
        min = nb_electors[i];
      }
      if (max < nb_electors[i]) {
        max = nb_electors[i];
      }
    }
  }
  largestDept.textContent = `${max}`;
  lowestDept.textContent = `${min}`;
}

///////////////////////////////////////////////
////////////  FORMS  ////////////
const inputName = document.querySelector(".input_name");
const username = document.querySelector(".username");
const welcomeMsg = document.querySelector(".welcome_msg");
const email = document.querySelector(".input_email");
const confirmEmail = document.querySelector(".input_confirm_email");
const password = document.querySelector(".input_password");
const confirmPassword = document.querySelector(".input_confirm_pwd");
const dateOfBirth = document.querySelector(".input_birthday");
const sexe = document.querySelector(".input_sexe");
const address = document.querySelector(".input_address");
const zipCode = document.querySelector(".input_zip");
const favNumber = document.querySelector(".input_fav_number");
const favColor = document.querySelector(".input_fav_color");
const infoAlert = document.querySelector(".info-alert");
const infoAlertPwd = document.querySelector(".info-alert_pwd");
const inputConfirNumber = document.querySelector(".input_confirm_number");
const inputResetOptPhone = document.querySelector(".input_pwd_res_phone");
const inputPhone = document.querySelector(".input_phone");
const formRowConfNumb = document.querySelector(".form_row_conf");

// Checking emails conformity
const checkEmail = function () {
  const email1 = email;
  const email2 = confirmEmail;
  if (email1.value != email2.value) {
    infoAlert.innerHTML = `Emails don't match !!!`;
    return false;
  } else {
    infoAlert.innerHTML = ``;
    return true;
  }
};
// Checking Password conformity
const checkPassword = function () {
  if (password.value != confirmPassword.value) {
    infoAlertPwd.innerHTML = `Passwords don't match !!!`;
    return false;
  } else {
    infoAlert.innerHTML = ``;
    return true;
  }
};

// Country Option Set Function
const inputCountry = document.querySelector(".input_country");
const countrySet = () => {
  const { country } = inputCountry.dataset;
  if (country) {
    console.log(country.value);
  }
};

// Reset Option Popup
const resetOptionPhone = function () {
  if (inputResetOptPhone.checked) {
    formRowConfNumb.classList.remove("hidden");
    inputConfirNumber.textContent = `${inputPhone.value}`;
    inputConfirNumber.setAttribute("required", true);
  } else {
    formRowConfNumb.classList.add("hidden");
    inputConfirNumber.textContent = ``;
  }
};

// const welcomeBox = document.querySelector(".welcome-box");

// if (inputName.length != 0) {
//   const html = `
//       <p class="welcome_msg">
//         Hello <span class="username">${inputName}</span>, Welcome to Javascript Interactivity Course.
//       </p>
//   `;
//   welcomeBox.insertAdjacentHTML("afterbegin", html);
// }

// const birthday = Date();
// const birth = birthday.split(" ");
// console.log(birthday, birth);
// const dateFormat = `${birth[2]}/${birth[1]}/${birth[3]}`;
// console.log(dateFormat);
