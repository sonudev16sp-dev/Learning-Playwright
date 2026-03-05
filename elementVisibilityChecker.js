// Element Visibility Checker

// Change values to test different scenarios
let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

let status;
let action;

// Determine Status
if (isPresent === true && isDisplayed === true && isEnabled === true) {
  status = "READY";
  action = "Safe to interact with the element.";

} else if (isPresent === true && isDisplayed === true && isEnabled === false) {
  status = "DISABLED";
  action = "Element is visible but disabled. Wait for enable state or check preconditions.";

} else if (isPresent === true && isDisplayed === false) {
  status = "HIDDEN";
  action = "Element is present but hidden. Verify UI state or wait for visibility.";

} else {
  status = "NOT FOUND";
  action = "Element not found in DOM. Check locator or page load.";
}

// Determine Severity using Ternary Operator
let severity = (isPresent === false)
  ? "CRITICAL"
  : (isDisplayed === false || isEnabled === false)
    ? "WARNING"
    : "OK";

// Print Result
console.log("Status   :", status);
console.log("Severity :", severity);
console.log("Action   :", action);