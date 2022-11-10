//! PROBLEM 1 : In 3-4 sentences, please explain what Big O Notation is
// Big 0 Notation is a way to determine the efficiency of your code as you deal with data. Big O is there to determine the time complexity and space complexity of the computational ability of your code. It focuses on the worst case scenario or where the most computations are, as most complexities like constant and linear does not really affect the performance of your code, and it only focuses on the worst scenario because we want to change it and stay between linear and constant only.
//! PROBLEM 2 : For each of the time complexities shown below:
//? NAME THE COMPLEXITY

//? O(1)
//Contant Time Complexity
//RANKED AS 1
//This code is not affected by how big the data is. This means that amount of time the code will run is the same and is not dependent on the data size.
// example
const song = ["araw "];
song.push("gabi");

//? O(log n)
//Logarithmic Time Complexity
//RANKED AS 2
//This code is partly affected with the size of the data but only concerns the half of it. When doing iterations or step, the input size decreases along the run time of your code.
//example
const arr = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23,
];
const checkEvenOrOddRandomly = (arr) => {
    for (let i = 1; i < arr.length; i *= 2) {
        if (arr[i] % 2 === 0) {
            console.log(`${arr[i]} is even`);
        } else {
            console.log(`${arr[i]} is odd`);
        }
    }
};
console.log(checkEvenOrOddRandomly(arr));

//? O(n)
//Linear Time Complexity
//RANKED AS 3
//The run time of the code is affected by the data size of the input. When a function iterates or runs, it runs linear from the data size its given, so if the size is small you will get less runtime, and more run time if the data is bigger.
//example
const checkEvenOrOdd = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(`${arr[i]} is even`);
        } else {
            console.log(`${arr[i]} is odd`);
        }
    }
};

console.log(checkEvenOrOdd(arr));

//? O(n^2)
//Quadratic Time Complexity
//RANKED AS 4
//The run time of the code is affected by the data size of the input but also how the code is built. When there is nested loops then that is what makes it a quadratic time as you double the way you process your code.
// example
const arr1 = [1, 2, 3, 4, 5];

const checkEven = (arr1) => {
    console.log(`THIS NUMBERS ARE ALL EVEN`);
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            sum = arr1[i] + arr1[j];
            if (sum % 2 === 0) {
                console.log(`The sum of ${arr1[i]} and ${arr1[j]}.`);
            }
        }
    }
};

console.log(checkEven(arr1));

//? O(n!)
//Factorial Time Complexity
//RANKED AS 5
// The run time when doing this kind of code grows exponentially the same as the data grows. This is a horrible way of building your algorithm and it will affect you and the user in the long run.
// example
const factorial = (n) => {
    let num = n;

    if (n === 0) return 1;
    for (let i = 0; i < n; i++) {
        num = n * factorial(n - 1);
    }
    return num;
};

console.log(factorial(2));

//! PROBLEM 3: Name 3 reasons why we care about Big O and we care about code performance
// Big 0 Notation is a way to determine the efficiency of your code and how will it affect users and computers on a daily basis. Big O Notation is important as it promotes code competency(3) and making your code much more manageable and scalable (1), in this way you can have much better performances in your code which helps saves time(2) for you and also the user.

//! PROBLEM 4: What is the problem of using a time method such as performance.now() to measure how “fast” a code runs on our machines.
// The problem with using a time method like the one mentioned above is that every computing machine is different from each other. The performance of the codes differ because some computers are fast and some are not.

//! PROBLEM 5: : Given the following piece of code:
const someFunction = (arr1) => {
    arr1.push(1).pop(); //O(1) + O(1) = O(1)

    for (let i = 0; i < arr1.length; i++) {
        //O(n)
        console.log("do something 2");
    }

    for (let i = 0; i < arr1.length; i++) {
        //O(n)
        console.log("do something 3");
    }

    for (let i = 0; i < arr1.length; i++) {
        //O(n)
        for (let i = 0; i < arr1.length; i++) {
            //O(n)
            console.log("do something 3"); //O(1)
        }
    } // O(n) + O(n) + O(1) = O(1n^2) --> O(n^2)
};
//For this function it had one constant, two for loops, and a nested for loop. So we have,
//? the TOTAL time complexity which is
// 1 + n + n + n^2

