let choice = 0;
let array = [];
let inputValue = 0;
let position = 0;

do {
    choice = Number(prompt("Menu    1. Nhập vào mảng   2. Hiển thị mảng   3. Thêm phần tử   4. Sửa phần tử   5. Xóa phần tử   6. Thoát"));
    
    switch (choice) {
        case 1:
            inputValue = prompt("Mời bạn nhập phần tử muốn thêm");
            array.unshift(inputValue);
            break;
        case 2:
            console.log(array);
            break;
        case 3:
            inputValue = prompt("Mời bạn nhập phần tử muốn thêm");
            array.unshift(inputValue);
            break;
        case 4:
            position = prompt("Mời bạn nhập vị trí muốn sửa");
            inputValue = prompt("Mời bạn nhập phần tử muốn thay vào");
            array.splice(position, 1, inputValue);
            break;
        case 5:
            position = prompt("Mời bạn nhập vị trí muốn xóa");
            array.splice(position, 1);
        case 6:
            alert("Tạm biệt");
        default:
            alert("Không hợp lệ");
    }
} while (choice != 6);