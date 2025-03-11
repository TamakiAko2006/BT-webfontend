let users = [];

function register() {
    let email = prompt("Nhập email muốn đăng ký:");
    if (users.includes(email)) {
        alert("Tài khoản đã tồn tại!");
    } else {
        if (email.includes("@") && (email.endsWith(".com") || email.endsWith(".vn"))) {
            users.push(email);
            alert("Đăng ký thành công!");
        } else {
            alert("Email không hợp lệ!");
        }
    }
}
register();