// ============================================
// TUTORIAL 2-2: CODEDEX CONDITIONALS
// Student: [Your Name]
// Date: [Date]
// ============================================
​
// --------------------------------------------
// EXERCISE 11: COIN FLIP
// Simulate a coin toss using Math.random()
// Output "Heads" or "Tails"
// --------------------------------------------
let num = Math.random();

if (num > 0.5) {
  console.log("Heads");
} else {
  console.log("Tails");
}​
​​
// --------------------------------------------
// EXERCISE 12: GOOD MORNING
// Check if hour < 12
// If true, print morning greeting with routines
// --------------------------------------------
​let hour = 10
if (hour < 12) {
  console.log("good morning!!")
  console.log("brush teeth")
  console.log("make coffee + breakfast")
  console.log("go to school or work :)")
}​
​​
// --------------------------------------------
// EXERCISE 13: GOOD AFTERNOON
// Add else clause to Exercise 12
// If hour < 12: morning greeting
// Else: afternoon greeting
// --------------------------------------------
let hour = 12;

if (hour < 10) {
  console.log("Good morning!!");
  console.log("Brush teeth");
  console.log("Make coffee + breakfast");
  console.log("Go to school or work :)");
} else {
  console.log("Good afternoon!");
}​
​
​​
// --------------------------------------------
// EXERCISE 14: pH LEVELS
// Check if pH is basic, acidic, or neutral
// Use else if for multiple conditions
// --------------------------------------------
const ph = 7;

if (ph > 7) {
  console.log("basic");
} else if (ph < 7) {
  console.log("acidic");
} else {
  console.log("neutral");
}​
​
​
​
// --------------------------------------------
// EXERCISE 15: MAGIC 8 BALL
// Generate random number 0-8
// Return different responses based on number
// Format: Question / Magic 8 Ball Answer
// --------------------------------------------
​const question = "will it be sunny today";

const randomNumber = Math.floor(Math.random() * 3) + 1;

let answer = "";

if (randomNumber === 2){
  answer = 'yes definitely';
} else if (randomNumber === 6) {
  answer = 'it is decidedly so';
} else if (randomNumber === 1) {
  answer = 'without a doubt';
} else if (randomNumber === 3) {
  answer = 'reply hazy, try again';
} else if (randomNumber === 7) {
  answer = 'ask again later';
} else if (randomNumber === 8) {
  answer = 'better not tell you now';
} else if (randomNumber === 2) {
  answer = 'my sources say no';
} else if (randomNumber === 3) {
  answer = 'outlook not so good';
} else if (randomNumber === 6) {
  answer = 'very doubtful';
} else {
  answer = 'error';
}

console.log("Question: ", question);
console.log("Answer:   ", answer);​
​
​
// --------------------------------------------
// EXERCISE 16: AIR QUALITY INDEX
// Check AQI ranges using logical operators
// 0-50: Good, 51-100: Moderate, etc.
// --------------------------------------------
​
​
​
​
// --------------------------------------------
// EXERCISE 17: ROCK PAPER SCISSORS
// Player picks 0, 1, or 2
// Computer picks random 0-2
// Determine winner using conditionals
// --------------------------------------------
