// Write a recursive function called reverseString which accepts a string and returns a new string in reverse.
// reverseString('tony') // 'ynot'
// reverseString('baker') // 'rekab'

function reverseString(str) {
    let newString = "";
    if (!str || !str.length) {
        return "";
    } else {
        newString += str[str.length - 1];
        newString = newString.concat(
            reverseString(str.slice(0, str.length - 1))
        );
    }
    return newString;
}
console.log(`RECURSION 1`);
console.log(reverseString("tony"));
console.log(reverseString("baker"));

// Write a recursive function called palindrome which returns true
// if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.
// palindrome('tony') // false
// palindrome('monkey') // false
// palindrome('tacocat') // true
// palindrome('sos') // true

const palindrome = (str) => {
    // let end = str.length - 1;
    if (!str) return "";
    if (str.length === 1) return true;
    if (str.length === 2) return str[0] === str[str.length - 1];

    if (str[0] === str[str.length - 1]) {
        str = str.slice(1);
        str = str.slice(0, str.length - 1);
        // console.log(str);
        return palindrome(str);
    }
    return false;
};
console.log(`\nRECURSION 2`);
console.log(palindrome("tony"));
console.log(palindrome("monkey"));
console.log(palindrome("tacocat"));
console.log(palindrome("sos"));

// Write a recursive function called flatTheArray which accepts an array of arrays
// and returns a new array with all values flattened.
// flatTheArray([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatTheArray([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatTheArray([[1],[2],[3]]) // [1,2,3]
// flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]
const flatTheArray = (arr) => {
    let newArr = [];
    // console.log(arr.length);
    if (!arr.length) return "";

    for (var i in arr) {
        if (typeof arr[i] === "number") {
            newArr.push(arr[i]);
        } else if (Array.isArray(arr[i])) {
            newArr = newArr.concat(flatTheArray(arr[i]));
        }
    }
    return newArr;
};
console.log(`\nRECURSION 3`);
console.log(flatTheArray([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatTheArray([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatTheArray([[1], [2], [3]])); //[1, 2, 3]
console.log(flatTheArray([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); //[1,2,3]

// Write a recursive function called capitalizeTheFirst.
// Given an array of strings, capitalize the first letter of each string in the array.
// capitalizeFirstLetter(['tony', 'truck']); // ['Tony', 'Truck']
const capitalizeFirstLetter = (array) => {
    let newArray = [];
    if (!array || !array.length) {
        return newArray;
    } else {
        result = array[0].split("");
        result[0] = result[0].toUpperCase();
        result = result.join("");
        newArray.push(result);
        newArray = newArray.concat(capitalizeFirstLetter(array.slice(1)));
        return newArray;
    }
};

console.log(`\nRECURSION 4`);
console.log(capitalizeFirstLetter(["tony", "truck"]));

// Write a recursive function called capitalizeWords.
// Given an array of words, return a new array containing each word capitalized.
// let words = ['tony', 'kim'];
// capitalizedAllLetters(words); // ['TONY', 'KIM']
const capitalizeAllLetters = (array) => {
    let newArray = [];
    if (!array || !array.length) {
        return newArray;
    } else {
        result = array[0].toUpperCase();
        newArray.push(result);
        newArray = newArray.concat(capitalizeAllLetters(array.slice(1)));
        return newArray;
    }
};

let words = ["tony", "kim"];
console.log(`\nRECURSION 5`);
console.log(capitalizeAllLetters(words));
