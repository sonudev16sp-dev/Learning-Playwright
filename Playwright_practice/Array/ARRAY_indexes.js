let nums = [10, 25, 30, 45];
console.log(nums);
nums.find(x => x > 20);  // 25,30,45 -> A -25

nums.findIndex(n => n > 20);

nums.findLast(n => n > 20); // 45 
nums.findLastIndex(n => n > 20);// 3
//slicing and combining arrays
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// slice(start, end) — returns new array, does NOT mutate actual -> ( start, end-1) . index = 0
//Don't give the end, it will automatically take from start to end. 
console.log(arr.slice(1, 3)); //
// Output: [2, 3, 4]
console.log(arr.slice(2)); // Output: [3, 4, 5]
console.log(arr.slice(1, 4));
console.log(arr.slice(-2)); // Output: [4, 5] (last 2 elements)
console.log(arr.slice(-4, -1)); // Output: [2, 3, 4] (from index -4 to -1)
let a = [1, 2];
let b = [3, 4];
let c= a.concat(b);
console.log(c); // Output: [1, 2, 3, 4]
// spread (modern way) - concatenation. (...)
let d = [...a, ...b];
console.log(d);
let s = ["pass", "fail", "skip"].join(" || ");
console.log(s);


let result = Array.isArray([1, 2, 3]);
let result1 = Array.isArray("a");
console.log(result);
console.log(result1);

// every & some
[80, 90, 85].every(s => s >= 90);  // true
[80, 60, 85].every(s => s >= 70);   // false
[30, 40, 50].some(s => s >= 50);    // true
[30, 40, 50].some(s => s >= 60);    // false


//sorting arrays
let names = ["John", "Jane", "Alice", "Bob"];
names.sort();
console.log(names); // Output: ["Alice", "Bob", "Jane", "John"] 

let marks =[100, 40, 40, 60];
marks.sort();
console.log(marks);
marks.sort((a, b) => a - b); // ascending
console.log(marks);
marks.sort((a, b) => b - a); // descending
console.log(marks);


let original = [1, 2, 3];

let copy1 = [...original]; // spread
 console.log(copy1);
let copy2 = original.slice();
 console.log(copy2);
let copy3 = Array.from(original);
console.log(copy3);
let copy4 = original.concat();
 console.log(copy4);
copy1.push(99);
console.log(original);
console.log(copy1);


// Deep copy (JSON)
let h = original; // Deep copy
original.push(99);
original.push(95);
copy1.push(56);
console.log(original);
console.log(copy1);

// array distruction
let [First, Second, Third, Fourth] = [85, 90, 78, 92];
console.log(Third);
console.log(Fourth);

//Task
let arr2 = [1, 2, 3];
let copy = arr2;
copy.push(4);
console.log(arr2.length);
console.log(copy);