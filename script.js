// --> Nested loop

for (i = 1; i <= 3; i++) {
  console.log(`************Gym part - ${i}***********`);
  for (j = 1; j <= 5; j++) {
    console.log(`Do exercise number - ${j} in the morning`);
  }
}

//--> Reverse name
let nam = "Adiyaan";
const split = nam.split("");
console.log(split);

const reverse = split.reverse();
console.log(reverse);

const join = reverse.join("");
console.log(join);
// --> In one line
const reverseName = nam.split("").reverse().join("");
console.log(reverseName);

// --? Multiplier

const number = +prompt("Enter the number");

console.log(`${number}'s Multipication`);
for (i = 1; i < 11; i++) {
  console.log(`${number} x ${i} = ${number * i} `);
}
