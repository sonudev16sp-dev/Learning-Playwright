// Test Case Result Counter

let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passed = 0;
let failed = 0;
let skipped = 0;

// Loop through test results
for (let i = 0; i < testResults.length; i++) {

  if (testResults[i] === "pass") {
    passed++;

  } else if (testResults[i] === "fail") {
    failed++;

  } else if (testResults[i] === "skip") {
    skipped++;
  }
}

// Calculate totals
let totalTests = testResults.length;
let passRate = ((passed / totalTests) * 100).toFixed(2);

// Determine verdict
let verdict;

if (failed === 0) {
  verdict = "All tests passed. Ready for release.";

} else if (failed <= 2) {
  verdict = "Minor failures. Review before release.";

} else {
  verdict = "Major failures. Block release.";
}

// Print Test Report
console.log("----- TEST EXECUTION REPORT -----");
console.log("Total Tests :", totalTests);
console.log("Passed      :", passed);
console.log("Failed      :", failed);
console.log("Skipped     :", skipped);
console.log("Pass Rate   :", passRate + "%");
console.log("VERDICT     :", verdict);