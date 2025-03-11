let products = [
    { name: "mì tôm", quantity: 5, price: 5000 },
    { name: "bánh mì", quantity: 12, price: 15000 },
    { name: "bánh bao", quantity: 5, price: 8000 },
    { name: "mèn mén", quantity: 30, price: 20000 }
];

let cart = [];
let choice;

do {
    choice = +prompt(
        "==============MENU============\n" +
        "1. Xem danh sách sản phẩm có sẵn trong cửa hàng.\n" +
        "2. Chọn sản phẩm để mua bằng cách nhập tên sản phẩm.\n" +
        "3. Tính tổng tiền và hiển thị hóa đơn.\n" +
        "4. Thoát\n" +
        "=================================\n\n" +
        "Lựa chọn của bạn:"
    );

    switch (choice) {
        case 1:
            showProducts();
            break;

        case 2:
            let productName = prompt("Nhập tên sản phẩm bạn muốn mua:");
            addToCart(productName);
            break;

        case 3:
            showCart();
            break;

        case 4:
            alert("Cảm ơn bạn đã mua hàng!");
            break;

        default:
            alert("Vui lòng nhập số từ 1 đến 4.");
    }
} while (choice !== 4);

function showProducts() {
    let message = "Danh sách sản phẩm:\n";
    products.forEach((product, index) => {
        message += `${index + 1}. ${product.name} - Số lượng: ${product.quantity} - Giá: ${product.price} VND\n`;
    });
    alert(message);
}

function addToCart(productName) {
    let product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());

    if (!product) {
        alert("Sản phẩm không tồn tại.");
        return;
    }

    if (product.quantity <= 0) {
        alert("Sản phẩm đã hết hàng.");
        return;
    }

    let cartItem = cart.find(item => item.name === productName);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ name: product.name, quantity: 1, price: product.price });
    }

    product.quantity--;
    alert(` Đã thêm ${productName} vào giỏ hàng.`);
}

function showCart() {
    if (cart.length === 0) {
        alert("Giỏ hàng trống.");
        return;
    }

    let message = "HÓA ĐƠN MUA HÀNG:\n";
    let total = 0;
    cart.forEach(item => {
        let cost = item.quantity * item.price;
        total += cost;
        message += `${item.name} - Số lượng: ${item.quantity} - Giá: ${item.price} -> Thành tiền: ${cost} VND\n`;
    });
    message += `\nTổng tiền: ${total} VND`;
    alert(message);
}