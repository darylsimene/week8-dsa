//!=====================================================================
// Using any linear search algorithm and a time complexity of O(n)
// Search and return target number: 12
// If no target number is found, return -1
// Please use arr1.

const arr1 = [1, 34, 5, 2, 23, 9, 12, 17, 12, 10, 25];
const linearSearch = (arr, target) => {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
};

console.log(`LINEAR SEARCH`);
console.log(linearSearch(arr1, 12));

//!=====================================================================
// using any binary search algorithms and a time of O(n) search and return target number: 12
// if no target number is found, return -1
//please use arr1

const binarySearch = (arr, target) => {
    arr.sort((a, b) => a - b);
    let min = 0;
    let max = arr.length - 1;

    if (!arr || !arr.length) return arr;

    while (min <= max) {
        let middleIndex = Math.floor((min + max) / 2);

        if (arr[middleIndex] === target) {
            return arr[middleIndex];
        } else if (arr[middleIndex] < target) {
            min = middleIndex + 1;
        } else {
            max = middleIndex - 1;
        }
    }

    return -1;
};

console.log(`\nBINARY SEARCH `);
console.log(binarySearch(arr1, 2));

//!=====================================================================
const arr2 = [1, 3, 5, 7, 8, 9, 10, 11, 12, 13, 15, 18, 20];
// Using the recursive binary search algorithm and a time complexity of O(log n)
// Search and return target number: 12
// If no target number is found, return -1
// Please use arr2.
const recursiveBinarySearch = (
    arr,
    target,
    start = 0,
    end = arr2.length - 1
) => {
    //edge case
    if (start > end) return -1;
    if (!arr || !arr.length) return arr;
    let middleIndex = Math.floor((start + end) / 2);

    if (target === arr[middleIndex]) return middleIndex;

    if (arr[middleIndex] > target) {
        return recursiveBinarySearch(arr, target, start, middleIndex - 1);
    } else {
        return recursiveBinarySearch(arr, target, middleIndex + 1, end);
    }
};

console.log(`\nRECURSIVE BINARY SEARCH`);
console.log(recursiveBinarySearch(arr2, 3));
//!=====================================================================
// Using the iterative binary search algorithm and a time complexity of O(log n)
// Search and return target number: 12
// If no target number is found, return -1
// Please use arr2.
const iterativeBinarySearch = (arr, target) => {
    let sort = arr.sort((a, b) => a - b);
    let min = 0;
    let max = arr.length - 1;

    if (!arr || !arr.length) return arr;

    while (min <= max) {
        let middleIndex = Math.floor((min + max) / 2);

        if (sort[middleIndex] === target) {
            return middleIndex;
        } else if (sort[middleIndex] < target) {
            min = middleIndex;
        } else {
            max = middleIndex;
        }
    }

    return -1;
};

console.log(`\nITERATIVE BINARY SEARCH`);
console.log(iterativeBinarySearch(arr2, 12));

//!=====================================================================
// Naive String Search
// Return the frequency count of occurence of the word "dog" in "deladogomydog"
// function SHOULD return 2 since 'dog' occurs twice in the long string
// Algorithm should use a time complexity of O(n * m)
const long = "deladogomydog";
const short = "dog";
const naiveSearch = (long, short) => {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) break;
            if (j === short.length - 1) count++;
        }
    }
    return count;
};

console.log(`\nNAIVE SEARCH`);
console.log(naiveSearch(long, short));

//!=====================================================================
nums = [0, 1, 0, 3, 12];

var moveZeroes = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }

    return nums;
};

console.log(`\nMOVING ZEROES`);
console.log(moveZeroes(nums));

//!=====================================================================
isLongPressedName("alex", "aaleex");
function isLongPressedName(name, typed) {
    //EDGE CASES
    n = name.length;
    t = typed.length;
    if (n < 1 || t >= 1000 || t >= 1000) return false;
    let i = 0,
        j = 0;

    while (i < n || j < t) {
        if (name[i] === typed[j]) {
            i++;
            j++;
        } else if (name[i - 1] === typed[j]) {
            j++;
        } else {
            return false;
        }
    }
    return true;
}

console.log(`\nMULTIPLE POINTERS PATTERN`);
console.log(isLongPressedName("alex", "aaleex"));

//!=====================================================================
var missingNumber = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += i + 1 - nums[i];
    }

    return sum;
};

console.log(`\nMISSING NUMBER`);
console.log(missingNumber([3, 0, 1]));
