const test = require("node:test");

let grid = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
console.log(grid[0][0])
console.log(grid[2][1]);
console.log(grid);
//Grid length
console.log(grid.length);   // 3 — number of rows
console.log(grid[0].length);
//first concider raw then column
console.log(grid[grid.length - 2][grid[0].length - 1]); 

console.log("----")

let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];
console.log(testMatrix.length); 
  // 3 — number of rows
for (let i = 0; i < testMatrix.length; i++) {

    for (let j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j] + " ")
    }
    console.log(" ");

}
console.log(" --------- ");

for (let row of testMatrix) {
    for (let cell of row) {
        process.stdout.write(cell + " ")
    }
    console.log();
}
console.log(" --------- ");


// forEach
testMatrix.forEach(row => {
    row.forEach(cell => process.stdout.write(cell + " "));
    console.log();
});

console.log(" --------- ");


//array functions
// 2D Arrays — Common Operations

let scores = [
    [85, 90, 78],   // student 0 , 253
    [60, 45, 70],   // student 1,  175
    [95, 88, 92]    // student 2, 275
];

let rowSums = scores.map(row => row.reduce((a, b) => a + b, 0));
console.log(rowSums);

console.log(" --------- ");
let suiteResults = [
    ["login-pass", "register-pass", "logout-pass"],  // Auth suite
    ["search-pass", "filter-fail", "sort-pass"],  // Search suite
    ["checkout-fail", "payment-pass", "confirm-pass"]   // Payment suite
];

for (let i = 0; i < suiteResults.length; i++) {
    for (let j = 0; j < suiteResults[i].length; j++) {
        if (suiteResults[i][j].includes("fail")) {
            console.log(suiteResults[i][j]);
        }
    }
}
console.log(" --------- ");
let execTimes = [
    [120, 340, 89, 450],  // dev
    [200, 410, 100, 520],  // staging
    [180, 390, 95, 490]   // prod
];
