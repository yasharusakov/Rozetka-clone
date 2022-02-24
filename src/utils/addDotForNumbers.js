function addDotForNumbers(numbers) {
    const stringNumber = `${numbers}`;

    if (stringNumber.length === 4) {
        return stringNumber.slice(0, 1) + ' ' + stringNumber.slice(1, stringNumber.length);
    } else if (stringNumber.length === 5) {
        return stringNumber.slice(0, 2) + ' ' + stringNumber.slice(2, stringNumber.length);
    } else if (stringNumber.length === 6) {
        return stringNumber.slice(0, 3) + ' ' + stringNumber.slice(3, stringNumber.length);
    }
}

export default addDotForNumbers;