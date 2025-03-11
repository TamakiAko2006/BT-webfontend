let number1 = +prompt("Mời bạn nhập số thứ nhất");
let number2 = +prompt("Mời bạn nhập số thứ hai");
function sum (a,b) {
    if(a%1==0 && b%1==0 && Number.isInteger(a) && Number.isInteger(b)){
    console.log(a+b);
    return;
}
console.log("Dữ liệu không hợp lệ");
}
sum(number1,number2);