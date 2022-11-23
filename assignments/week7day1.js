const arr = [12, 3, 14, 18, 2, 7, 9];

const javaScriptMethod = (arr) => {
    //.sort works but with this sorting in  javascript, the outcome is perfect unlike the .sort() only
    arr.sort((a, b) => a - b);
    console.log(arr);
};

const bubbleSortMethod = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        noSwap = true;

        //loop throught the first element first and compare to the second element
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwap = false;
            }
        }
        //If no swap happened when looping, it means its successful and we return the array
        if (noSwap) return arr;
    }
};

const swapValue = (arr, i, min) => {
    return ([arr[i], arr[min]] = [arr[min], arr[i]]);
};

const selectionSortMethod = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        //initialize the first element as the minimum element
        let min = i;

        //it loops through the array finding the minimum element interchanging it along the way
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) min = j;
        }

        //if it sees that the first element is not the minimum element, it will swap places from the minimum.
        if (i !== min) swapValue(arr, i, min);
    }

    return arr;
};

const insertionSortMethod = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        //we set the second element in the array as the current value
        let currValue = arr[i];
        for (let j = i - 1; j >= 0 && arr[j] > currValue; j--) {
            //if it finds that the first element is greater than the current value they will swap places.
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
