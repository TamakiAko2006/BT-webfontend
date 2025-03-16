let employees = [];
let choice = 0;

do {
    choice = +prompt("\n1. Thêm nhân viên mới \n2. Xóa nhân viên theo id \n3. Cập nhật mức lương theo id \n4. Tìm kiếm nhân viên theo tên \n5. Thoát");

    switch (choice) {
        case 1:
            addEmployee();
            break;
        case 2:
            deleteEmployee();
            break;
        case 3:
            updateSalary();
            break;
        case 4:
            searchEmployee();
            break;
        case 5:
            alert("Chương trình kết thúc");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
            break;
    }
} while (choice !== 5);

function addEmployee() {
    let id = +prompt("Nhập ID nhân viên:");
    let name = prompt("Nhập tên nhân viên:");
    let position = prompt("Nhập vị trí nhân viên:");
    let salary = +prompt("Nhập mức lương:");
    employees.push({ id, name, position, salary });
    alert("Nhân viên đã được thêm");
}

function deleteEmployee() {
    let id = +prompt("Nhập ID nhân viên cần xóa:");
    let index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        let confirmDelete = confirm("Bạn có chắc muốn xóa nhân viên này không?");
        if (confirmDelete) {
            employees.splice(index, 1);
            alert("Nhân viên đã bị xóa");
        }
    } else {
        alert("Không tìm thấy nhân viên");
    }
}

function updateSalary() {
    let id = +prompt("Nhập ID nhân viên cần cập nhật lương:");
    let employee = employees.find(emp => emp.id === id);
    if (employee) {
        let newSalary = +prompt("Nhập mức lương mới:");
        employee.salary = newSalary;
        alert("Lương đã được cập nhật");
    } else {
        alert("Không tìm thấy nhân viên");
    }
}

function searchEmployee() {
    let name = prompt("Nhập tên nhân viên cần tìm:");
    let foundEmployees = employees.filter(emp => emp.name.toLowerCase().includes(name.toLowerCase()));
    if (foundEmployees.length > 0) {
        alert("Nhân viên tìm thấy: " + JSON.stringify(foundEmployees));
    } else {
        alert("Không tìm thấy nhân viên");
    }
}