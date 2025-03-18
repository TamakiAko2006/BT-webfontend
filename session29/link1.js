let contactList = [];
let count = 0;

function menu(chon, name, email, phone) {
    do {
        chon = +prompt(
            "============== MENU ============\n" +
            "1. Thêm đối tượng Contact vào danh bạ.\n" +
            "2. Hiển thị danh sách danh bạ.\n" +
            "3. Tìm kiếm thông tin Contact theo số điện thoại.\n" +
            "4. Cập nhật thông tin Contact (name, email, phone) theo id.\n" +
            "5. Xóa một đối tượng Contact khỏi danh bạ theo id.\n" +
            "6. Thoát chương trình.\n" +
            "=================================\n" +
            "\nLựa chọn của bạn:"
        );

        switch (chon) {
            case 1:
                name = prompt("Mời bạn nhập tên:");
                email = prompt("Mời bạn nhập email:");
                phone = prompt("Mời bạn nhập số điện thoại:");
                let contact = {
                    id: count,
                    name: name,
                    email: email,
                    phone: phone
                };
                count++;
                contactList.push(contact);
                console.log("Đã thêm liên hệ thành công!");
                break;

            case 2:
                console.log("Danh sách danh bạ:");
                console.table(contactList);
                break;

            case 3:
                phone = prompt("Mời bạn nhập số điện thoại muốn tìm:");
                let foundContacts = contactList.filter(contact => contact.phone === phone);
                if (foundContacts.length > 0) {
                    console.log("Thông tin liên hệ tìm thấy:");
                    console.table(foundContacts);
                } else {
                    console.log("Không tìm thấy người dùng có số điện thoại:", phone);
                }
                break;

            case 4:
                let idUpdate = +prompt("Nhập ID liên hệ muốn cập nhật:");
                let indexUpdate = contactList.findIndex(contact => contact.id === idUpdate);
                if (indexUpdate !== -1) {
                    contactList[indexUpdate].name = prompt("Mời bạn nhập tên mới:");
                    contactList[indexUpdate].email = prompt("Mời bạn nhập email mới:");
                    contactList[indexUpdate].phone = prompt("Mời bạn nhập số điện thoại mới:");
                    console.log("Cập nhật thành công!");
                } else {
                    console.log("Không tìm thấy người dùng có ID:", idUpdate);
                }
                break;

            case 5:
                let idDelete = +prompt("Nhập ID liên hệ muốn xóa:");
                let indexDelete = contactList.findIndex(contact => contact.id === idDelete);
                if (indexDelete !== -1) {
                    let confirmDelete = confirm("Bạn có chắc muốn xóa liên hệ này không?");
                    if (confirmDelete) {
                        contactList.splice(indexDelete, 1);
                        console.log("Xóa thành công!");
                    }
                } else {
                    console.log("Không tìm thấy người dùng có ID:", idDelete);
                }
                break;

            case 6:
                alert("Chương trình kết thúc!");
                break;

            default:
                alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
                break;
        }
    } while (chon !== 6);
}

menu();