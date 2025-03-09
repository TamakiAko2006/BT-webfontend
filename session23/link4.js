let number =[];
let n =+prompt("Mời bạn nhập số phần tử của mảng")
if(n>0){
  for (let i = 0; i <n; i++) {
    number[i]=prompt("Mời bạn nhập giá trị thứ "+(i));
}
 for (let i = 0; i <n; i++) {
  if(number[i]/1==number[i]){
      console.log(number[i]);
  }
}
}else{
  alert("Không có ký tự số");
}