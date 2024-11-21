//  Exercise 1: Define an empty array

const foods = [];

console.log('Exercise 1 Result:', foods);

//  Exercise 2: Add strings to the array

foods.push("pizza", "cheeseburger");

console.log('Exercise 2 Result:', foods);

// Exercise 3: Insert at the beginning

foods.unshift('taco')

console.log('Exercise 3 result:', foods);

//  Exercise 4: Access an arry element

const favFood = foods[1];

console.log('Exercise 4 results:', favFood);

//  Exercise 5: Insert an element between two others

foods.splice(2, 0, "tofu");

console.log('Exercise 5 Result:', foods);

// Exercise 6: Replace elements

foods.splice(1, 1, "sushi", "cupcake");

console.log("Exercise 6 Results:", foods)

// Exercise 7: Using the slice() method

const yummy = foods.slice(1, 3);

console.log("Exercise 7 Results:", yummy);

//  Exercise 8: Finding an index

const soyIdx = foods.indexOf("tofu");

console.log('Exercise 8 Result:', soyIdx);

// Exercise 9: Joining elements

const allFoods = foods.join(' => ');

console.log('Exercise 9 Results:', allFoods);

//  Exercise 10: Check for an element

const hasSoup = foods.includes("soup");

console.log("Exercise 10 Result:", hasSoup);

//  Exercise 11: Odd numbers form an arry

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const odds = [];

for (let num of nums) {
    if (num % 2 !== 0 ) {
        odds.push(num);
    }
}

console.log('Exercise 11 Result:', odds);

//  Exercise 12: FizzBuzz with arrays

const fizz = [];
const buzz = [];
const fizzbuzz = [];

for (let num of nums) {
    if (num % 3 === 0) {
        fizz.push(num);
    } if (num % 5 == 0) {
        buzz.push(num);
    } if (num % 3 === 0 && num % 5 === 0) {
        fizzbuzz.push(num);
    }
}

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

//  Exercise 13: Retrieve the last array

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];
const numList = numArrays[numArrays.length -1]

console.log('Exercise 13 result:', numList);

// Exercise 14: Accessing within nested arrays

const num = numArrays[2][1]

console.log('Exercise 14 result:', num);

// Exercise 15: Nested array sum

let total = 0;

for (let numRow = 0; numRow < numArrays.length; numRow++){
    // console.log(numArrays[numRow]);
    for (let numColumn = 0; numColumn < numArrays[numRow].length; numColumn++){
        // console.log(numArrays[numRow][numColumn]);
        total = total + numArrays[numRow][numColumn];
    }
}

console.log('Exercise 15 result:', total);