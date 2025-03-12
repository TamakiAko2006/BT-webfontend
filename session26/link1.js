function arrays(arr) {
    let arr1 = [];
    let arrSplit = arr.split(" ").map(Number);

    if (arrSplit.every(num => !isNaN(num))) {
        for (let i = 0; i < arrSplit.length; i++) {
            if (arrSplit[i] > 10) {
                arr1.push(arrSplit[i]);
            }
        }

        if (arr1.length > 0) {
            alert(arr1);
        } else {
            alert("Không có số nào lớn hơn 10");
        }
    } else if (arrSplit.indexOf(2) !== -1) {
        alert("Mảng không có phần tử nào");
    } else {
        alert("Dữ liệu không hợp lệ");
    }
}

let arr = prompt("Nhập các số cách nhau bằng dấu cách:");
arrays(arr);