let Numbers1 = +prompt("Mời bạn nhập số đầu tiên");
let Numbers2 = +prompt("Mời bạn nhập số thứ hai");
let choice = 0;
do {
    choice = +prompt("\n1. Cộng hai số \n2. Trừ hai số \n3. Nhân hai số \n4. Chia hai số \n5. Thoát");

    switch (choice) {
        case 1:
            sum(Numbers1, Numbers2);
            break;
        case 2:
            except(Numbers1, Numbers2);
            break;
        case 3:
            multiply(Numbers1, Numbers2);
            break;
        case 4:
            divide(Numbers1, Numbers2);
            break;
        case 5:
            alert("Chương trình kết thúc");
            break;
        default:
            alert("Số bạn nhập không hợp lệ");
            break;
    }
} while (choice == 5);

function sum(a, b) {
    let sum = a + b;
    alert(`${a} + ${b} = ${sum}`);
}
function except(a, b) {
    let except = a - b;
    alert(`${a} - ${b} = ${except}`);
}
function multiply(a, b) {
    let multiply = a * b;
    alert(`${a} * ${b} = ${multiply}`);
}
function divide(a, b) {
    let divide = a / b;
    alert(`${a} / ${b} = ${divide}`);
}