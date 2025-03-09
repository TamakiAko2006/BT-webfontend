let numbers =[];
let n =+prompt("Mời bạn nhập số phần tử của mảng");
let max=0;
let max2=0;
let indexMax=0;
if(n>0){
      for (let i = 0; i <n; i++) {
        numbers[i]=prompt("Mời bạn nhập giá trị thứ "+(i));
     }
     max=numbers[0];
     for (let i = 0; i <n; i++) {
      if(max<numbers[i])
        max=numbers[i];
         indexMax=i;
     }
     
     numbers.splice(indexMax,1);
   
     max2=numbers[0];
     for (let i = 0; i <n; i++) {
        if(max2<numbers[i])
            max2=numbers[i];
         }
     console.log(max2);
}else if(n<0){
    alert("Số lượng phần tử không được nhỏ hơn 0");
}else{
     alert("Mảng không có phần tử");
}