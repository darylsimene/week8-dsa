// CHALLENGE 1: REVERSE A STRING ============================================
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
    let newStr = "";
    //let's use recursion
    if (!str || !str.length) {
        return str;
    } else {
        newStr += str[str.length - 1];
        newStr = newStr.concat(reverseString(str.slice(0, str.length - 1)));
    }
    return newStr;
}
console.log(reverseString(`tenten`));

// CHALLENGE 2: VALIDATE A PALINDROME ============================================
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
    //lets use recursion
    if (!str || !str.length) {
        return false;
    } else if (str.length === 2) {
        return str[0] === str[1];
    } else if (str.length === 1) {
        return str;
    } else {
        if (str[0] === str[str.length - 1]) {
            str = str.slice(0);
            str = str.slice(0, str.length - 1);
            isPalindrome(str);
            return true;
        }
    }
    return false;
}
console.log(isPalindrome("tenet"));

// CHALLENGE 3: REVERSE AN INTEGER ============================================
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
    if (!int) return null;
    const strInt = String(int);

    return strInt.split("").reverse().join("");
}
console.log(reverseInt(123));

// CHALLENGE 4: CAPITALIZE LETTERS ============================================
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
    if (!str) return null;
    //instantiate an empty string
    let luvJs = [];

    let stutter = str.split(" ");

    for (let i = 0; i < stutter.length; i++) {
        let word = stutter[i];
        luvJs.push(word[0].toUpperCase() + word.slice(1));
    }

    return luvJs.join(" ");
}
console.log(capitalizeLetters("i love javascript"));

// CHALLENGE 5: MAX CHARACTER ============================================
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
    let freqCount = {};
    let max = 0;

    for (let char of str) {
        freqCount[char] = (freqCount[char] || 0) + 1;
    }

    for (let key in freqCount) {
        if (freqCount[key] > max) {
            max = freqCount[key];
        }
    }

    for (let key in freqCount) {
        if (freqCount[key] === max) {
            console.log(key);
        }
    }
}
maxCharacter("javascript");

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the
// number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3
// and 5, print "FizzBuzz".
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();

// CHALLENGE 7: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    let maxWord = "";
    let maxWordArr = [];
    let stutter = sen.split(" ");

    for (let i = 0; i < stutter.length; i++) {
        if (stutter[i].length > maxWord.length) {
            maxWord = stutter[i];
        } else if (stutter[i].length === maxWord.length) {
            if (!maxWordArr.length) {
                maxWordArr.push(maxWord);
                maxWordArr.push(stutter[i]);
            } else {
                maxWordArr.push(stutter[i]);
            }
        }
    }
    if (!maxWordArr.length) {
        return maxWord;
    } else {
        return maxWordArr;
    }
}

console.log(longestWord("Hi there, my name is Brad"));

// CHALLENGE 8: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
function chunkArray(arr, len) {
    if (!arr || !arr.length || !len) return null;
    if (arr < len) return null;

    let chunked = [];

    for (let i in arr) {
        chunked.push(arr.slice(0, len + 1));
    }

    return chunked;
}

// CHALLENGE 9: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]
function flattenArray(arrays) {
    let flatArr = [];
    if (!arrays || !arrays.length) return "";

    for (let i of arrays) {
        if (typeof i === "number") {
            flatArr.push(i);
        } else if (Array.isArray(i)) {
            flatArr = flatArr.concat(flattenArray(i));
        }
    }
    return flatArr;
}

console.log(flattenArray([[1, 2], [3, 4], [5, 6], [7]]));

// CHALLENGE 10: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'
function isAnagram(str1, str2) {
    if (str1.length != str2.length) return null;
    if (str1.split("").sort().join("") === str2.split("").sort().join("")) {
        return true;
    } else {
        return false;
    }
}

console.log(isAnagram("elbow", "below"));
console.log(isAnagram("Dormitory", "dirty room##"));

