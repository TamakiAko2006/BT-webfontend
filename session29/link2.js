let products = [];
let count = 0;

function menu() {
    let choice;

    do {
        choice = +prompt(
            "============== MENU ============\n" +
            "1. Thêm sản phẩm vào danh sách sản phẩm.\n" +
            "2. Hiển thị tất cả sản phẩm.\n" +
            "3. Hiển thị chi tiết sản phẩm theo ID.\n" +
            "4. Cập nhật thông tin sản phẩm theo ID.\n" +
            "5. Xóa sản phẩm theo ID.\n" +
            "6. Lọc sản phẩm theo khoảng giá.\n" +
            "7. Thoát chương trình.\n" +
            "=================================\n" +
            "\nLựa chọn của bạn:"
        );

        switch (choice) {
            case 1:
                let name = prompt("Mời bạn nhập tên sản phẩm:");
                let price = +prompt("Mời bạn nhập giá sản phẩm:");
                let category = prompt("Mời bạn nhập danh mục sản phẩm:");
                let quantity = +prompt("Mời bạn nhập số lượng sản phẩm trong kho:");

                let product = {
                    id: count,
                    name: name,
                    price: price,
                    category: category,
                    quantity: quantity
                };
                count++;
                products.push(product);
                console.log("Đã thêm sản phẩm thành công!");
                break;

            case 2:
                console.log("Danh sách sản phẩm:");
                console.table(products);
                break;

            case 3:
                let idView = +prompt("Nhập ID sản phẩm muốn xem:");
                let productView = products.find(item => item.id === idView);
                if (productView) {
                    console.log("Chi tiết sản phẩm:");
                    console.table(productView);
                } else {
                    console.log("Không tìm thấy sản phẩm có ID:", idView);
                }
                break;

            case 4:
                let idUpdate = +prompt("Nhập ID sản phẩm muốn cập nhật:");
                let indexUpdate = products.findIndex(item => item.id === idUpdate);
                if (indexUpdate !== -1) {
                    products[indexUpdate].name = prompt("Mời bạn nhập tên sản phẩm mới:");
                    products[indexUpdate].price = +prompt("Mời bạn nhập giá sản phẩm mới:");
                    products[indexUpdate].category = prompt("Mời bạn nhập danh mục sản phẩm mới:");
                    products[indexUpdate].quantity = +prompt("Mời bạn nhập số lượng sản phẩm mới:");
                    console.log("Cập nhật sản phẩm thành công!");
                } else {
                    console.log("Không tìm thấy sản phẩm có ID:", idUpdate);
                }
                break;

            case 5:
                let idDelete = +prompt("Nhập ID sản phẩm muốn xóa:");
                let indexDelete = products.findIndex(item => item.id === idDelete);
                if (indexDelete !== -1) {
                    let confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm này không?");
                    if (confirmDelete) {
                        products.splice(indexDelete, 1);
                        console.log("Xóa sản phẩm thành công!");
                    }
                } else {
                    console.log("Không tìm thấy sản phẩm có ID:", idDelete);
                }
                break;

            case 6:
                let minPrice = +prompt("Nhập khoảng giá tối thiểu:");
                let maxPrice = +prompt("Nhập khoảng giá tối đa:");
                let filteredProducts = products.filter(item => item.price >= minPrice && item.price <= maxPrice);
                if (filteredProducts.length > 0) {
                    console.log(`Sản phẩm trong khoảng giá từ ${minPrice} đến ${maxPrice}:`);
                    console.table(filteredProducts);
                } else {
                    console.log(`Không có sản phẩm nào trong khoảng giá từ ${minPrice} đến ${maxPrice}.`);
                }
                break;

            case 7:
                alert("Chương trình kết thúc!");
                break;

            default:
                alert("Lựa chọn không hợp lệ! Vui lòng chọn lại.");
                break;
        }
    } while (choice !== 7);
}

menu();