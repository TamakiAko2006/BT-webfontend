let numbers = [2, 1, 7, 8, 6, 9, 2, 9, 2, 9];
let uniqueTracker = {};
let currentNumber = 0;

for (let i = 0; i < numbers.length; i++) {
    currentNumber = numbers[i];
    if (uniqueTracker[currentNumber] === undefined) {
        uniqueTracker[currentNumber] = 1;
    } else {
        numbers.splice(i, 1);
        i--;
    }
}

console.log(numbers);