//? the CONSILIDATED time complexity which is
// n^2

//! PROBLEM 6: : Given the following piece of code:

const someFunction1 = (arr1) => {
    let sum = arr1[1] + arr[2]; //O(1) + O(1) = O(1)

    while (condition) {
        //O(n)
        sum = arr[5] + arr[7]; // O(1)
    } // O(n) * O(1) == O(1n) --> O(n)

    for (let i = 0; i < arr1.length; i++) {
        //O(n)
        for (let i = 0; i < arr1.length; i++) {
            //O(n)
            for (let i = 0; i < arr1.length; i++) {
                //O(n)
                console.log("do something 3"); // O(1)
            }
        }
    } //O(n) * O(n) * O(n) * O(1) = O(1n^3) --> O(n^3)
};
//For this function it had one constant, one while loop with a constant inside, and a nested 3 for loops. So we have,
//? the TOTAL time complexity which is

// O(1) + (O(n) * O(1)) + (O(n){O(n) [O(n) * O(1)]})
// O(1) + O(n) + O(n^3)

//? the CONSILIDATED time complexity which is
// n^3

//! PROBLEM 6: Please explain in 3-5 sentences why we can ignore constants and consolidate our time complexities
//The reason why we consolidate our time complexities is because we are using Big O notations, and the reason to use Big O notations in the first place is to find the worst case scenario in your algorithm. We ignored the constants because they do not affect our time complexity that much because the constants are not affected even if the data goes big. We consolidate our time complexities to find the certain block of code that are much more complex and the part of our algorithm where the code is bad. This can help in further making your algorithm much more efficient and are a helpful way into scaling your project.

//! PROBLEM 8: In 2-3 sentences, please explain what space complexity is and why we care
// Space Complexity of an algorithm/code concerns with the amount of memory space required from a certain block of code execution and it is also dependent from the input size given and space complexity is a way to determine how much memory can we allocate from our algorithm. We can have constant space complexity wherein the line of code doesn't contain any loops or recursions but only has contants like number,booleans, undefined, and null. We also have linear space complexity wherein the program will eventually have loops in it.

//! PROBLEM 9: Given the following data TYPES, label what the space complexity is for each one:
//? Boolean
// constant space complexity

//? Undefined
// constant space complexity

//? Null
// constant space complexity

//? Numbers
// constant space complexity

//? String
// linear space complexity

//? Array
// linear space complexity

//? Object
// linear space complexity

//! PROBLEM 10: Give two reasons when you should use a array and when you should use a object.
// One reason that you should use an array is that you could access arrays easily because you have more access to elements by just using js functions
// Second reason that you should use array is when you need order in your data. Again, since there are already a lot of js functions that could access and modify an array, it is much more easier to have order in your data.

//!PROBLEM 11: : Given the following object methods, label what the TIME complexity is for each one:

const obj = {
    name: "tony",
}; //? LINEAR TIME COMPLEXITY

//inserting
obj.age = 44; //? CONSTANT TIME COMPLEXITY

//removing
delete obj.age; //? CONSTANT TIME COMPLEXITY

//searching 1
obj.hasOwnProperty["name"]; //? LINEAR TIME COMPLEXITY

//searching 2
for (const prop in obj) {
    console.log(obj[prop]);
} //? LINEAR TIME COMPLEXITY

//accessing
obj.age; //44 //? CONSTANT TIME COMPLEXITY

//retrieving keys
Object.keys(obj); //? LINEAR TIME COMPLEXITY

//retrieving values
Object.values(obj); //? LINEAR TIME COMPLEXITY

//!PROBLEM 12: : Given the following array methods, label what the TIME complexity is for each one:
const arr2 = [1, 2, 3, 4, 5, 6, 7];

//inserting 1
arr2.push(8); //? CONSTANT TIME COMPLEXITY

//inserting 2
arr2.unshift(0); //? LINEAR TIME COMPLEXITY

//removing 1
arr2.pop(); //? CONSTANT TIME COMPLEXITY

//removing 2
arr2.shift(); //? LINEAR TIME COMPLEXITY

//searching 1
const findNumber = arr2.find((num) => num === 2); //? LINEAR TIME COMPLEXITY

//searching 2
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === 2) {
        return arr2[i];
    }
} //? LINEAR TIME COMPLEXITY

