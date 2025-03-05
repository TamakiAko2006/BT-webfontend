let money = Number(prompt("nhập số tiền gửi ngân hàng(VNĐ): "));
let month = Number(prompt("nhập số tháng gửi ngân hàng: "));
let interest_rate = Number(prompt("nhập lãi suất hàng năm: "));
let year = month / 12;
if (!isNaN(money) && !isNaN(month)){
    let all_amount = money*(1+year*interest_rate/100);
    alert("tiền lãi và gốc là: " + all_amount +"VNĐ");
    let profit_amount = money*(year*interest_rate/100);
    alert("tiền lãi và gốc là: " + profit_amount +"VNĐ");
}