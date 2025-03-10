let choice;
let strings = "";
do {
    choice = +prompt(
        "==============MENU============\n1.Nhập chuỗi\n2.Hiển thị chuỗi\n3.Đếm số lượng các ký tự là chuỗi và số \n4.Chuyển đổi các ký tự\n5.Trộn lẫn các ký tự của chuỗi gốc với chuỗi thứ 2 \n6.Tách chuỗi thành các từ, sắp xếp chúng theo độ dài của từ, từ ngắn nhất đến dài nhất.\n7. Thoát\n\n=================================\n\n Lựa chọn của bạn:"
    );

    switch (choice) {
        case 1:
            strings = prompt("Nhập chuỗi:");
            break;

        case 2:
            alert(strings);
            break;

        case 3:
            let strings3 = (" ");
            let numbers = (" ");
            strings.split(" ");
            for(i = 0;i < strings.length;i++){
                if(!isNaN(strings) && strings !== " "){
                    numbers++;
                } else {
                    strings3++;
                }
                alert("chuỗi trên có: " + strings3 + "ký tự");
                alert("chuỗi trên có: " + numbers + "số");
            }
            break;

        case 4:
            let chuoiMoi2 ="";
            for(i=0;i<arr.length;i++){
                if(arr[i]===arr[i].toUpperCase()){
                    chuoiMoi2 += arr[i].toLowerCase();
                }else{
                    chuoiMoi2 += arr[i].toUpperCase()
                }
            }
            alert(chuoiMoi2);
            break;

        case 5:
            let strings2 = prompt("moi ban nhap chuoi moi");
            let kiTu = [];
            for (let i = 0; i < strings2.length; i++) {
                kiTu.push(strings2[i]);
            }
            for (let i = 0; i < strings.length; i++) {
                kiTu.push(strings[i]);
            }
            for (let i = kiTu.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let temp = kiTu[i];
                kiTu[i] = kiTu[j];
                kiTu[j] = temp;
            }
            let chuoiMoi = "";
            for (let i = 0; i < kiTu.length; i++) {
                chuoiMoi += kiTu[i];
            }

            console.log("Chuỗi ký tự sau khi trộn:", chuoiMoi);
                break;

        case 6:
            let test = strings.split(" ");

            for (let i = 0; i < test.length - 1; i++) {
                for (let j = 0; j < test.length - i - 1; j++) {
                    if (test[j].length > test[j + 1].length) {
                        let temp = test[j];
                        test[j] = test[j + 1];
                        test[j + 1] = temp;
                    }
                }
            }

            let sortString = test.join(" ");

            alert("Chuỗi sau khi sắp xếp từ ngắn đến dài:" + sortString);
            break;

        case 7:
            alert("Chương trình kết thúc!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
            break;
    }
} while (choice !== 7);