function numbers(arr){
    let number = prompt("mời bạn nhập số nguyên bất kì: ");
    arr = number.split("");
    if(!isNaN(number)){
        let temp = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = arr.length - 1; j > i; j--) {
                if (arr[j] > arr[j - 1]) { 
                    temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        let number1 = arr.join("");
        console.log(number1);
    }else{
        console.log("dữ liệu không hợp lệ!");
    }
}
numbers();