let numbers =[];
let n =+prompt("Mời bạn nhập số phần tử của mảng")
let count=0;
let sum=0;
let number=0;
if(n>0){
      for (let i = 0; i <n; i++) {
        numbers[i]=prompt("Mời bạn nhập giá trị thứ "+(i));
     }
     for (let i = 0; i <n; i++) {
       if(numbers[i]/1==numbers[i]){
        number=+numbers[i]
        sum=sum+number
         count++;
      }
      }
     if(count>0){
       alert(sum);
    }else{
      alert("Không có phần tử nào là số");
     }
}else if(n<0){
    alert("Số lượng phần tử không được là âm")
}else{
     alert("Mảng không có phần tử");
}