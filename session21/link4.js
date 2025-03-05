let a =prompt("mời bạn nhập a");
let b =prompt("mời bạn nhập b");
let c =prompt("mời bạn nhập c");
let delta = Math.pow(b,2)-4*a*c;
let sprtdelta = Math.sqrt(delta);
if(delta>0){
    let x1 = (-b + sprtdelta) /(2*a);
    let x2 = (-b - sprtdelta) /(2*a);
    alert("Phương trình có 2 nghiệm phân biệt: X1 ="+x1+";X2="+x2);
}else if(delta ==0){
    let x = -b /2/a;
    alert("phương trình có nghiệm kép x ="+x);
}else{
    alert("phương trình vô nghiệm");
}