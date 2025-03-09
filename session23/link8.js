let numbers =[];
let n =+prompt("Mời bạn nhập số phần tử của mảng");
let check =0;
if(n>0){
      for (let i = 0; i <n; i++) {
        numbers[i]=+prompt("Mời bạn nhập giá trị thứ "+(i));
     }
     for (let i = 2; i <n; i++) {
     if ( numbers[i] !== numbers[i-1] + numbers[i - 2]){
         check++;
     }
     }
    if (check>0) {
        console.log("Mảng không phải là dãy Fibonacci.");
    }else{
        console.log("Mảng là dãy Fibonacci.");
    }
}else if(n<0){
    alert("Số lượng phần tử không được nhỏ hơn 0");
}else{
     alert("Mảng không có phần tử");
}