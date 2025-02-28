let toan = parseFloat(prompt("Nhập điểm Toán: "));
let van = parseFloat(prompt("Nhập điểm Văn: "));
let anh = parseFloat(prompt("Nhập điểm Anh: "));
let dtb = (toan + van + anh) / 3.0;
if (dtb >= 8) {
    alert("giỏi");
} else if (dtb >= 6.5) {
    alert("khá");
} else if (dtb >= 5) {
   alert("trung bình");
} else {
    alert("yếu");
}