let restaurants = [];

function menu() {
    let choice;

    do {
        choice = +prompt(
            "============== MENU ============\n" +
            "1. Thêm món ăn vào danh mục.\n" +
            "2. Xóa món ăn theo tên.\n" +
            "3. Cập nhật thông tin món ăn.\n" +
            "4. Hiển thị toàn bộ menu.\n" +
            "5. Tìm kiếm món ăn theo tên.\n" +
            "6. Thoát chương trình.\n" +
            "=================================\n" +
            "\nLựa chọn của bạn:"
        );

        switch (choice) {
            case 1:
                let name = prompt("Mời bạn nhập tên món ăn:").trim();
                let price = +prompt("Mời bạn nhập giá món ăn:");
                let description = prompt("Mời bạn nhập mô tả món ăn:");

                let dish = {
                    name: name,
                    price: price,
                    description: description
                };

                restaurants.push(dish);
                console.log("Món ăn đã được thêm vào danh mục!");
                break;

            case 2:
                let deleteName = prompt("Mời bạn nhập tên món ăn muốn xóa:").trim().toLowerCase();
                let indexDelete = restaurants.findIndex(item => item.name.toLowerCase() === deleteName);

                if (indexDelete !== -1) {
                    let confirmDelete = confirm("Bạn có chắc muốn xóa món ăn này không?");
                    if (confirmDelete) {
                        restaurants.splice(indexDelete, 1);
                        console.log("Xóa món ăn thành công!");
                    }
                } else {
                    console.log("Không tìm thấy món ăn có tên:", deleteName);
                }
                break;

            case 3:
                let updateName = prompt("Mời bạn nhập tên món ăn muốn cập nhật:").trim().toLowerCase();
                let indexUpdate = restaurants.findIndex(item => item.name.toLowerCase() === updateName);

                if (indexUpdate !== -1) {
                    restaurants[indexUpdate].name = prompt("Mời bạn nhập tên mới của món ăn:");
                    restaurants[indexUpdate].price = +prompt("Mời bạn nhập giá mới:");
                    restaurants[indexUpdate].description = prompt("Mời bạn nhập mô tả mới:");

                    console.log("Cập nhật món ăn thành công!");
                } else {
                    console.log("Không tìm thấy món ăn có tên:", updateName);
                }
                break;

            case 4:
                console.log("Danh sách món ăn:");
                console.table(restaurants);
                break;

            case 5:
                let searchName = prompt("Mời bạn nhập tên món ăn muốn tìm:").trim().toLowerCase();
                let foundDish = restaurants.find(item => item.name.toLowerCase() === searchName);

                if (foundDish) {
                    console.log("Món ăn tìm thấy:");
                    console.table(foundDish);
                } else {
                    console.log("Không tìm thấy món ăn có tên:", searchName);
                }
                break;

            case 6:
                alert("Chương trình kết thúc! Hẹn gặp lại.");
                break;

            default:
                alert("Lựa chọn không hợp lệ! Vui lòng thử lại.");
                break;
        }
    } while (choice !== 6);
}

menu();