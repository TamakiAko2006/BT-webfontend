let n =0;
let even=0;
let od =0;
for(i=0;i<5;i++){
    n=Number(prompt("nhập số"));
    if(n % 2 !== 0){
        od ++;
    }else{
        even++;
    }
}
console.log("có"+even+"số chẵn");
console.log("có"+od+"số lẻ");