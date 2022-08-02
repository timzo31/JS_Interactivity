////////////////// WEEK 1 ///////////////////
/////// JAVASCRIPT: Generate OUTPUT /////////

//alert("Hello world");
//prompt("Put your name:");
document.write("<h1>Time to learn Javascript</h1>");

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
console.log(width);

const locat = window.location;
const status = false;
const windowStatus = window.closed;
console.log(windowStatus);

const links = document.getElementsByTagName("div");
//links.forEach((link) => console.log(link));
for (const link of links) {
  console.log(link);
}

const x = 12;
console.log(x == "12");
console.log(x === "12");
console.log(x !== "12");

console.log("------------ FUNCTIONS -----------");

function welcomeMessage() {
  const user = prompt("Whats's your name? ");
  const msg = `welcome dear ${user}`;

  alert(msg);

  setTimeout(() => console.log(msg), 3000);
}

welcomeMessage();
