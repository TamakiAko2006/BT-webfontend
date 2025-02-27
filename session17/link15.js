let radius = Number(prompt("nhập bán kính hình cầu: "));
if (!isNaN(radius)){
    let volume = Math.floor(4*Math.PI*Math.pow(radius,3)/3);
    alert("Thể tích khối cầu là: " + radius);
    let acreage = Math.floor(4*Math.PI*Math.pow(radius,2));
    alert("Diện tích khối cầu là: " + acreage);
    let perimeter = Math.max(2*Math.PI*radius);
    alert("Chu vi lớn nhất của hình cầu là: " + perimeter);
} else {
    alert("vui lòng nhập số hợp lí!");
}