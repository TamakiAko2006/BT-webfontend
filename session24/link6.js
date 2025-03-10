let choice;
let strings = "";
do {
    choice = +prompt(
        "==============MENU============\n1.Nhập chuỗi\n2.Hiển thị chuỗi\n3.Tính độ dài chuỗi\n4.Đếm số lần xuất hiện của một ký tự \n5.Kiểm tra chuỗi có phải là chuỗi đối xứng không\n6.Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ\n7. Thoát\n\n=================================\n\n Lựa chọn của bạn:"
    );

    switch (choice) {
        case 1:
            strings = prompt("Nhập chuỗi:");
            break;
        case 2:
            alert(strings);
            break;
        case 3:
            alert("Chuỗi trên có: " + strings.length + " phần tử");
            break;
        case 4:
            let search = prompt("Nhập ký tự muốn kiểm tra:");
            let count = 0;
            for (let i = 0; i < strings.length; i++) {
                if (strings[i] == search) {
                    count++;
                }
            }
            if (count > 0) {
                alert("Ký tự bạn nhập xuất hiện " + count + " lần trong chuỗi");
            } else {
                alert("Ký tự bạn nhập không có trong chuỗi");
            }
            break;
        case 5:
            let reversed = "";
            for (let i = strings.length - 1; i >= 0; i--) {
                reversed += strings[i];
            }
            if (strings === reversed) {
                alert("Chuỗi là đối xứng.");
            } else {
                alert("Chuỗi không đối xứng.");
            }
            break;
        case 6:
            let arr = strings.split(" ");
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].length > 0) {
                    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
                }
            }
            strings = arr.join(" ");
            alert("Chuỗi sau khi chuyển đổi: " + strings);
            break;
        case 7:
            alert("Chương trình kết thúc!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (choice !== 7);