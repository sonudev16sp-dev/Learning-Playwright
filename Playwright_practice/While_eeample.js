// 1️. Print "Playwright" 5 times
let count1 = 1;
while (count1 <= 5) {
  console.log("Playwright");
  count1++;
}

// 2️. Print numbers from 1 to 10
let b = 1;
while (b <= 10) {
  console.log(b);
  b++;
}

// 3️. Print even numbers from 1 to 20
let c = 2;
while (c <= 20) {
  console.log(c);
  c += 2;
}

// 4️. Calculate sum of first 10 natural numbers
let count4 = 1;
let sumWhile = 0;
while (count4 <= 10) {
  sumWhile += count4;
  count4++;
}
console.log("Sum of first 10 natural numbers:", sumWhile);

// 5️. Print the multiplication table of 7
let count5 = 1;
while (count5 <= 10) {
  console.log(`7 x ${count5} = ${7 * count5}`);
  count5++;
}