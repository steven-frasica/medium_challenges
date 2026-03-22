// MEDIUM CHALLENGES

/* 

  1. Falsy or Truthy?
    Given two values, return the first one if it is falsy, otherwise return the second one.
    Double bang operators !! convert a value to a boolean, for ex. 0 becomes false, 1 becomes true, null becomes false, "hello" becomes true
*/

function falsyValOrTruthyVal(elem1, elem2) {
  return !elem1 ? elem1 : elem2;
}

// console.log(falsyValOrTruthyVal(0, 3))
// returns 0 bc it is false

const falsyOrTruthy = (val1, val2) => (!!val1 ? val2 : val1);
const falsyValueOrTruthyValue = (val1, val2) => (!val1 ? val1 : val2);

// console.log('it worked')
// console.log('1, 2', falsyOrTruthy(1, 2))
// console.log('hello, 2', falsyOrTruthy('hello', 2))
// console.log(falsyOrTruthy(true, 'Dog'))

// console.log('falsyValueOrTruthyValue 0, 2', falsyValueOrTruthyValue(0, 2))
// console.log('falsyValueOrTruthyValue 1, 2', falsyValueOrTruthyValue(1, 2))

/* 

  2. Return length of any given array

*/

const arrLength = (arr) => arr.length;

function arrayLength(arr) {
  return arr.length;
}

// console.log("arrayLength", arrayLength([1, 2]))

// console.log('arrLength', arrLength([1, 2, 3]))
// console.log('arrLength', arrLength([]))

/* 

  3. Get the last element in an array
     Given an array, return the last element
     array[array.length - 1] access last element
     or ES2022 at() method
     const lastItem = arr.at(-1);
*/

const lastElement = (arr) => arr[arr.length - 1];

// console.log(lastElement([1, 2, 3, 4, 5]))
// console.log(lastElement([1]))
// console.log(lastElement([2, 48, 28]))

/* 

  4. Find the sum of an array
Given an array, return the sum of every element
for...of loop introduced in ES6+
*/

function arraySum(arr) {
  let sumArray = 0;
  for (let i = 0; i < arr.length; i++) {
    sumArray += arr[i];
  }
  return sumArray;
}

function sumArray(arr) {
  let sumArray = 0;
  for (num of arr) {
    sumArray += num;
  }
  return sumArray;
}

// console.log('sumArray', sumArray([1, 2, 4]))

// console.log("arraySum", arraySum([]))
// console.log("arraySum", arraySum([1, 2, 3]))
// console.log("arraySum", arraySum([0, -5, -10]))

/* 

  5. Add up the numbers from a single number
     Given a number, add up all the numbers from one to the number that is given. E.g. An input of 4 will give you 1 + 2 + 3 + 4 = 10

*/

function progressiveSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

// console.log('progressiveSum 600', progressiveSum(600))
// console.log('progressiveSum 3', progressiveSum(3))

/* 

  6. Calculate time in mm:ss format
     example 66 seconds -> 01:06
     parseInt or Math.floor(seconds / 60)
     timerMinutes.toString().length
*/

function calculateTime(seconds) {
  let timerMinutes = parseInt(seconds / 60);
  let timerSeconds = parseInt(seconds % 60);
  if (timerMinutes.toString().length === 1) {
    timerMinutes = "0" + timerMinutes;
  }
  return `${timerMinutes}:${timerSeconds}`;
}

// console.log(calculateTime(500));

/* 

  7. Find the largest number
     Given an array of numbers, return the largest number of that array

*/

function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// console.log('getMax', getMax([1, 4, 3, 6, 5]))
// console.log('getMax', getMax([11, 4, 3, -6, 5]))

/* 

  8. Reverse String
     can use .split('') on a str to turn it into an array, then .reverse() on the array

*/

function reverseString(str) {
  let reversedString = "";
  console.log(str.length - 1)
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i]
  }
  return reversedString;
}

console.log("reverseString", reverseString("Steven"));

function reverseTheString(str) {
  let revStr = "";
  for (let i = 0; i < str.length; i++) {
    revStr = str[i] + revStr;
  }
  return revStr;
}

function reverseArrayFromString(str) {
  let arr = str.split('')
  revArr = arr.reverse()
  console.log(revArr);
  revStr = revArr.join('');
  console.log(revStr);
  return revStr
}

// cleanest way
const revStringFromArray = str => str.split('').reverse().join('')

console.log(revStringFromArray('pokemon'))

console.log('reverseArrayFromString', reverseArrayFromString('greetings'))

console.log(reverseTheString('hello'))
console.log(reverseTheString('This is cool'))

/* 

  9. Turn every element in an array into 0
     Given an array of elements, return the same length array filled with 0's

*/

function convertToZeros(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 0
  }
  return arr
}

console.log(convertToZeros([1, 22]))


// can set = to 0 or can multiply by 0 to equal 0
function cToZ(arr) {
  let zeroArr = arr.map((element) => element = 0)
  return zeroArr;
  
}

function cToZShort(arr) {
  let zeroArr = arr.map(element => 0)
  return zeroArr;
}

console.log('cToZShort', cToZShort([1, 2, 4, 5, 6, 6]))

console.log(cToZ([1, 2, 4]))

// ****** Not common but will be used in a project ******
function convertToZeros2(arr) {
  return new Array(arr.length).fill(0)
}

console.log(convertToZeros2([1, 2, 3]))

/* 

  10. Filter out all the apples
  Given an array of fruits, if it is an apple, remove it from the array

*/

fruitArr1 = ['Apple', 'Banana', 'Orange', 'Apple']
fruitArr2 = ['Kiwi', 'Apple', 'Mango', 'Apple', 'Apple']

function removeApples(arr) {
  return arr.filter((element) => {
    return element !== 'Apple'
  })
};

console.log('removeApples', removeApples(fruitArr1));
console.log('removeApples', removeApples(fruitArr2));

function removeApples2(arr) {
  noApples = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 'Apple')
    noApples.push(arr[i])
  }
  return noApples
}

console.log('removeApples2', removeApples2(fruitArr1))

/* 

  11. Filter out all the falsy values
  given an array, only return the truthy values

*/

fTarray = ['' , null, undefined, '0', 0, []]
fTarray2 = ['a' , true, undefined, '0', false, []]


// For Loop
function filterOutFalsy(arr) {
    let truthyArr = []
  for (i = 0; i < arr.length; i++) {
    if (!!arr[i]) {
      truthyArr.push(arr[i])
    }
  }
  return truthyArr
}

console.log('filterOutFalsy', filterOutFalsy(fTarray))
console.log('filterOutFalsy', filterOutFalsy(fTarray2))

// filter method
const filterFalsy = arr => arr.filter(element => !!element)

console.log('filterFalsy', filterFalsy(fTarray))
console.log('filterFalsy', filterFalsy(fTarray2))

const convertToBoolean = arr => arr.map(element => !!element)

console.log('convertToBoolean', convertToBoolean(fTarray))