let matrix = [];
let choice;
do {
    choice = +prompt(
        "==============MENU============\n" +
        "1. Nhập mảng 2 chiều\n" +
        "2. Hiển thị mảng 2 chiều\n" +
        "3. Tính tổng các phần tử trong mảng\n" +
        "4. Tính tổng đường chéo chính\n" +
        "5. Tính tổng đường chéo phụ\n" +
        "6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột\n" +
        "7. Thoát chương trình\n" +
        "=================================\n" +
        "Lựa chọn của bạn:"
    );

    switch (choice) {
        case 1:
            let rows = +prompt("Nhập số hàng:");
            let cols = +prompt("Nhập số cột:");
            matrix = [];
            for (let i = 0; i < rows; i++) {
                matrix[i] = [];
                for (let j = 0; j < cols; j++) {
                    matrix[i][j] = +prompt(`Nhập phần tử tại [${i}][${j}]:`);
                }
            }
            break;
        case 2:
            alert(matrix.map(row => row.join(" ")).join("\n"));
            break;
        case 3:
            let totalSum = matrix.flat().reduce((sum, num) => sum + num, 0);
            alert("Tổng các phần tử trong mảng: " + totalSum);
            break;
        case 4:
            let mainDiagonalSum = 0;
            for (let i = 0; i < Math.min(matrix.length, matrix[0].length); i++) {
                mainDiagonalSum += matrix[i][i];
            }
            alert("Tổng đường chéo chính: " + mainDiagonalSum);
            break;
        case 5:
            let secondaryDiagonalSum = 0;
            for (let i = 0; i < Math.min(matrix.length, matrix[0].length); i++) {
                secondaryDiagonalSum += matrix[i][matrix[0].length - 1 - i];
            }
            alert("Tổng đường chéo phụ: " + secondaryDiagonalSum);
            break;
        case 6:
            let type = prompt("Chọn 'row' để tính trung bình theo hàng, 'col' để tính trung bình theo cột:");
            let index = +prompt("Nhập chỉ số hàng hoặc cột:");
            let avg;
            if (type === 'row' && index >= 0 && index < matrix.length) {
                avg = matrix[index].reduce((sum, num) => sum + num, 0) / matrix[index].length;
            } else if (type === 'col' && index >= 0 && index < matrix[0].length) {
                avg = matrix.reduce((sum, row) => sum + row[index], 0) / matrix.length;
            } else {
                alert("Lựa chọn không hợp lệ!");
                break;
            }
            alert("Giá trị trung bình: " + avg);
            break;
        case 7:
            alert("Chương trình kết thúc!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (choice !== 7);
