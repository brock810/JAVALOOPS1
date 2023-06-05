console.log("Hello World!\n==========\n");

// Exercise 1 Section
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        continue;
    } else {
            console.log(i);
        }
    }

// Exercise 2 Section
for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log(i , "FIZZBUZZ");
    } else if (i % 5 == 0) {
        console.log(i, "BUZZ");
    } else if (i % 3 == 0) {
        console.log(i, "FIZZ");
    }
}

// Exercise 3 Section 
let i = 0;
while (i < 100) {
if (i % 2 === 0) {
i++;
continue;
} else {
console.log(i);
}
i++;
}

// do/while loop
let w = 0;
do {
if (w % 2 === 0) {
w++;
continue;
} else {
console.log(w);
}
w++;
} while (w < 100);


// Section - while loop
let y = 1;
while (y <= 100) {
if (y % 15 === 0) {
console.log(y, "FIZZBUZZ");
} else if (y % 5 === 0) {
console.log(y, "BUZZ");
} else if (y % 3 === 0) {
console.log(y, "FIZZ");
}
y++;
}

// Section do/while loop
let x = 1;
do {
if (x % 15 === 0) {
console.log(x, "FIZZBUZZ");
} else if (x % 5 === 0) {
console.log(x, "BUZZ");
} else if (x % 3 === 0) {
console.log(x, "FIZZ");
}
x++;
} while (x <= 100);

//Exercise 4 Section

let numberToFind = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let i = 1; i <= n; i++) {
    if (i === numberToFind) {
        console.log(`Found ${numberToFind}!`);
        break;
    }
    if (i === n) {
        console.log(`Did not find ${numberToFind} within 1-${n}.`);
    }
}

//Exercise 5 Section

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
let end = Math.round(Math.random() * (1000 - 100) + 100);

for (let i = start; i <= end; i++) {
  if (i % (fizzDivisor * buzzDivisor) === 0) {
    console.log(i, "FIZZBUZZ");
  } else if (i % fizzDivisor === 0) {
    console.log(i, "FIZZ");
  } else if (i % buzzDivisor === 0) {
    console.log(i, "BUZZ");
  }
}
