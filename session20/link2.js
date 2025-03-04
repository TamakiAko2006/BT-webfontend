let n = prompt("Nhập số bất kì: ");
if (n >= 1) {

    document.write("các số chia hết cho 5 từ 1 đến"+n+"là:");
    for (i = 1; i <= n; i++) {
        if (i % 5 == 0) {
            document.write(i + ",");
        }
    }
} else {
    alert("dữ liệu nhập vào không hợp lệ: ");
}