// Browser Execution Planner

function planExecution(allBrowsers, blockedBrowsers) {

  let runnable = [];
  let blocked = [];

  for (let i = 0; i < allBrowsers.length; i++) {

    let browser = allBrowsers[i];

    // Check if browser is blocked
    if (blockedBrowsers.includes(browser)) {
      blocked.push(browser);
    } else {
      runnable.push(browser);
    }
  }

  // Build execution plan string
  let runList = runnable.length > 0 ? runnable.join(", ") : "None";
  let skipList = blocked.length > 0 ? blocked.join(", ") : "None";

  let plan = `Run on: ${runList} | Skip: ${skipList}`;

  return {
    runnable: runnable,
    blocked: blocked,
    plan: plan
  };
}


// Example Input
let allBrowsers = ["chromium", "firefox", "webkit"];
let blockedBrowsers = ["firefox"];

// Run
let result = planExecution(allBrowsers, blockedBrowsers);
console.log(result);