const checkId = (cardNum) => {
    let stringNum = String(cardNum);
    var regex = /^[4,5,6]+(\d{3}-?\d{4}-?\d{4}-?\d{4})/gm;
    var regex1 = /([\d])\1\1\1/gm;
    var noDash = stringNum.replace(/-/g, "");

    let result = stringNum.match(regex);
    let result1 = noDash.match(regex1);

    if (result && !result1) {
        return `Valid`;
    } else {
        return `Invalid`;
    }
};

console.log(checkId(4123456789123456)); // valid
console.log(checkId(`5123-4567-8912-3456`)); //valid
console.log(checkId(`61234-567-8912-3456`)); //invalid
console.log(checkId(4123356789123456)); // valid
console.log(checkId(`5133-3367-8912-3456`)); // invalid
console.log(checkId(`5123 - 4567 - 8912 - 3456`)); //invalid
