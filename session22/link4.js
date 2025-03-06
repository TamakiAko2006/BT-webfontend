let numbers = prompt("nhập số bất kì");
arr = numbers.split();
let max = arr[0];
if (!isNaN(numbers)) {
    for (i = 0; i < numbers.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max + " là số lớn nhất");
}else{
    console.log("không hợp lệ");
}