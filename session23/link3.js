let number =[];
let n =+prompt("Mời bạn nhập số phần tử của mảng")
let check=0;
let count=0;
if(Number.isInteger(n)&&n>0){
  for (let i = 0; i <n; i++) {
    number[i]=+prompt("Mời bạn nhập giá trị thứ "+(i));
    check++;
}
  if(check>0){
    for (let i = 0; i <n; i++){
      if(number[i]<0&&number[i]%1==0){
       count++;
      }
    }
    console.log(count);
  }else{
    console.log("Mảng không có phần tử");
  }
}else{
  alert("Số phần tử không hợp lệ");
}









if(check>0){
    
}else{
    console.log("Không có số nào lớn nhất ");
}