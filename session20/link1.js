let number = +prompt("Mời bạn nhập số");
let sum=0;
if(number > 0 && Number.isInteger(number) ){
    for(let i=0;i<number+1;i++){
        sum +=i;
     }
      alert(sum);
}else{
    alert("dữ liệu nhập vào không hợp lệ");
}