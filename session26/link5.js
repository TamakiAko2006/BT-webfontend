function number(arr) {
    arr = [];
    for (i = 0; i < 10; i++) {
        arr[i] = prompt("nhap phan tu thu " + (i + 1) + ":");
    }
    if (isNaN(arr)) {
       if(arr.length>0){
          let max = arr.reduce((acc,curr) =>(curr >acc ? curr :acc), arr[0]);
          console.log(max);
       }else{
        console.log("mang ko co phan tu");
       }
    }else{
        console.log("du lieu ko hop le");
    }
}
number();