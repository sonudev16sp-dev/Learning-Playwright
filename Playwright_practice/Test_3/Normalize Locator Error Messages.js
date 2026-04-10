// Normalize Locator Error Messages

function normalizeErrorMessage(rawMessage) {

  // Step 1: Normalize string
  let normalized = rawMessage
    .trim()                    // remove leading/trailing spaces
    .toLowerCase()             // convert to lowercase
    .replace(/\s+/g, " ");     // collapse multiple spaces

  // Step 2: Determine category (priority: TIMEOUT > LOCATOR > GENERAL)
  let category;

  if (normalized.includes("timeout")) {
    category = "TIMEOUT";
  } else if (normalized.includes("locator")) {
    category = "LOCATOR";
  } else {
    category = "GENERAL";
  }

  // Output
  console.log("Normalized:", normalized);
  console.log("Category:", category);
}


// Example Input
let rawMessage = " Locator not found after TIMEOUT ";

// Run
normalizeErrorMessage(rawMessage);