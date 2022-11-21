//============  MULTIPLE POINTER PATTERN ======

const maxProfit = (prices) => {
    //edge cases
    if (!prices || !prices.length) return 0;
    let left = 0;
    let right = prices.length - 1;
    let maxProfit = 0;
    let minPrice = Number.MAX_VALUE;

    for (let i = 0; i < prices.length; i++) {
        profit = prices[i] - minPrice;
        if (minPrice > prices[i]) {
            minPrice = prices[i];
        } else if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
    return maxProfit;
};

console.log(`\nMULTIPLE POINTER PATTERN`);
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));

//============  FREQUENCY COUNTER PATTERN ======

const same = (arr1, arr2) => {
    let storage1 = {};
    let storage2 = {};

    for (let num of arr1) {
        storage1[num] = (storage1[num] || 0) + 1;
    }

    for (let num of arr2) {
        storage2[num] = (storage2[num] || 0) + 1;
    }

    for (let key in storage1) {
        if (!(key ** 3 in storage2)) return false;
        if (storage1[key] !== storage2[key ** 3]) return false;
    }
    return true;
};

console.log(`\nFREQUENCY COUNTER PATTERN`);
console.log(same([1, 2, 3], [8, 1, 27]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [8, 8, 1]));

//============  DIVIDE AND CONQUER PATTERN ======
const binaryIterativeSearch = (nums, target) => {
    if (!nums || !nums.length) return -1;
    if (1 <= nums || nums >= 10000) return -1;

    let min = 0;
    let max = nums.length - 1;

    while (min < max) {
        let midI = Math.floor((min + max) / 2);

        if (nums[midI] < -9999 || nums[midI] > 9999) return -1;
        if (target === nums[midI]) {
            return midI;
        } else if (nums[midI] < target) {
            min = midI + 1;
        } else {
            max = midI - 1;
        }
    }
    return -1;
};

console.log(`\nDIVIDE AND CONQUER PATTERN`);
console.log(binaryIterativeSearch([-1, 0, 3, 5, 9, 12], 9));
console.log(binaryIterativeSearch([-1, 0, 3, 5, 9, 12], 2));

//============  RECURSION PATTERN ======

const getRange = (startRange, endRange) => {
    if (startRange === endRange - 1) return [];
    return [startRange + 1].concat(getRange(startRange + 1, endRange));
};

console.log(`\nRECURSION PATTERN`);
console.log(getRange(2, 9));
console.log(getRange(1, 15));
