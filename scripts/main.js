// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// document.querySelector("html").onclick = function () {
//     alert("Ouch! Stop poking me!");
//   };

const USER_NAME_PREF = "name"
var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/billy.jpeg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem(USER_NAME_PREF, myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
  }

  if (!localStorage.getItem(USER_NAME_PREF)) {
    setUserName();
  } else {
    var storedName = localStorage.getItem(USER_NAME_PREF);
    myHeading.textContent = "Mozilla is cool, " + storedName;
  }

  myButton.onclick = function () {
    setUserName();
  };