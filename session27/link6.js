let arr = prompt("Nhập vào dãy số muốn kiểm tra cấp số cộng (cách nhau bằng dấu cách):");

function isArithmeticSequence(arr) {
    let arrSplit = arr.split(" ").map(Number); 
    if (arrSplit.some(isNaN)) {
        alert("Dữ liệu không hợp lệ! Vui lòng nhập các số cách nhau bằng dấu cách.");
        return;
    }

    if (arrSplit.length < 2) {
        alert("Cần ít nhất 2 số để kiểm tra!");
        return;
    }

    let diff = arrSplit[1] - arrSplit[0]; 
    let isArithmetic = true;

    for (let i = 2; i < arrSplit.length; i++) {
        if (arrSplit[i] - arrSplit[i - 1] !== diff) {
            isArithmetic = false;
            break;
        }
    }

    if (isArithmetic) {
        alert("Mảng trên là cấp số cộng!");
    } else {
        alert("Mảng trên không phải cấp số cộng!");
    }
}

if (arr) {
    isArithmeticSequence(arr);
} else {
    alert("Dữ liệu không hợp lệ!");
}