const arr = [12, 3, 14, 18, 2, 7, 9];

const mergeSortMethod = (arr) => {
    if (arr.length <= 1) return arr;
    // assign mid, left, and right
    let mid = Math.floor(arr.length / 2);
    let left = mergeSortMethod(arr.slice(0, mid));
    let right = mergeSortMethod(arr.slice(mid));
    //use a helper function to merge sliced arrays and sort them
    return merge(left, right);
};

const merge = (left, right) => {
    //assign an array to store sorted arrays
    let result = [];
    //assign indexes to use in a while loop
    let i = 0;
    let j = 0;

    //perform while loop where i < left.length & j <  right.length
    while (i < left.length && j < right.length) {
        //if else statement wherein the less element will be push in the result array
        if (right[j] > left[i]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    //perform while loop to empty out left & right array
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
};

const quickSortMethod = (arr, left = 0, right = arr.length - 1) => {
    //edge cases
    if (arr.length <= 1) return arr;

    if (left < right) {
        let pivotIndex = pivot(arr, left, right);

        //left
        quickSortMethod(arr, left, pivotIndex - 1);

        //right
        quickSortMethod(arr, pivotIndex + 1, right);
    }
    return arr;
};

const pivot = (arr, left = 0, right = arr.length - 1) => {
    //assign the first element as the pivot
    let pivot = arr[left];
    //assign a swapindex
    let swapIndex = left;

    for (let i = swapIndex + 1; i <= right; i++) {
        //looping thru the array being passed, it'll find the less number and throw it to the left side
        if (pivot > arr[i]) {
            swapIndex++;
            [arr[i], arr[swapIndex]] = [arr[swapIndex], arr[i]];
        }
    }

    //swapping the swapIndex from the first element
    [arr[swapIndex], arr[left]] = [arr[left], arr[swapIndex]];

    return swapIndex;
};

console.log(mergeSortMethod(arr));
console.log(quickSortMethod(arr));
