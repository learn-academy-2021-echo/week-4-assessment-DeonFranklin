// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

var colors1 = ["purple", "blue", "green", "yellow", "pink"];
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron",
];
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("chopAndSwap", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
    expect(chopAndSwap(colors1)).toEqual(["blue", "green", "yellow", "pink"]);
    expect(
      chopAndSwap([
        "chartreuse",
        "indigo",
        "periwinkle",
        "ochre",
        "aquamarine",
        "saffron",
      ]).toEqual(["indigo", "periwinkle", "ochre", "aquamarine", "saffron"])
    );
  });
});
// I feel like I should revisit this challenge and get a better understanding of jest as my understanding it not any where near w
// b) Create the function that makes the test pass.
const chopAndSwap = (array) => {
  // used .shift() to remove the first element of the array.
  arrChop = array.shift();
};

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6];
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24];
// Expected output: [5, 109]

describe("minMax", () => {
  it("takes array of numbers and returns array of the minimum and maximum numbers in order.", () => {
    expect(minMax(nums1)).toEqual([-8, 90]);
    // I do not understand why the arguments are not executing.
    expect(minMax(nums2)).toEqual([5, 109]);
  });
});
// Expected1output: [-8, 90]
const minMax = (array) => {
  let max = array[0];
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    } else if (array[i] < min) {
      min = array[i];
    }
  }
  let result = ["min: " + min, "max: " + max];
  return result;
// I noticed the issue I am having most derives from creating the functions after creating the test.
  return (minMax(numArr1));
  return (minMax(numArr2));
};
//Though i feel the test and function have been properly implemented, I am having issues with the received/expected arguments in the test.

// b) Create the function that makes the test pass.

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

let testArray1 = [3, 7, 10, 5, 4, 3, 3];
let testArray2 = [7, 8, 2, 3, 1, 5, 4];
const resArray = testArray1.concat(testArray2);

// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
//created noDupes function 
describe("noDupes", () => {
  it("takes in two arrays as arguments and returns one array with no duplicates", () => {
    expect(noDupes(resArray)).toEqual([3, 7, 10, 5, 4, 8, 2, 1]);
  });
});

// b) Create the function that makes the test pass.
//created noDupes function
function noDupes(array) {
  //set a for loop to iterate through the arrays
  var newArr = [];
  for (var i = 0; i < array.length; i++) {
    if (newArr.indexOf(array[i]) === -1) {
      //used .push to to add value to array.
      newArr.push(array[i]);
    }
  }
  return newArr;
  //I set an additional array to check my function them commented it out.
  //   let numsArray = [[3, 7, 10, 5, 4, 3, 3, 7, 8, 2, 3, 1, 5, 4]];
  let finalArray = noDupes(resArray);
  return finalArray;
}