//retrieving
const getNumber = arr2[3]; //? CONSTANT TIME COMPLEXITY

//method 1
const double = arr2.map((num) => num * 2); //? LINEAR TIME COMPLEXITY

//method 2
const removeAndAddNewNumber = arr2.splice(1, 1, 5); //? LINEAR TIME COMPLEXITY

//method 3
const getSum = arr2.reduce((total, num) => total + num, 0); //? LINEAR TIME COMPLEXITY

//method 4
for (const num of arr2) {
    console.log(num * 2);
} //? LINEAR TIME COMPLEXITY

//method 5
const convertToString = arr2.join(" "); //? LINEAR TIME COMPLEXITY

//method 6
const reversed = arr2.reverse(); //? LINEAR TIME COMPLEXITY

//!PROBLEM 13: : For each one of these code blocks, please identify the time & space complexity and explanation of why it is.

//? PROBLEM 1:

function findFirstIndexOfNumber(number, array) {
    for (let i = 0; i < array.length; i++) {
        //O(n)
        if (array[i] === number) {
            //O(1)
            return i; //O(1)
        }
    }
    return -1;
}
// TOTAL TIME COMPLEXITY = //? O(n(1+1))    ==>     O(2n)
// CONSILIDATED TIME COMPLEXITY //? O(n)
// EXPLANATION == The function had a for loop, inside it has an if statement with a return statement, after the for loop is a return statement.

// SPACE COMPLEXITY:
// The space complexity for this function is linear as the function desires to loop in an array.

//? PROBLEM 2:
function findEachIndexOfNumber(number, array) {
    let arrayOfIndexes = [];
    array.forEach(function (element, index) {
        //O(n)
        if (element === number) {
            //O(1)
            arrayOfIndexes.push(index); //O(1)
        }
    });
    return arrayOfIndexes;
}

//TOTAL TIME COMPLEXITY = //? O(n*(1+1))        ==>     O(2n)
//CONSILIDATED TIME COMPLEXITY  //? O(n)
//EXPLANATION == The function used a forEach which is a loop and inside it is an if statement with a constant argument. The if statement also has a constant inside it.

//SPACE COMPLEXITY
// This functions has a linear space complexity as what it does is it pushes new data from an empty array making it return a new set of an array

//? PROBLEM 3
const array = [36, 14, 1, 7, 21];
function higherOrLower(array) {
    if (array[array.length - 1] > array[0]) {
        //1
        return "Higher";
    } else if (array[array.length - 1] < array[0]) {
        //1
        return "Lower";
    } else {
        //1
        return "Neither";
    }
}

//TOTAL TIME COMPLEXITY = //? O(1+1+1)
//CONSILIDATED TIME COMPLEXITY  //? O(1)
//EXPLANATION == The function used an if else statement, but the parameters are just retrieving elements from an array which are constants.\

// SPACE COMPLEXITY
// This functions has a constant space complexity as it only involves getting something from the array passed. The size of the algorithm isnt affected at all.

//? PROBLEM 4

function determineSumOfSequentialArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        //O(n)
        sum += array[i]; //0[1]
    }
    return sum;
}
//TOTAL TIME COMPLEXITY = //? O(n*1)
//CONSILIDATED TIME COMPLEXITY  //? O(n)
//EXPLANATION == The function used is for loop, which scans through the whole array given that is why it is linear

// SPACE COMPLEXITY
// This functions has a constant space complexity because the size of the data is not affected and we are only concerned about the sum which is a number, which is a constant in space complexity.

//? PROBLEM 5

const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
function determineSumOfSequentialArray(array1) {
    return (array1.length * (array1.length + 1)) / 2; //O(1)
}
//TOTAL TIME COMPLEXITY = //? O(1)
//CONSILIDATED TIME COMPLEXITY  //? O(1)
//EXPLANATION == The condensed time complexity is a constant, because it will only return a constant and there are no alteration or scanning through the array.

// SPACE COMPLEXITY
// This functions has a constant space complexity because the size of the data is not affected and we are only concerned about returning the quotient.

