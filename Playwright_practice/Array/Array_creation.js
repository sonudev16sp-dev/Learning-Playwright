let Student_names = new Array("John", "Jane", "Doe");
console.log(Student_names); // Output: ["John", "Jane", "Doe"]
console.log(Student_names.length); // Output: 3
console.log(Student_names.at(-1)); // Output: "Doe"
Student_names[2] = "Smith";

console.log(Student_names); // Output: ["John", "Jane", "Smith"]
Student_names.push("Alice","DEMiAN");
console.log(Student_names);

 // Output: ["John", "Jane", "Smith", "Alice", "DEMiAN"]

 for (let i = 0; i < Student_names.length; i++) {
    console.log(Student_names[i]);
  }

  for (let i = 0; i < Student_names.length; i++) {
    if(Student_names[i] === "DEMiAN")
    console.log(Student_names[i]);
    break;

  }
  //add to beginning of array
Student_names.unshift("Riya");
console.log(Student_names); // Output: ["Riya", "John", "Jane", "Smith", "Alice", "DEMiAN"]
//remove from end of array
Student_names.shift(2);
console.log(Student_names);
//remove the element at index 1 and 2 
Student_names.splice(1,2);
console.log(Student_names); // Output: ["Riya", "John", "Jane", "Smith", "Alice"]

Student_names.push("Alice1","DEMiAN2");
for (let i = 0; i < Student_names.length; i++) {
    console.log(Student_names[i]);
    if(Student_names[i] === "DEMiAN"){
        Student_names.splice(i,1);}}

    
console.log(Student_names); 

// Output: ["Riya", "John", "Jane", "Smith", "Alice"]

// remove a specific element by value (first match):
//let students1 = ["John", "Jane", "Doe", "Alice"];
function removeElement(arr, value) {
  const index = arr.indexOf(value);
  if (index >= 0) {
    arr.splice(index, 2);
  }
  return arr;
}

let students1 = ["John", "Jane", "Doe", "Alice", "Doeb"];
console.log("before", students1); // Output: ["John", "Jane", "Doe", "Alice"]
removeElement(students1, "Doe");
console.log("after", students1); // Output: ["John", "Jane", "Alice"]

// remove all occurrences of a value:


//find the index of an element in an array
let browser = ["Chrome", "Firefox", "Edge", "Safari"];
browser.includes("Chrome"); // true
browser.includes("skit");  
console.log(browser.indexOf("Edge"));

 // Output: 1 (found at index 1)
 //search ffrom the end of the array
 console.log(browser);
console.log(browser.lastIndexOf("Edge")); // Output: 1 (found at index 1)
let nums = [10, 25, 30, 45];
nums.find(x => x > 20); 
 // 25,30,45 -> A -25

// includes — returns boolean
     