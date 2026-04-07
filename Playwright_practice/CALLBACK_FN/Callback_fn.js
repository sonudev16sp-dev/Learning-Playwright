// Callback Functions
//A callback is a function passed as an argument to another function, to be called later.
function runTest(testName, callback) {
    let result = "pass";
    // 100 lines
    callback(testName, result)
}

function onComplete(name, result) {
    console.log(`${name} finished with: ${result}`);
}

runTest("loginTest", onComplete)

//example 2
function turn(Dir, second){
    let direction = "North";
    second(Dir,direction);
}
function stop(name, direction){
    console.log(`${name} Assigned direction is: ${direction}`);
}
turn("left", stop)


function NavigatorLogin(username, password, callback){
    console.log("Logging in with", username, password);
    callback(SubmitEvent);
}

function SubmitEvent(){
    console.log("Login successful, navigating to dashboard...");
}
NavigatorLogin("shital", "12345", SubmitEvent);