let number= Number(prompt("Nhập số bất kì n: "));

if(Number.isInteger(number)){
    console.log("Ước của "+number+" là: ");
  for(let i=1;i<=number;i++){
       if(number%i==0){
        console.log(i+" ");
       }
  }
}else{
    console.log("Nhập không hợp lệ");
}