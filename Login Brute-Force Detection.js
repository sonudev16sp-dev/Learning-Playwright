// Fixed credentials (const)
const VALID_EMAIL = "admin@testingacademy.com";
const VALID_PASSWORD = "Test@1234";
const MAX_ATTEMPTS = 3;

// Login attempts (password attempts only for simplicity)
let loginAttempts = ["wrong", "wrong", "wrong", "Test@1234"];

// Global strike counter (var)
var strikeCount = 0;

let index = 0;
let isLocked = false;

do {

    let currentPassword = loginAttempts[index];
    let attemptNumber = index + 1;

    // If already locked, reject immediately
    if (isLocked === true) {
        console.log(`Attempt ${attemptNumber}: 🔒 ACCOUNT LOCKED - Rejected`);
    } 
    else {

        // Validate credentials using strict equality and logical AND
        if (VALID_EMAIL === "admin@testingacademy.com" && currentPassword === VALID_PASSWORD) {
            console.log(`Attempt ${attemptNumber}: ✅ SUCCESS - Login successful`);
            break; // stop after successful login
        } 
        else {
            strikeCount++;
            console.log(`Attempt ${attemptNumber}: ❌ FAILED - Strike ${strikeCount}/${MAX_ATTEMPTS}`);

            // Lock account if max attempts reached
            if (strikeCount === MAX_ATTEMPTS) {
                isLocked = true;
                console.log("🚨 ACCOUNT LOCKED");
            }
        }
    }

    index++;

} while (index < loginAttempts.length);