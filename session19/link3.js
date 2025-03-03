let money=prompt("nhập số tiền: ");
let money1=prompt("Loại tiền muốn đổi vnd||usd");

if(money1== "vnd"){
    let vnd = money *23000;
    alert(vnd+"vnd");
}else if(money1=="usd"){
    let usd = money / 23000;
    alert(usd + "$")
}else{
    alert("Loại tiền không hợp lệ");
}