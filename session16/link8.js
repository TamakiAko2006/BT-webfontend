let firstnumber = Number(prompt("Hãy nhập số thứ nhất: "));
let secondnumber = Number(prompt("Hãy nhập số thứ hai: "));
let thirdnumber = Number(prompt("Hãy nhập số thứ ba: "));
let highestnumber = Math.max(firstnumber,secondnumber,thirdnumber);
if (!isNaN(firstnumber) && !isNaN(secondnumber) && !isNaN(thirdnumber)) {
    alert("số lớn nhất là:" + highestnumber);
} else {
    alert("Vui lòng nhập một số hợp lệ!");
}