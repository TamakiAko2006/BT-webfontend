let number=+prompt("Mời bạn nhập số muốn kiểm tra");
function primeNumber(a) {
  if (!Number.isInteger(a)) {
    console.log("Dữ liệu không hợp lệ");
    return;
  }
  if(a<0){
    console.log("Không phải là số nguyên dương");
    return;
  }
  if(a==2||a==3||a==5||a==7){
     console.log("Là số nguyên tố");
    return;
  }
  if(a%2 !=0&&a%3!=0&&a%5!=0&&a%7!=0){
    console.log("Là số nguyên tố");
    return;
  }
 console.log("Không phải là số nguyên tố");
}
primeNumber(number);