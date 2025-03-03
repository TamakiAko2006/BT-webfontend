const spring = ["Mùa xuân"];
const summer = ["Mùa hè"];
const autum = ["Mùa thu"];
const winter = ["Mùa đông"];
let number1 = Number(prompt("Nhập vào 1 tháng bất kì trong năm: "));

if (!isNaN(number1)) {
    if ([1, 2, 3].includes(number1)) {
        alert(spring);
    } else if ([4, 5, 6].includes(number1)) {
        alert(summer);
    } else if ([7, 8, 9].includes(number1)) {
        alert(autumn);
    } else if ([10, 11, 12].includes(number1)) {
        alert(winter);
    } else {
        alert("Tháng không hợp lệ!");
    }
}