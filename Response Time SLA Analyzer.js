// Input Data
let responseTimes = [120, 230, 450, 510, 180, 620];
const SLA_LIMIT = 500;

let index = 0;
let totalRequests = responseTimes.length;

let minResponse = responseTimes[0];
let maxResponse = responseTimes[0];
let sum = 0;
let breachCount = 0;

// While loop to analyze response times
while (index < totalRequests) {

    let currentTime = responseTimes[index];

    // Min tracking using comparison operator
    if (currentTime < minResponse) {
        minResponse = currentTime;
    }

    // Max tracking using comparison operator
    if (currentTime > maxResponse) {
        maxResponse = currentTime;
    }

    // Sum calculation for average
    sum += currentTime;

    // SLA breach check
    if (currentTime > SLA_LIMIT) {
        breachCount++;
    }

    index++;
}

// Average calculation
let averageResponse = sum / totalRequests;

// Breach percentage calculation
let breachPercentage = ((breachCount / totalRequests) * 100).toFixed(2);

// Overall status
let overallStatus = breachCount > 0 
    ? "❌ SLA VIOLATED" 
    : "✅ SLA MET";

// Output Report
console.log("Total Requests:", totalRequests);
console.log("Min Response:", minResponse + "ms");
console.log("Max Response:", maxResponse + "ms");
console.log("Average Response:", averageResponse.toFixed(2) + "ms");
console.log("SLA Breaches:", breachCount + " (" + breachPercentage + "%)");
console.log("Overall Status:", overallStatus);