//? PROBLEM 6
function searchSortedArray(
    number,
    array,
    beginIndex = 0,
    endIndex = array.length - 1
) {
    let middleIndex = Math.floor((beginIndex + endIndex) / 2); //O(1)
    if (array[middleIndex] === number) {
        //O(1)
        return middleIndex;
    } else if (beginIndex >= endIndex) {
        //O(1)
        return -1;
    } else if (array[middleIndex] < number) {
        //log(n)
        return searchSortedArray(number, array, beginIndex, endIndex);
    } else if (array[middleIndex] > number) {
        //log(n)
        endIndex = middleIndex - 1;
        return searchSortedArray(number, array, beginIndex, endIndex);
    }
}
//TOTAL TIME COMPLEXITY = //? O(1+1+log(n)+log(n))
//CONSILIDATED TIME COMPLEXITY  //? log(n)^2
//EXPLANATION == The condensed time complexity is logarithmic time complexity as while scanning through the array, the way it searches is that it starts with the middle index and not on the first one, eliminating the need to always scan to every part of the array.

// SPACE COMPLEXITY
// This functions has a constant space complexity because the size of the data is not affected and we are only concerned about returning a number.

//? PROBLEM 7
const array2 = [3, 7, 9, 12, 15, 18, 32];
const array3 = [3, 3, 7, 41, 76];
function compareArrays(array2, array3) {
    let arrayOfPairs = [];
    array2.forEach(function (e, i) {
        //O(n)
        array3.forEach(function (e2, i2) {
            //O(n)
            if (e === e2) {
                //O(1)
                arrayOfPairs.push([i, i2]); //O(1)
            }
        });
    });
    return arrayOfPairs;
}
//TOTAL TIME COMPLEXITY = //? O(n(n(1+1)))
//CONSILIDATED TIME COMPLEXITY  //? n^2
//EXPLANATION == The condensed time complexity is a quadratic, because it will loops through every array and also sends a new array back.
// SPACE COMPLEXITY
// This functions has a linear space complexity as it returns a new array.

//? PROBLEM 8
function sortByValue(array) {
    function swap(array, index1, index2) {
        let temporaryValue = array[index1]; //1
        array[index1] = array[index2]; //n
        array[index2] = temporaryValue; //n
    }
    let count = 1;
    while (count < array.length) {
        //n
        let swapCount = 0;
        for (let i = 0; i < array.length - count; i++) {
            //n
            if (array[i] > array[i + 1]) {
                //1
                swap(array, i, i + 1); //n
                swapCount++; //1
            }
        }
        count++;
    }
    return array;
}

//TOTAL TIME COMPLEXITY = //? O((1+n+n)+(n(n(1+n+1))))
//CONSILIDATED TIME COMPLEXITY  //? O(n^3)
//EXPLANATION == The condensed time complexity is quadratic, because its scans the array using a for while...loop, while there is a for loop inside it which checks if the first array given is bigger than the next array.

// SPACE COMPLEXITY
// This functions has a constant space complexity because even it manipulates the data inside it, the arrays are still the same.

//? PROBLEM 9
function returnDupes(array, array2) {
    let dupeArray = [];
    array.forEach(function (i) {
        //O(n)
        if (array2.includes(i)) {
            //O(n)
            dupeArray.push(i); // O(1)
        }
    });
    return dupeArray;
}
//TOTAL TIME COMPLEXITY = //? O(n(n*1))
//CONSILIDATED TIME COMPLEXITY  //? O(n^2)
//EXPLANATION == The condensed time complexity is quadratic, because its scans the array using a for each...loop, while it also scans the second array being passed using the .includes function

// SPACE COMPLEXITY
// This functions has a linear space complexity because it pushes new data into an array.

//? PROBLEM 10
function sumFilteredData(array) {
    return array
        .filter(function (element) {
            //n
            return element > 5 && element < 20;
        })
        .reduce(function (valueToAdd, currentValue) {
            //n
            return valueToAdd + currentValue;
        }, 0);
}

//TOTAL TIME COMPLEXITY = //? O(n+n) ==> n
//CONSILIDATED TIME COMPLEXITY  //? n
//EXPLANATION == The condensed time complexity is quadratic, because its scans the array and filtering out the array according from its operation, it also scans the array in order to reduce it.

// SPACE COMPLEXITY
// This functions has a constant space complexity because although it manipulates the data size of the array the returned value is an integer
