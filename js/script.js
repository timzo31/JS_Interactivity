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

const nb_electors = [560000, 32000, 25900, 300000, 400000, 20000];

if (nb_electors.length > 0) {
  for (const val of nb_electors) {
    const html = `<p class="arr_nb_elect">${val}</p>`;

    arrElectors.insertAdjacentHTML("beforeend", html);
  }
} else {
  arrElectors.insertAdjacentHTML("beforeend", "Empty array");
}

// Total number of electors & average number
let sum = 0;
if (nb_electors.length > 0) {
  for (const electors of nb_electors) {
    sum += electors;
  }
  totalElect.textContent = `${sum}`;
  avgElect.textContent = `${Math.trunc(sum / nb_electors.length)}`;
}

//  Largest number of electors per departement
let min = (max = nb_electors[0]);
if (nb_electors.length > 0) {
  for (let i = 0; i < nb_electors.length; i++) {
    if (min > nb_electors[i]) {
      min = nb_electors[i];
    }
    if (max < nb_electors[i]) {
      max = nb_electors[i];
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

if (inputName.length > 0) {
  username.textContent = `${inputName}`;
}
