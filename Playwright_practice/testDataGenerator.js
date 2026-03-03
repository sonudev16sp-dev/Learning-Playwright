// Test Data Generator

// Global counter using var (function/global scoped)
var userCounter = 1;

// Fixed values using const
const DOMAIN = "testingacademy.com";
const ROLES = ["admin", "editor", "viewer", "tester", "manager"];

function generateUsers(totalUsers) {

  for (let i = 0; i < totalUsers; i++) {

    // Unique ID (USR-0001 format)
    let formattedId = String(userCounter).padStart(4, "0");
    let userId = `USR-${formattedId}`;

    // User details
    let name = `TestUser_${userCounter}`;
    let email = `testuser${userCounter}@${DOMAIN}`;

    // Role cycling
    let role = ROLES[i % ROLES.length];

    // Every 3rd user inactive
    let status = (userCounter % 3 === 0) ? "INACTIVE" : "ACTIVE";

    // Print user
    console.log(
      `${userId} | ${name} | ${email} | ${role} | ${status}`
    );

    userCounter++;
  }
}

// Example: Generate 8 users
generateUsers(8);