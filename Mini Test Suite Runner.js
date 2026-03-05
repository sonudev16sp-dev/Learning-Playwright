// ===============================
// Test Data (const)
// ===============================
const testCases = [
    { name: "Status code is 200", actual: 200, expected: 200, type: "strictEqual" },
    { name: "String loose equality", actual: "5", expected: 5, type: "looseEqual" },
    { name: "Response time under limit", actual: 450, expected: 500, type: "lessThan" },
    { name: "Token exists", actual: "abc123", expected: null, type: "truthy" },
    { name: "Data type is number", actual: 100, expected: "number", type: "typeCheck" }
];

// ===============================
// Global Counters (var)
// ===============================
var passCount = 0;
var failCount = 0;
var errorCount = 0;

// ===============================
// Execute Test Cases (for loop)
// ===============================
for (let i = 0; i < testCases.length; i++) {

    let tc = testCases[i];
    let result = false;
    let message = "";
    let testId = `TC-${String(i + 1).padStart(2, "0")}`;

    try {

        // Input validation using ?? operator
        let actual = tc.actual ?? "undefined";
        let expected = tc.expected ?? "undefined";

        // Switch for comparison type
        switch (tc.type) {

            case "strictEqual":
                result = (actual === expected);
                message = `${actual} === ${expected}`;
                break;

            case "looseEqual":
                result = (actual == expected);
                message = `${actual} == ${expected}`;
                break;

            case "typeCheck":
                result = (typeof actual === expected);
                message = `typeof ${actual} === ${expected}`;
                break;

            case "truthy":
                result = (!!actual === true);
                message = `Boolean(${actual}) === true`;
                break;

            case "lessThan":
                result = (actual < expected);
                message = `${actual} < ${expected}`;
                break;

            default:
                throw new Error("Invalid comparison type");
        }

        // Result handling using if-else
        if (result === true) {
            passCount++;
            console.log(` ${testId}: ${tc.name} → PASS (${message})`);
        } 
        else if (result === false) {
            failCount++;
            console.log(` ${testId}: ${tc.name} → FAIL (${message})`);
        }

    } catch (err) {
        errorCount++;
        console.log(`⚠️ ${testId}: ${tc.name} → ERROR (${err.message})`);
    }
}

// ===============================
// Consecutive Passes From Start (while loop)
// ===============================
let consecutivePass = 0;
let index = 0;

while (index < testCases.length) {
    if (index < passCount) {
        consecutivePass++;
    } else {
        break;
    }
    index++;
}

// ===============================
// Find First Failure (do...while)
// ===============================
let firstFailureIndex = -1;
let j = 0;

do {
    if (j >= testCases.length) break;

    // Re-evaluate strictly
    if (testCases[j].actual !== testCases[j].expected 
        && testCases[j].type === "strictEqual") {
        firstFailureIndex = j;
        break;
    }

    j++;

} while (j < testCases.length);

// ===============================
// Final Report
// ===============================
let total = testCases.length;
let passRate = ((passCount / total) * 100).toFixed(2);

let overallStatus = passCount === total 
    ? " PASSED" 
    : " FAILED";

console.log("\n===============================");
console.log(" TEST SUMMARY REPORT");
console.log("===============================");
console.log("Total Tests:", total);
console.log("Passed:", passCount);
console.log("Failed:", failCount);
console.log("Errors:", errorCount);
console.log("Pass Rate:", passRate + "%");
console.log("Consecutive Passes From Start:", consecutivePass);
console.log("First Strict Failure Index:", firstFailureIndex !== -1 ? firstFailureIndex : "None");
console.log("Overall:", overallStatus);