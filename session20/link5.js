let a = Number(prompt("Nhập số cho a"));
let b = Number(prompt("Nhập số cho b"));
let accumulation = 1;

if (!isNaN(a) && !isNaN(b) && a !== 0) {
    if (b >= 0) {
        for (let i = 1; i <= b; i++) {
            accumulation *= a;
        }
    } else {
        
        for (let i = 1; i <= -b; i++) {
            accumulation *= a;
        }
        accumulation = 1 / accumulation; 
    }
    console.log(accumulation);
} else {
    console.log("Không hợp lệ");
}