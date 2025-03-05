let amount = prompt("Nhập số tiền muốn rút");
let count500k = 0;
let count200k = 0;
let count100k = 0;
let count50k = 0;
let count20k = 0;
let count10k = 0;
let count5k = 0;
let count2k = 0;
let count1k = 0;

if (amount >= 1000 && !isNaN(amount)) {
    for (let i = 500000; amount >= i; i += 500000) {
        amount -= 500000;
        count500k += 1;
    }
    if (count500k >= 1) {
        console.log("500.000 - " + count500k + " tờ");
    }

    for (let i = 200000; amount >= i; i += 200000) {
        amount -= 200000;
        count200k += 1;
    }
    if (count200k >= 1) {
        console.log("200.000 - " + count200k + " tờ");
    }

    for (let i = 100000; amount >= i; i += 100000) {
        amount -= 100000;
        count100k += 1;
    }
    if (count100k >= 1) {
        console.log("100.000 - " + count100k + " tờ");
    }

    for (let i = 50000; amount >= i; i += 50000) {
        amount -= 50000;
        count50k += 1;
    }
    if (count50k >= 1) {
        console.log("50.000 - " + count50k + " tờ");
    }

    for (let i = 20000; amount >= i; i += 20000) {
        amount -= 20000;
        count20k += 1;
    }
    if (count20k >= 1) {
        console.log("20.000 - " + count20k + " tờ");
    }

    for (let i = 10000; amount >= i; i += 10000) {
        amount -= 10000;
        count10k += 1;
    }
    if (count10k >= 1) {
        console.log("10.000 - " + count10k + " tờ");
    }

    for (let i = 5000; amount >= i; i += 5000) {
        amount -= 5000;
        count5k += 1;
    }
    if (count5k >= 1) {
        console.log("5.000 - " + count5k + " tờ");
    }

    for (let i = 2000; amount >= i; i += 2000) {
        amount -= 2000;
        count2k += 1;
    }
    if (count2k >= 1) {
        console.log("2.000 - " + count2k + " tờ");
    }

    for (let i = 1000; amount >= i; i += 1000) {
        amount -= 1000;
        count1k += 1;
    }
    if (count1k >= 1) {
        console.log("1.000 - " + count1k + " tờ");
    }
} else {
    alert("Số tiền không hợp lệ");
}
