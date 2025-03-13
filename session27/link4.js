let arr = [];
do {
  menu();
  switch (choice) {
    case 1:
      input();
      break;
    case 2:
      tb(arr);
      break;
    case 3:
      maxChan(arr);
      break;
    case 4:
      maxLe(arr);
      break;
    case 5:
      console.log("Chương trình kết thúc");
      break;
    default:
      console.log("Nhập không hợp lệ");
      break;
  }

} while (choice != 5);
function menu() {
  choice = +prompt("   Menu\n1. Nhập danh sách số nguyên.\n2. Tính trung bình các số.\n3. Tìm số chẵn lớn nhất.\n4. Tìm số lẻ nhỏ nhất.\n5. Thoát.\n\n Mời bạn nhập lựa chọn");
}
function input() {
  let n = +prompt("Mời bạn số lượng phần tử");
  if (n > 0) {
    for (let i = 0; i < n; i++) {
      arr[i] = +prompt(`Mời bạn nhập phần tử thứ ${i + 1}`);
    }
  } else {
    console.log("Số lượng không hợp lệ");
  }
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i]) || arr[i] % 1 != 0){
    console.log("Dữ liệu không hợp lệ. Mời nhập lại");
    return;
  }
}
}function tb(arr) {
  let sum = Number(arr.reduce((acc, curr) => acc + curr, 0));
  let tb = sum / arr.length;
  console.log(` Trung bình các số là ${tb}`);
}
function maxChan(arr) {
  let even = arr.filter((num) => num % 2 == 0);
  if(even.length==0){
    console.log("Không có số chẵn");
    return;
  }
  let max = Math.max(...even);
  console.log(` Số chẵn lớn nhất là: ${max}`);

}
function maxLe(arr) {
  let odd = arr.filter((num) => num % 2 != 0);
  if(odd.length==0){
    console.log("Không có số lẻ");
    return
  }
  let min = Math.min(...odd);
  console.log(` Số lẻ nhỏ nhất là: ${min}`);
}