// CHALLENGE 11: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'
function letterChanges(str) {
    return str
        .replace(/[a-zA-Z]/g, (x) => String.fromCharCode(x.charCodeAt() + 1))
        .replace(/[aeiou]/g, (v) => v.toUpperCase());
}
console.log(letterChanges("hello there"));

// CHALLENGE 12: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20
function addAll() {
    let sum = 0;

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
console.log(addAll(2, 5, 6, 7));

// CHALLENGE 13: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole
// number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17
function checkPrime(number) {
    if (number <= 1) {
        return false;
    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }
}

function sumAllPrime(number) {
    let sumPrime = 0;
    for (let i = 2; i < number; i++) {
        let isPrime = checkPrime(i);
        if (isPrime) {
            sumPrime += i;
        }
    }
    return sumPrime;
}

console.log(sumAllPrime(10));

// CHALLENGE 14: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftover numbers in an
//array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']
function seekAndDestroy(array, num1, num2) {
    if (!array) return array;
    let i = 0;

    for (let i = array.length; i--; ) {
        if (array[i] === num1) {
            array.splice(i, 1);
        } else if (array[i] == num2) {
            array.splice(i, 1);
        }
    }

    return array;
}

console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6));

// CHALLENGE 15: SORT BY HEIGHT
// Some people are standing in a row in a park. There are trees between them which cannot be moved.
// Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// ex.
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]
// repeat this with the next element until the array is sorted

const swapValue = (arr, i, min) => {
    return ([arr[i], arr[min]] = [arr[min], arr[i]]);
};

const selectionSortMethod = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== -1) {
            let min = i;

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] !== -1) {
                    if (arr[min] > arr[j]) min = j;
                }
            }
            if (i !== min) swapValue(arr, i, min);
        }
    }
    return arr;
};

console.log(selectionSortMethod([-1, 150, 190, 170, -1, -1, 160, 180]));

// CHALLENGE 16: MISSING LETTERS
// Find the missing letter in the passed letter range and return it. If all letters are present,
// ex.
// missingLetters("abce") == "d"
// missingLetters("abcdefghjklmno") == "i"
// missingLetters("abcdefghijklmnopqrstuvwxyz") == undefined
function missingLetters(str) {
    if (!str || !str.length) return null;

    for (let i = 0; i < str.length - 1; i++) {
        const nextLetter = str[i].charCodeAt() + 1;
        if (str[i + 1].charCodeAt() !== nextLetter) {
            return String.fromCharCode(nextLetter);
        }
    }
}

console.log(missingLetters("abce"));
console.log(missingLetters("abcdefghijklmo"));
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));

// CHALLENGE 17: EVEN & ODD SUMS
// Take in an array and return an array of the sums of even and odd numbers
// ex.
// evenOddSums([50, 60, 60, 45, 71]) == [170, 116]
function evenOddSums(arr) {
    let even = 0;
    let odd = 0;
    for (let i of arr) {
        if (i % 2 === 0) {
            even += i;
        } else {
            odd += i;
        }
    }

    return [].concat(even, odd);
}

console.log(evenOddSums([50, 60, 60, 45, 71]));

/*Problem #18

There is a malfunctioning keyboard where some letter keys do not work.
All other keys on the keyboard work properly.
Given a string text of words separated by a single space (no leading or trailing spaces)
and a string brokenLetters
of all distinct letter keys that are broken, return the number of
words in text you can fully type using this keyboard. */
const canBeTypedWords = (text, brokenLetters) => {
    if (!text || !text.length) return null;
    if (brokenLetters.length > text.length) return null;

    let split = text.split(" ");

    for (let i = split.length; i--; ) {
        for (let j = 0; j < brokenLetters.length; j++) {
            if (split[i].includes(brokenLetters[j])) {
                split.splice(i, 1);
                break;
            }
        }
    }
    return split.length;
};

console.log(canBeTypedWords("hello world", "ad"));
console.log(canBeTypedWords("leet code", "lt"));
console.log(canBeTypedWords("leet code", "e"));
