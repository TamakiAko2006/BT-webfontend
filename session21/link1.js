let n =0;
let sum=0;
for(i=0;i<5;i++){
    n=Number(prompt("nhập số"));
    if(n % 2 !== 0){
        sum += n;
    }
}
alert("tổng các số lẻ là:"+sum);