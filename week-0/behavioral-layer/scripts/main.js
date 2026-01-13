// =============================================
// DESN 378: Code + Design 2
// Your JavaScript will live here.
//
// This file will grow throughout the quarter
// as you learn to make the web behave.
// =============================================

console.log('Portfolio loaded');
console.log("JavaScript is connected!");

// Changes background color
document.body.style.backgroundColor = "#C6B7E2";

// The code below links the images for the image changer
const myImage = document.querySelector("img");

// The following code links to the HTML images and allows them to be changed when clicked. It also includes an event listener that waits for a click to signal the image change.
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/fox1.png") {
    myImage.setAttribute("src", "images/fox2.png");
  } else {
    myImage.setAttribute("src", "images/fox1.png");
  }
});

// The "let" variables below link to the new button in the index.html file and the h1 heading.
let myButton = document.querySelector("button");
// The code below is styling to make the button more fun to look at.
myButton.style.padding = "0.6rem 1.4rem";
myButton.style.marginTop = "1rem";
myButton.style.backgroundColor = "#FADADD"; // pastel pink
myButton.style.color = "#3D0301";
myButton.style.border = "none";
myButton.style.borderRadius = "1000px"; // pill shape = cute
myButton.style.fontFamily = "'Playfair Display', serif";
myButton.style.fontSize = "1.2rem";
myButton.style.fontWeight = "600";
myButton.style.letterSpacing = "0.06em";


let myHeading = document.querySelector("h1");

// "function declaration". This is the first step in to create a custom welcome message.
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `welcome to my JS site! ${myName}`;
  }
}

// The following code is the "event listener". It waits for a click and then it triggers the setUserName function.
myButton.addEventListener("click", () => {
  setUserName();
});


/*
  SUMMARY:
  This file does two things:
  1. [Links two images through HTML and JS, and sets them up with an event listener to change when clicked.]
  2. [A welcome messsage that tells the user to enter their name and changes the main header.]
​
  The key pattern I learned: Getting javascript set up in the very beginning was the most challenging part of this for me. Once I got through that first console.log() mset up, it was smooth sailing!!
*/