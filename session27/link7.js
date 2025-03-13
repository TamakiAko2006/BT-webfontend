function number(arr){

    if(isNaN(arr)){
       for(i=1;i<arr.length;i++){
        if(arr[i] -1 != arr[i-1]){
            let number = arr[i]-1;
            console.log(number);
        }
       }
    }else{
        console.log("dữ liệu không hợp lệ");
    }
}
number([1,2,3,5]);
number([1,2,4,5]);