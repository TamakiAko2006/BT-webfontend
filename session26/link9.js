function arrays(arr) {
    let sumOdd = 0;
    let sumEven = 0;
    let arrSplit = arr.split(" ");

    if (arrSplit.indexOf() !== -1) {
        alert("Mảng không có dữ liệu");
        return;
    }

    if (arrSplit.length === 0 || arrSplit.every(num => isNaN(num))) {
        alert("Dữ liệu không hợp lệ");
        return;
    }

    arrSplit
    .map(Number) 
    .filter(num => !isNaN(num)) 
    .forEach(num => num % 2 === 0 ? sumEven += num : sumOdd += num);

    alert(`Tổng số chẵn: ${sumEven}, Tổng số lẻ: ${sumOdd}`);
}

let arr = prompt("Nhập các số nguyên (cách nhau bằng dấu cách): ");
arrays(arr);