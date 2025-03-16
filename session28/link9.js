let library = [];

function main() {
    let running = true;
    while (running) {
        let choice = parseInt(prompt("Chọn chức năng:\n1. Thêm sách\n2. Hiển thị danh sách sách\n3. Tìm sách theo tiêu đề\n4. Cập nhật trạng thái mượn/trả sách\n5. Xóa sách theo ID\n6. Sắp xếp sách theo giá tăng dần\n7. Thoát"));
        
        switch (choice) {
            case 1:
                let id = parseInt(prompt("Nhập ID sách: "));
                let title = prompt("Nhập tiêu đề sách: ");
                let author = prompt("Nhập tác giả: ");
                let year = parseInt(prompt("Nhập năm xuất bản: "));
                let price = parseFloat(prompt("Nhập giá sách: "));
                let isAvailable = confirm("Sách có sẵn không? (OK: Có, Cancel: Không)");
                addBook(id, title, author, year, price, isAvailable);
                break;
            case 2:
                displayBooks();
                break;
            case 3:
                let searchTitle = prompt("Nhập tiêu đề sách cần tìm: ");
                console.log(findBookByTitle(searchTitle));
                break;
            case 4:
                let bookId = parseInt(prompt("Nhập ID sách cần cập nhật trạng thái: "));
                let status = confirm("Sách có sẵn không? (OK: Có, Cancel: Không)");
                updateBookStatus(bookId, status);
                break;
            case 5:
                let removeId = parseInt(prompt("Nhập ID sách cần xoá: "));
                removeBookById(removeId);
                break;
            case 6:
                sortBooksByPrice();
                console.log("Danh sách sau khi sắp xếp:");
                displayBooks();
                break;
            case 7:
                running = false;
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
        }
    }
}

main();

function addBook(id, title, author, year, price, isAvailable) {
    library.push({ id, title, author, year, price, isAvailable });
}

function displayBooks() {
    console.log("Danh sách sách trong thư viện:");
    library.forEach(book => {
        console.log(`${book.id} - ${book.title} - ${book.author} - ${book.year} - ${book.price} VND - ${book.isAvailable ? "Còn sách" : "Hết sách"}`);
    });
}

function findBookByTitle(title) {
    return library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

function updateBookStatus(id, status) {
    let book = library.find(book => book.id === id);
    if (book) {
        book.isAvailable = status;
    } else {
        console.log("Không tìm thấy sách với ID này.");
    }
}

function removeBookById(id) {
    library = library.filter(book => book.id !== id);
}

function sortBooksByPrice() {
    library.sort((a, b) => a.price - b.price);
}