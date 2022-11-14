/*Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the
majority element always exists in the array.
Please solve using a linear time complexity and using the frequency counter pattern */

// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

// Constraints:
// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
// /**

// * @param {number[]} nums
// * @return {number}
// */

const solution = (nums) => {
    const n = nums.length;
    let max = 0;

    if (n <= 1 || n >= 104 * 5) {
        return -1;
    }

    let storage = {};

    for (let i of nums) {
        if (i <= -109 || i >= 109) {
            return -1;
        }
        storage[i] = (storage[i] || 0) + 1;
    }

    for (let key in storage) {
        if (storage[key] > max) {
            max = storage[key];
        }
    }

    for (let key in storage) {
        if (storage[key] == max) {
            return key;
        }
    }
};

console.log(`\n\nFREQUENCY COUNTER PATTERN`);
console.log(solution([3, 2, 3]));
console.log(solution([110, 2, 1, 1, 1, 2, 2]));

/*
Write a function called subsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
Write your solution with time complexity O(n) and space O(1)
*/

const subsequence = (str1, str2) => {
    str1 = str1.replace(/\s/g, "");
    let i = 0,
        j = 0;
    s1Length = str1.length;
    s2Length = str2.length;

    while (i < s1Length && j < s2Length) {
        if (str1[i] == str2[j]) {
            // console.log(
            //     `String 1 [index ${i}]: ${str1[i]} \nString 2 [index ${j}]: ${str2[j]} \n`
            // );
            i++;
        }
        j++;
    }
    return i == s1Length;
};
// Test Cases:
console.log(`\n\nMULTIPLE POINTERS PATTERN`);
console.log(subsequence("hello", "hello world")); // true
console.log(subsequence("sing", "sting")); //true
console.log(subsequence("abc", "abracadabra")); //true
console.log(subsequence("abc", "acb")); //false

const longestSubstringInString = (str) => {
    const uniqueSet = new Set();
    let i = 0;
    let len = 0;
    let maxLength = 0;

    if (!str.length || str.length === 0) return len;

    //uniqueSet.add(str[0]); // added the first letter so that we can use Set.has
    // since we added the first letter in the set already

    while (i < str.length) {
        if (str[i] !== str[i + 1] && !uniqueSet.has(str[i])) {
            uniqueSet.add(str[i]); // add the characters in a set & use .has method in Set which is constant
            len++; //count consecutive characters that are unique
            i++; //move the index
            if (len > maxLength) {
                maxLength = len; //creating a max length so that when its starts sliding through the characters in the string, the highest count s recorded
            }
        } else {
            uniqueSet.clear(); //clear the set to reset comparisons
            i = i - len + 1; //start from the index after the previous index
            len = 0; //clear counting the length
        }
    }

    return maxLength;
};

// Test Cases:
console.log(`\n\nSLIDING WINDOW`);
console.log(longestSubstringInString("")); //0
console.log(longestSubstringInString("rithmschool")); //7
console.log(longestSubstringInString("thisisawesome")); //6
console.log(longestSubstringInString("thecatinthehat")); //7
console.log(longestSubstringInString("bbbbbb")); //1
console.log(longestSubstringInString("longestsubstring")); // 8
console.log(longestSubstringInString("thisishowwedoit")); //6

//sorted (in ascending order) integer numsay nums of n elements
// and a target value, write a function to search target in nums.
// If target exists, then return its index, otherwise return -1.
// Please write in time complexity of O(log n)
// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1
// Note:
// 1. You may assume that all elements in nums are unique.
// 2. n will be in the range [1, 10000].
// 3. The value of each element in nums will be in the range [-9999, 9999].
const binaryIterativeSearch = (nums, target) => {
    let min = 0;
    let max = nums.length - 1;
    while (min < max) {
        let middleIndex = Math.floor((min + max) / 2);

        if (target === nums[middleIndex]) {
            return middleIndex;
        } else if (nums[middleIndex] < target) {
            //if the middle element is less than the target then the start point would then be the element after the middle index
            min = middleIndex + 1;
        } else {
            //if the middle element is greater than the target then the end point would then be element before the middle index
            max = middleIndex - 1;
        }
    }

    return -1;
};

console.log(`\n\nDIVIDE AND CONQUER`);
console.log(binaryIterativeSearch([-1, 0, 3, 5, 9, 12], 9));
console.log(binaryIterativeSearch([-1, 0, 3, 5, 9, 12], 2));
console.log(binaryIterativeSearch([-1, 0, 3, 5, 9, 12], -1));
console.log(binaryIterativeSearch([-1, 0, 3, 5, 9, 12], 3));
