// Triangle classification program
 
function classifyTriangle(a, b, c) {
  // Check valid triangle
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Not a valid triangle";
  }
 
  if (a === b && b === c) {
    return "Equilateral triangle";
  } else if (a === b || b === c || a === c) {
    return "Isosceles triangle";
  } else {
    return "Scalene triangle";
  }
}
 
// 👉 Change values here to test
const side1 = 4;
const side2 = 5;
const side3 = 3;
 
console.log(`Triangle type: ${classifyTriangle(side1, side2, side3)}`);
 