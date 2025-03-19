let cart=[];
let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }
];

do {
    choice = +prompt(
        "==============MENU============\n" +
        "1. Xem danh sách sản phẩm có sẵn trong cửa hàng.\n" +
        "2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm.\n" +
        "3. Sắp xếp các sản phẩm trong cửa hàng theo giá.\n" +
        "4. Tính tổng tiền và hiển thị hóa đơn.\n" +
        "5. Thoát\n" +
        "=================================\n\n" +
        "Lựa chọn của bạn:"
    );

    switch (choice) {
        case 1:
            showProducts();
            break;

        case 2:
            let productid = prompt("Nhập id sản phẩm bạn muốn mua:");
            addToCart(productid);
            break;

        case 3:
            let sortPrice = prompt("Nhập cách xắp xếp bạn muốn (a giảm dần) và (b tăng dần):");
            sortCart();
            break;

        case 4:
            showCart();
            break;
        case 5:
            alert("Cảm ơn bạn đã mua hàng!");
            break;

        default:
            alert("Vui lòng nhập số từ 1 đến 5.");
    }
} while (choice !== 5);

function showProducts() {
    let message = "Danh sách sản phẩm:\n";
    products.forEach((product, index) => {
        message += `${index + 1}. ${product.name} - Số lượng: ${product.quantity} - Giá: ${product.price} VND\n`;
    });
    alert(message);
}

function addToCart(productid) {
    let product = products.find(p => p.id);

    if (!productid) {
        alert("Sản phẩm không tồn tại.");
        return;
    }

    if (product.quantity <= 0) {
        alert("Sản phẩm đã hết hàng.");
        return;
    }

    let cartItem = cart.find(item => item.id  === productid);
    if (cartItem) {
        cartItem.quantity++;
    } else {
        let amount = +prompt("nhập số lượng sản phẩm muốn mua");
        cart.push({ id: product.id, quantity: amount, price: product.price });
    }

    product.quantity--;
    alert(` Đã thêm ${products[productid].name} vào giỏ hàng.`);
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
        message += `${item.name} - Số lượng: ${item.quantity} - Giá: ${item.price} VND -> Thành tiền: ${cost} VND\n`;
    });
    message += `\nTổng tiền: ${total} VND`;
    alert(message);
}

function sortCart(){
    if(sortPrice = "a"){
        products.sort((a, b) => b.price - a.price);
    } else if(sortPrice = "b") {
        products.sort((a, b) => a.price - b.price);
    } else {
        alert("lựa chọn không hợp lệ!")
    }
    showCart();
}