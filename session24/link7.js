let choice;
let strings = "";
do {
    choice = +prompt(
        "==============MENU============\n1.Nhập chuỗi\n2.Hiển thị chuỗi\n3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi\n4.Đảo ngược chuỗi ký tự\n5.Đếm số lượng từ trong chuỗi ký tự\n6.Tìm kiếm và thay thế các ký tự \n7. Thoát\n\n=================================\n\n Lựa chọn của bạn:"
    );

    switch (choice) {
        case 1:
            strings = prompt("Nhập chuỗi:");
            break;

        case 2:
            alert(strings);
            break;

        case 3:

            alert(strings.trim());
            break;

        case 4:
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

        case 5:
            let arr = strings.split(" ");
            alert("số lương tự có trong chuỗi trên là: " + arr.length)
            break;

        case 6:
            let search = prompt("Nhập ký tự bạn muốn tìm trong chuỗi:");
            if (!strings.includes(search)) {
                    alert("Không tìm thấy ký tự" +search + "trong chuỗi.");
                    break;
            }

            let count = strings.split(search).length - 1;
            alert("Tìm thấy ký tự "+ search + " xuất hiện " + count + " lần trong chuỗi.");

            let replacement = prompt("Nhập ký tự thay thế:");
            strings = strings.replaceAll(search, replacement);
            alert("Chuỗi sau khi thay thế: " + strings);
            break;

        case 7:
            alert("Chương trình kết thúc!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (choice !== 7);