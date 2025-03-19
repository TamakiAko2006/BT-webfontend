let cart = [];
let products = [
    {
        id: 1,
        name: "tôi như ánh dương rực rỡ",
        price: 120000,
        quantity: 20,
        category: "Tiểu thuyết ngôn tình",
    },
    {
        id: 2,
        name: "tam sinh tam thế thập lý đào hoa",
        price: 110000,
        quantity: 21,
        category: "Tiểu thuyết kì ảo",
    },
    {
        id: 3,
        name: "Yêu em từ cái nhìn đầu tiên",
        price: 140000,
        quantity: 15,
        category: "Tiểu thuyết ngôn tình",
    },
    {
        id: 4,
        name: "Em vốn thích cô độc cho đến khi có anh",
        price: 80000,
        quantity: 30,
        category: "Tiểu thuyết học đường",
    }
];

let count = products.length + 1;

do {
    choice = +prompt(
        "==============MENU============\n" +
        "1. Hiển thị danh sách sách theo thể loại.\n" +
        "2. Thêm sách mới vào kho.\n" +
        "3. Tìm kiếm sách theo tên hoặc id.\n" +
        "4. Mua sách.\n" +
        "5. Sắp xếp sách theo giá.\n" +
        "6. Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng.\n" +
        "7. Hiển thị tổng số lượng sách trong kho.\n" +
        "8. Thoát.\n" +
        "=================================\n\n" +
        "Lựa chọn của bạn:"
    );

    switch (choice) {
        case 1:
            showProductbyCategory();
            break;

        case 2:
            name = prompt("Mời bạn nhập tên sách");
            price = prompt("Mời bạn nhập giá sách");
            category = prompt("Mời bạn nhập loại sách");
            quantity = prompt("Mời bạn nhập số lượng sách");
            let contact = {
                id: count,
                name: name,
                price: price,
                category: category,
                quantity: quantity
            }
            count++;
            products.push(contact);
            break;

        case 3:
            choice = +prompt("Bạn muốn tìm kiếm theo: 1. Tên \n2. ID");
            if (choice == 1) {
                name = prompt("Nhập tên cuốn sách muốn tìm: ");
                let found = products.find(item => item.name === name);
                if (found) {
                    console.log(found);
                } else {
                    console.log("Không tìm thấy cuốn sách có tên " + name);
                }
            } else if (choice == 2) {
                id = +prompt("Nhập ID cuốn sách muốn tìm: ");
                let found = products.find(item => item.id === id);
                if (found) {
                    console.log(found);
                } else {
                    console.log("Không tìm thấy sản phẩm có ID là " + id);
                }
            } else {
                console.log("Lựa chọn không hợp lệ");
            }
            break;

        case 4:
            id = +prompt("Nhập ID sản phẩm muốn mua: ");
            let product = products.find(item => item.id === id);
            if (product) {
                let n = Number(prompt("Mời bạn nhập số lượng muốn mua"));
                if (product.quantity >= n) {
                    product.quantity -= n;
                    let purchase = {
                        name: product.name,
                        quantity: n,
                        price: product.price
                    }
                    cart.push(purchase);
                } else {
                    console.log("Không đủ số lượng sách trong kho");
                }
            } else {
                console.log("Không tìm thấy cuốn sách có ID là " + id);
            }
            console.log(cart);
            break;

        case 5:
            let choice1 = prompt("1. Tăng dần\n2. Giảm dần");
            if (choice1 == 1) {
                products.sort((a, b) => a.price - b.price);
            } else if (choice1 == 2) {
                products.sort((a, b) => b.price - a.price);
            } else {
                console.log("Lựa chọn không hợp lệ");
            }
            console.log(products);
            break;

        case 6:
            let money = cart.reduce((total, item) => total + item.quantity * item.price, 0);
            let num = cart.reduce((total, item) => total + item.quantity, 0);
            console.log("Số lượng sách đã mua là: " + num);
            console.log("Tổng số tiền phải thanh toán là: " + money);
            break;

        case 7:
            let sumQuantity = products.reduce((total, item) => total + Number(item.quantity), 0);
            console.log("Tổng số lượng sách còn lại trong kho là: " + sumQuantity);
            break;

        case 8:
            alert("Cảm ơn bạn đã mua hàng!");
            break;

        default:
            alert("Vui lòng nhập số từ 1 đến 8.");
    }
} while (choice !== 8);

function showProductbyCategory() {
    let choice = +prompt("\n1. Tiểu thuyết ngôn tình\n2. Tiểu thuyết kì ảo\n3. Tiểu thuyết học đường\n");
    let categoryName;
    if (choice == 1) categoryName = "Tiểu thuyết ngôn tình";
    else if (choice == 2) categoryName = "Tiểu thuyết kì ảo";
    else if (choice == 3) categoryName = "Tiểu thuyết học đường";
    else {
        console.log("Lựa chọn không hợp lệ");
        return;
    }
    let result = products.filter(item => item.category === categoryName);
    console.log(result);
}
