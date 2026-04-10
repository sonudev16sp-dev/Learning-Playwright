// Build Test Users from Arrays

function buildUsers(names, roles) {

  let users = [];

  for (let i = 0; i < names.length; i++) {

    // Normalize username: lowercase + replace spaces with _
    let username = names[i]
      .toLowerCase()
      .split(" ")
      .join("_");

    // Build email
    let email = username + "@playwrightbatch.com";

    // Assign role (safe check using ??)
    let role = roles[i] ?? "viewer";

    // Create user object
    users.push({
      username: username,
      email: email,
      role: role
    });
  }

  return users;
}


// Example Input
let names = ["Amit Kumar", "Neha Singh"];
let roles = ["admin", "viewer"];

// Run
let result = buildUsers(names, roles);
console.log(result);