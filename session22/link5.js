let numberArray = prompt("nhập dãy số 5 chữ số bất kì");
arr = numberArray.split("");
let sumod = 0;
let sumeven = 0;
if (arr.length == 5 && !isNaN(numberArray)) {
    for(i=0;i<5;i++){
        if(arr[i] % 2 == 0){
            sumeven += parseInt(arr[i]);
        }else{
            sumod += parseInt(arr[i]);
        }
    }
}
console.log("tổng số chẵn là:"+sumeven);
console.log("tổng số lẻ là:"+sumod);