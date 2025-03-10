let choice;
let numbers = [];
do {
    choice = +prompt(
    "==============MENU============\n" +
    "1. Nhập mảng\n" +
    "2. Hiển thị mảng\n" +
    "3. Tìm phần tử lớn nhất và nhỏ nhất trong mảng\n" +
    "4. Tính tổng các phần tử trong mảng\n" +
    "5. Tìm số lần xuất hiện của một phần tử trong mảng\n" +
    "6. Sắp xếp mảng tăng dần\n" +
    "7. Thoát\n" +
    "=================================\n\nLựa chọn của bạn:"
    );

    switch (choice) {
        case 1:
            let input = prompt("Nhập các số nguyên, cách nhau bởi dấu phẩy:");
            let tempNumbers = input.split(",");
            numbers = [];
            for (let i = 0; i < tempNumbers.length; i++) {
                numbers.push(parseInt(tempNumbers[i], 10));
            }
            break;
        
        case 2:
            alert("Mảng hiện tại: " + numbers.join(", "));
            break;

        case 3:
            let max = numbers[0], min = numbers[0];
            for (let i = 1; i < numbers.length; i++) {
                if (numbers[i] > max) max = numbers[i];
                if (numbers[i] < min) min = numbers[i];
            }
            alert("Phần tử lớn nhất: " + max + "\nPhần tử nhỏ nhất: " + min);
            break;

        case 4:
            let sum = 0;
            for (let i = 0; i < numbers.length; i++) {
                sum += numbers[i];
            }
            alert("Tổng các phần tử trong mảng: " + sum);
            break;

        case 5:
            let searchNumber = +prompt("Nhập số cần tìm trong mảng:");
            let count = 0;
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] === searchNumber) count++;
            }
            alert("Số " + searchNumber + " xuất hiện " + count + " lần trong mảng.");
            break;

        case 6:
            for (let i = 0; i < numbers.length - 1; i++) {
                for (let j = i + 1; j < numbers.length; j++) {
                    if (numbers[i] > numbers[j]) {
                        let temp = numbers[i];
                        numbers[i] = numbers[j];
                        numbers[j] = temp;
                    }
                }
            }
            alert("Mảng sau khi sắp xếp tăng dần: " + numbers.join(", "));
            break;

        case 7:
            alert("Chương trình kết thúc!");
            break;

        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (choice !== 7);