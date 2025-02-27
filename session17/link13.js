let money = Number(prompt("nhập số tiền gửi ngân hàng(VNĐ): "));
let month = Number(prompt("nhập số tháng gửi ngân hàng: "));
let year = month / 12;
if (!isNaN(money) && !isNaN(month)){
    let profit_amount = money*(year*4.3/100);
    alert("tiền lãi là: " + profit_amount +"VNĐ");
}