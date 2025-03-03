let Number1 = Number(prompt("nhập số thứ nhất: "));
let Number2 = Number(prompt("nhập số thứ hai: "));
let Number3 = Number(prompt("nhập số thứ ba: "));
let highest = Math.max(Number1,Number2,Number3);
if(!isNaN(Number1) && !isNaN(Number2) && !isNaN(Number3)){
    alert("số lớn nhất trong 3 số là: " + highest);
} else {
    alert("vui lòng nhập số hợp lệ!");
}