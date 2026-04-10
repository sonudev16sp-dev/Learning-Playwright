// Reusable Step Runner with Callback

function runStep(stepName, actionFn) {

  console.log(`▶️ Starting Step: ${stepName}`);

  try {
    // Execute callback
    let result = actionFn();

    // Success case
    return {
      stepName: stepName,
      passed: true,
      message: result ?? "Step executed successfully"
    };

  } catch (error) {

    // Failure case
    return {
      stepName: stepName,
      passed: false,
      message: error.message
    };
  }
}


// Example 1: Success
let step1 = runStep("open dashboard", () => "Page loaded");
console.log(step1);

// Example 2: Failure
let step2 = runStep("click button", () => {
  throw new Error("Button not found");
});
console.log(step2);