let columnCount = 0;
let rowCount = 0;
let twoDimensionalArray = [];
let choice;

do {
    choice = +prompt(
        "==============MENU============\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n" +
        "5. Tính trung bình cộng các phần tử của một hàng cụ thể\n" +
        "6. Đảo ngược các hàng trong mảng\n" +
        "7. Thoát chương trình\n" +
        "=================================\n\nLựa chọn của bạn:"
    );

    switch (choice) {
        case 1:
            columnCount = prompt("Mời bạn nhập số cột:");
            rowCount = prompt("Mời bạn nhập số hàng:");
            for (let i = 0; i < columnCount; i++) {
                for (let j = 0; j < rowCount; j++) {
                    twoDimensionalArray[[i][j]] = prompt("Mời bạn nhập phần tử:");
                }
            }
            break;

        case 2:
            alert(twoDimensionalArray);
            break;

        case 3:
            let maxValue = twoDimensionalArray[0];
            let minValue = twoDimensionalArray[0];
            for (let i = 0; i < twoDimensionalArray.length; i++) {
                if (maxValue < twoDimensionalArray[i]) {
                    maxValue = twoDimensionalArray[i];
                }
            }
            for (let i = 0; i < twoDimensionalArray.length; i++) {
                if (minValue > twoDimensionalArray[i]) {
                    minValue = twoDimensionalArray[i];
                }
            }
            alert("Giá trị lớn nhất là: " + maxValue + "\nGiá trị nhỏ nhất là: " + minValue);
            break;

        case 4:
            let totalSum = 0;
            for (let i = 0; i < twoDimensionalArray.length; i++) {
                totalSum += twoDimensionalArray[i];
            }
            alert(totalSum);
            break;

        case 5:
            let searchValue = prompt("Mời bạn nhập số muốn tìm:");
            let occurrenceCount = 0;
            for (let i = 0; i < twoDimensionalArray.length; i++) {
                if (searchValue == twoDimensionalArray[i]) {
                    occurrenceCount++;
                }
            }

            if (occurrenceCount == 0) {
                alert("Số " + searchValue + " không tồn tại trong mảng");
            } else {
                alert("Số " + searchValue + " xuất hiện trong mảng " + occurrenceCount + " lần");
            }
            break;

        case 6:
            let tempValue = 0;
            for (let i = 0; i < twoDimensionalArray.length; i++) {
                for (let j = 0; j < twoDimensionalArray.length; j++) {
                    if (twoDimensionalArray[j] > twoDimensionalArray[j + 1]) {
                        tempValue = twoDimensionalArray[j];
                        twoDimensionalArray[j] = twoDimensionalArray[j + 1];
                        twoDimensionalArray[j + 1] = tempValue;
                    }
                }
            }
            alert(twoDimensionalArray);
            break;

        case 7:
            alert("Chương trình kết thúc!");
            break;

        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (choice !== 7);