const ones = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
const tens = ["", "mười", "hai mươi", "ba mươi", "bốn mươi", "năm mươi", "sáu mươi", "bảy mươi", "tám mươi", "chín mươi"];

let num = Number(prompt("Nhập số từ 0 đến 999:"));
let result = "";

if (isNaN(num) || num < 0 || num > 999) {
    result = "Vui lòng nhập số từ 0 đến 999";
} else {
    if (num === 0) {
        result = "không";
    } else {
        let hundred = Math.floor(num / 100);
        let ten = Math.floor((num % 100) / 10);
        let one = num % 10;

        if (hundred > 0) {
            result += ones[hundred] + " trăm";
            if (ten === 0 && one > 0) {
                result += " linh " + (one === 5 ? "năm" : ones[one]);
            }
        }

        if (ten > 0) {
            result += (result ? " " : "") + tens[ten];
            if (one > 0) {
                result += " " + (one === 5 ? "lăm" : ones[one]);
            }
        } else if (one > 0 && hundred === 0) {
            result += ones[one];
        }
    }
}

alert("" + result);