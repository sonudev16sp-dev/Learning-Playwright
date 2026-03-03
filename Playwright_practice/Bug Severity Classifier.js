// Input values
let bugTitle = "Checkout page crashes on applying coupon";
let frequency = "always";   // always | often | rarely
let impact = "blocker";     // blocker | major | minor

let severity = "";

// Nested if-else classification
if (frequency === "always") {

    if (impact === "blocker") {
        severity = "P0 - Critical: Stop release immediately";
    } 
    else if (impact === "major") {
        severity = "P1 - High: Fix before release";
    } 
    else if (impact === "minor") {
        severity = "P2 - Medium: Fix in current sprint";
    }

} 
else if (frequency === "often") {

    if (impact === "blocker") {
        severity = "P1 - High: Fix before release";
    } 
    else if (impact === "major") {
        severity = "P2 - Medium: Fix in current sprint";
    } 
    else if (impact === "minor") {
        severity = "P3 - Low: Can be scheduled";
    }

} 
else if (frequency === "rarely") {

    if (impact === "blocker") {
        severity = "P2 - Medium: Fix in current sprint";
    } 
    else if (impact === "major") {
        severity = "P3 - Low: Can be scheduled";
    } 
    else if (impact === "minor") {
        severity = "P4 - Very Low: Monitor and fix later";
    }

} 
else {
    severity = "Invalid input provided.";
}

// Output
console.log("Bug Title:", bugTitle);
console.log("Frequency:", frequency);
console.log("Impact:", impact);
console.log("Severity:", severity);