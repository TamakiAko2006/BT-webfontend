let a =parseFloat(prompt("nhập cạnh 1: "));
let b =parseFloat(prompt("nhập cạnh 2: "));
let c =parseFloat(prompt("nhập cạnh 3: "));
let a1 = Math.pow(a,2);
let b1 = Math.pow(b,2);
let c1 = Math.pow(c,2);
if(a+b>c && a+c>b && b+c>a){
    if(a==b && a==c){
        alert("tam giác đều");
    }else if(a==b ||a==c ||b==c){
        alert("tam giác cân");
    }else if(a1 == b1 +c1 ||b1 == a1 + c1 ||c1 == a1 + b1){
        alert("tam giác vuông");
    }else{
        alert("tam giác thường");
    }
}else{
    alert("không phải tam giác")
}