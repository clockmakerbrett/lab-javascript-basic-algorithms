// Iteration 1: Names and Input

let hacker1 = "Brett";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Enrique";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it is ${hacker1.length}`);
} else if (hacker2.length > hacker1.length) {
  console.log(`The navigator has the longest name, it is ${hacker2.length}`);
} else {
  console.log("Both names are the same length");
}

// Iteration 3: Loops

let hacker1UpperCased = hacker1.toUpperCase();

let hacker1Array = [];

for (let i = 0; i < hacker1UpperCased.length; i++) {
  hacker1Array.push(hacker1UpperCased[i]);
}

let hacker1Output = hacker1Array.join(" ");

console.log(hacker1Output);

let hacker2Array = [];

for (let i = hacker2.length; i > 0; i--) {
  hacker2Array.push(hacker2[i - 1]);
}

let hacker2Output = hacker2Array.join("");

console.log(hacker2Output);

if (hacker1.localeCompare(hacker2, "en", { sensitivity: "base" }) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else if (hacker1.localeCompare(hacker2, "en", { sensitivity: "base" }) < 0) {
  console.log("The driver's name goes first.");
} else {
  console.log("What?! You both have the same name?");
}
