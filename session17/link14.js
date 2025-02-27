let radius = Number(prompt("nhập bán kính hình trụ: "));
let height = Number(prompt("nhập chiều cao hình trụ: "));
if (!isNaN(radius) && !isNaN(height)){
    let surrounding_area = Math.floor(2*Math.PI*radius*height);
    alert("diện tích xung quanh hình trụ là: " + surrounding_area);
    let total_area = Math.floor(2*Math.PI*radius*height + 2*Math.PI*Math.pow(radius,2));
    alert("diện tích toàn phần hình trụ là: " + total_area);
    let volume = Math.floor(Math.PI*Math.pow(radius,2)*height);
    alert("thể tích hình trụ là: " + volume);
    let bottom_circumference = Math.floor(2*Math.PI*radius);
    alert("Chu vi đáy là: " + bottom_circumference);
} else {
    alert("vui lòng nhập số hợp lí!");
}