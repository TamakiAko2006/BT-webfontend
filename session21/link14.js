let width = Number(prompt("Nhập chiều ngang của hình chữ nhật:"));
let height = Number(prompt("Nhập chiều dọc của hình chữ nhật:"));

if (isNaN(width) || isNaN(height) || width < 2 || height < 2) {
    document.write("Vui lòng nhập số lớn hơn hoặc bằng 2 cho cả chiều ngang và chiều dọc.");
} else {
    document.write("*".repeat(width) + "<br>");

    for (let i = 1; i < height - 1; i++) {
        document.write("*" + "&nbsp;".repeat((width - 2) * 2) + "*<br>");
    }

    if (height > 1) {
        document.write("*".repeat(width) + "<br>");
    }
}