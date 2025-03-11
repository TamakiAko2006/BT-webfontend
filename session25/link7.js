function isPalindrome(strings) {
    strings = prompt("Mời bạn nhập một chuỗi ký tự");
    let test = strings.split(" ");
    strings = strings.toLowerCase();
    for (let i = 0; i < test.length; i++) {
        if (test[i].length > 0) {
            test[i] = test[i][0].toUpperCase() + test[i].slice(1, test[i].length - 1);
        }
    }
    console.log(test);
}

isPalindrome();