const arr = [12, 3, 14, 18, 2, 7, 9];

const javaScriptMethod = (arr) => {
    arr.sort((a, b) => a - b);
    console.log(arr);
};

const bubbleSortMethod = (arr) => {
    for (let i = arr.length - 1; i > 0; i++) {
        noSwap = true;
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwap = false;
            }
        }
        if (noSwap) return arr;
    }
};

const swapValue = (arr, i, min) => {
    return ([arr[i], arr[min]] = [arr[min], arr[i]]);
};

const selectionSortMethod = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) min = j;
        }

        if (i !== min) swapValue(arr, i, min);
    }

    return arr;
};

const insertionSortMethod = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let currValue = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > currValue; j--) {
            let temp = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = temp;
        }
    }

    return arr;
};

console.log(`\nJAVASCRIPT METHOD`);
javaScriptMethod(arr);

console.log(`\nBUBBLE SORT METHOD`);
console.log(bubbleSortMethod(arr));

console.log(`\nSELECTION SORT METHOD`);
console.log(selectionSortMethod(arr));

console.log(`\nINSERTION SORT METHOD`);
console.log(insertionSortMethod(arr));
