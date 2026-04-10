// Playwright Result Summary Generator

function generateSummary(results) {

  let totalSteps = results.length;
  let passed = 0;
  let failed = 0;
  let skipped = 0;
  let totalDuration = 0;
  let failedSteps = [];

  for (let i = 0; i < results.length; i++) {

    let step = results[i];

    // Count based on status
    if (step.status === "passed") {
      passed++;

    } else if (step.status === "failed") {
      failed++;
      failedSteps.push(step.name);

    } else if (step.status === "skipped") {
      skipped++;
    }

    // Add duration
    totalDuration += step.durationMs;
  }

  // Convert failed steps array to comma-separated string
  let failedStepsList = failedSteps.length > 0 
    ? failedSteps.join(", ") 
    : "None";

  // Print Summary
  console.log("Total Steps:", totalSteps);
  console.log("Passed:", passed);
  console.log("Failed:", failed);
  console.log("Skipped:", skipped);
  console.log("Total Duration:", totalDuration + "ms");
  console.log("Failed Steps:", failedStepsList);
}


// Example Input
let results = [
  { name: "open login", status: "passed", durationMs: 400 },
  { name: "fill form", status: "failed", durationMs: 700 },
  { name: "submit", status: "skipped", durationMs: 0 }
];

// Run
generateSummary(results);