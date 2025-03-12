function arrays(arr) {
    let arr1 = [];
    let arrSplit = arr.split(" ");

    for (let i = 0; i < arrSplit.length; i++) {
        if (arrSplit[i].length > 5) {
            arr1.push(arrSplit[i]);
        }
    }

    if (arr1.length === 0) {
        alert("Không có chuỗi nào có độ dài lớn hơn 5 ký tự");
    } else {
        alert("Các chuỗi có độ dài lớn hơn 5 ký tự: " + arr1);
    }
}

let arr = prompt("Nhập các chuỗi khác nhau bằng dấu cách:");
arrays(arr);