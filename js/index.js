// Iteration 1: Names and Input

let hacker1 = "Brett";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Enrique";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it is ${hacker1.length}`)
} else if (hacker2.length > hacker1.length) {
  console.log(`The navigator has the longest name, it is ${hacker2.length}`)
} else {
  console.log('Both names are the same length');
}

// Iteration 3: Loops

let hacker1UpperCased = hacker1.toUpperCase();

let hacker1Array = [];

for (let i=0; i < hacker1UpperCased.length; i++) {
  hacker1Array.push(hacker1UpperCased[i]);
};

let hacker1Output = hacker1Array.join(' ');

console.log(hacker1Output);

let hacker2Array = [];

for (let i=hacker2.length; i > 0; i--) {
  hacker2Array.push(hacker2[i - 1]);
};

let hacker2Output = hacker2Array.join('');

console.log(hacker2Output);

let statement1 = "The driver's name goes first"
let statement2 = "The navigator's name is definitely first"

if (hacker1[0] < hacker2[0]) {
  console.log(statement1);
} else if (hacker1[0] > hacker2[0]) {
  console.log(statment2);
} else {
  for (let i=1; i<hacker1.length; i++) {
    if (hacker1[i] === hacker2[i]) {
      continue;
    } else if (hacker1[i] < hacker2[i]) {
      console.log(statement1);
    } else if (hacker1[i] > hacker2[i]) {
      console.log(statment2)
    } else {
      console.log('The names are the same');
    }
  }
};


