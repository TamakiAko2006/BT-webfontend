do {
    choice = Number(
        prompt(
            "============== MENU ============\n" +
            "1. Tính diện tích hình tròn.\n" +
            "2. Tính chu vi hình tròn.\n" +
            "3. Tính diện tích hình chữ nhật.\n" +
            "4. Tính chu vi hình chữ nhật.\n" +
            "5. Thoát.\n" +
            "=================================\n" +
            "Lựa chọn của bạn:"
        )
    );

    switch (choice) {
        case 1:
            circular_area();
            break;

        case 2:
            circular_circumference();
            break;

        case 3:
            area_of_rectangle();
            break;

        case 4:
            perimeter_of_rectangle()
            break;

        case 5:
            alert("Thoát chương trình.");
            break;

        default:
            alert("Lựa chọn không hợp lệ! Vui lòng nhập từ 1 đến 5.");
    }
} while (choice !== 5);

function circular_area(){
    let r = Number(prompt("mời bạn nhập bán kính hình tròn: "));
    let circular_area = Math.pow(r,2) * Math.PI
    alert("diện tích hình tròn với bánh kính = " + r +" là: " + circular_area);
}

function circular_circumference(){
    let r = Number(prompt("mời bạn nhập bán kính hình tròn: "));
    let circular_circumference = Math.PI*2 * r 
    alert("chu vi hình tròn với bánh kính = " + r +" là: " + circular_circumference);
}

function area_of_rectangle(){
    let a = Number(prompt("mời bạn nhập chiều rộng hình chữ nhật: "));
    let b = Number(prompt("mời bạn nhập chiều dài hình chữ nhật: "));
    let area_of_rectangle = a*b
    alert("diện tích hình chữ nhật với chiều rộng = " + a +" và chiều dài = " + b + " là: " + area_of_rectangle);
}

function perimeter_of_rectangle(){
    let a = Number(prompt("mời bạn nhập chiều rộng hình chữ nhật: "));
    let b = Number(prompt("mời bạn nhập chiều dài hình chữ nhật: "));
    let perimeter_of_rectangle = (a+b)*2
    alert("chu vi hình chữ nhật với chiều rộng = " + a +" và chiều dài = " + b + " là: " + perimeter_of_rectangle);
}