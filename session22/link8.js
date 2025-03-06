let numbers = [9, 2, 6, 5, 6, 9, 1, 9, 2, 8];
let frequency = {};

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (frequency[num] === undefined) {
        frequency[num] = 1;
    } else {
        frequency[num]++;
    }
}

let highestFrequency = 0;
let mostFrequentNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (frequency[numbers[i]] > highestFrequency) {
        highestFrequency = frequency[numbers[i]];
        mostFrequentNumber = numbers[i];
    }
}

let smallestMostFrequentNumber = mostFrequentNumber;

for (let i = 0; i < numbers.length; i++) {
    if (frequency[numbers[i]] === highestFrequency && numbers[i] < smallestMostFrequentNumber) {
        smallestMostFrequentNumber = numbers[i];
    }
}

console.log(smallestMostFrequentNumber);