let choice;
let array = [];

do {
    choice = Number(
        prompt(
            "============== MENU ============\n" +
            "1. Nhập danh sách sinh viên.\n" +
            "2. Hiển thị danh sách sinh viên.\n" +
            "3. Tìm sinh viên theo tên.\n" +
            "4. Xóa sinh viên khỏi danh sách.\n" +
            "5. Thoát.\n" +
            "=================================\n" +
            "Lựa chọn của bạn:"
        )
    );

    switch (choice) {
        case 1:
            add_student();
            break;

        case 2:
            show_student();
            break;

        case 3:
            search_student();
            break;

        case 4:
            delete_student();
            break;

        case 5:
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ! Vui lòng nhập từ 1 đến 5.");
    }
} while (choice !== 5);

function add_student(){
    let count = Number(prompt("Nhập số sinh viên muốn thêm: "));
            if (isNaN(count) || count <= 0) {
                alert("Số sinh viên nhập vào không hợp lệ!");
            } else {
                for (let i = 0; i < count; i++) {
                    let inputValue = prompt("Nhập tên sinh viên: ");
                    array.push(inputValue);
                }
            }
}

function show_student(){
    if (array.length === 0) {
        alert("Danh sách sinh viên trống.");
    } else {
        alert("Danh sách sinh viên:\n" + array.join(", "));
    }
}

function search_student(){
    let searchName = prompt("Nhập tên sinh viên cần tìm: ");
            let position = array.indexOf(searchName);
            if (position !== -1) {
                alert("Sinh viên " + searchName + " ở vị trí " + (position + 1));
            } else {
                alert("Không tìm thấy sinh viên " + searchName);
            }
}

function delete_student(){
    let deleteName = prompt("Nhập tên sinh viên cần xóa: ");
            let deleteIndex = array.indexOf(deleteName);
            if (deleteIndex !== -1) {
                array.splice(deleteIndex, 1);
                alert("Đã xóa sinh viên " + deleteName);
            } else {
                alert("Không tìm thấy sinh viên " + deleteName);
            }
}