for (let num = 100; num < 1000; num++) {
    let num1 = Math.floor(num / 100);
    let num2 = Math.floor((num / 10) % 10);
    let num3 = num % 10;


    if (Math.pow(num1, 3) + Math.pow(num2, 3) + Math.pow(numt3, 3) === num) {
        console.log(num);
    }
}