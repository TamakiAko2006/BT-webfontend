let choice;
do {
    choice = parseInt(prompt(
        "==============MENU============\n" +
        "1. Hiển thị danh sách theo hãng\n" +
        "2. Thêm sản phẩm vào kho\n" +
        "3. Tìm kiếm sản phẩm\n" +
        "4. Mua sản phẩm\n" +
        "5. Sắp xếp sản phẩm theo giá\n" +
        "6. Tính tổng tiền trong giỏ hàng\n" +
        "7. Hiển thị tổng giá trị kho hàng\n" +
        "8. Hiển thị sản phẩm theo hãng\n" +
        "9. Thoát chương trình\n" +
        "=================================\n" +
        "Lựa chọn của bạn:"
    ));

    switch (choice) {
        case 1:
            displayProducts();
            break;
        case 2:
            addProduct();
            break;
        case 3:
            searchProduct();
            break;
        case 4:
            buyProduct();
            break;
        case 5:
            sortProducts();
            break;
        case 6:
            calculateCartTotal();
            break;
        case 7:
            displayStockTotal();
            break;
        case 8:
            displayByBrand();
            break;
        case 9:
            alert("Chương trình kết thúc!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
} while (choice !== 9);

let products = [];
let cart = [];
let count = 0;

function addProduct() {
    let name = prompt("Nhập tên điện thoại:");
    let price = parseFloat(prompt("Nhập giá điện thoại:"));
    let companyChoice = prompt("Nhập hãng điện thoại:\n1. Samsung\n2. iPhone\n3. Xiaomi");

    let company = companyChoice == "1" ? "Samsung" :
                  companyChoice == "2" ? "iPhone" :
                  companyChoice == "3" ? "Xiaomi" : "Khác";

    let quantity = parseInt(prompt(`Nhập số lượng điện thoại ${company}:`));

    products.push({ id: count++, name, price, company, quantity });
    console.log("Sản phẩm đã thêm:", products[products.length - 1]);
}

function displayProducts() {
    let brand = prompt("Nhập hãng muốn hiển thị:\n1. Samsung\n2. iPhone\n3. Xiaomi");
    let brandName = brand == "1" ? "Samsung" :
                    brand == "2" ? "iPhone" :
                    brand == "3" ? "Xiaomi" : "Khác";

    let result = products.filter(p => p.company === brandName);
    console.log(result.length > 0 ? result : "Không có sản phẩm thuộc hãng này.");
}

function searchProduct() {
    let choice = prompt("Tìm kiếm theo: \n1. Tên \n2. ID");
    
    if (choice == "1") {
        let name = prompt("Nhập tên điện thoại:");
        let found = products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
        console.log(found.length > 0 ? found : `Không tìm thấy điện thoại có tên "${name}".`);
    } else if (choice == "2") {
        let id = parseInt(prompt("Nhập ID điện thoại:"));
        let product = products.find(p => p.id === id);
        console.log(product ? product : `Không tìm thấy điện thoại có ID "${id}".`);
    } else {
        console.log("Lựa chọn không hợp lệ.");
    }
}

function buyProduct() {
    let id = parseInt(prompt("Nhập ID điện thoại muốn mua:"));
    let product = products.find(p => p.id === id);
    
    if (!product) {
        console.log(`Không tìm thấy điện thoại có ID ${id}.`);
        return;
    }

    let quantity = parseInt(prompt(`Nhập số lượng muốn mua (còn ${product.quantity} sản phẩm):`));

    if (product.quantity >= quantity) {
        product.quantity -= quantity;
        cart.push({ name: product.name, quantity, price: product.price });
        console.log("Đã thêm vào giỏ hàng:", cart);
    } else {
        console.log(product.quantity === 0 ? "Sản phẩm đã hết hàng." : "Không đủ số lượng trong kho.");
    }
}

function sortProducts() {
    let choice = prompt("Sắp xếp theo giá:\n1. Tăng dần\n2. Giảm dần");
    
    if (choice === "1") {
        products.sort((a, b) => a.price - b.price);
    } else if (choice === "2") {
        products.sort((a, b) => b.price - a.price);
    } else {
        console.log("Lựa chọn không hợp lệ.");
        return;
    }
    console.log("Danh sách sản phẩm sau khi sắp xếp:", products);
}

function calculateCartTotal() {
    let total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
    console.log(`Tổng tiền trong giỏ hàng: ${total} VND`);
}

function displayStockTotal() {
    let total = products.reduce((sum, item) => sum + (item.quantity * item.price), 0);
    console.log(`Tổng số tiền của các điện thoại trong kho: ${total} VND`);
}

function displayByBrand() {
    let brands = ["Samsung", "iPhone", "Xiaomi"];
    brands.forEach(brand => {
        let result = products.filter(p => p.company === brand);
        if (result.length > 0) {
            console.log(`Các điện thoại hãng ${brand}:`, result);
        }
    });
}
