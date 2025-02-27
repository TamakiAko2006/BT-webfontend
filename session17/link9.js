let a =prompt("nhập số a:");
let b =prompt("nhập số b:");
let c =prompt("nhập số c:");
let delta = Math.pow(b,2)-4*a*c;
let sprtdelta = Math.sqrt(delta);
let x1 = (-b + sprtdelta) /(2*a);
let x2 = (-b - sprtdelta) /(2*a);
if (!isNaN(delta) && delta > 0) {
    document.write("x1 = "+x1);
    document.write("x2 = "+x2);
} else {
    alert("Phương trình vô nghiệm!");
}
