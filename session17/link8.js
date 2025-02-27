let d1 = new Date(prompt("Moi ban nhap ngay"));
let d2 = new Date(prompt("moi ban nhap ngay"));
let milisecons = Math.abs((d1 - d2));
let day = milisecons / (1000*60*60*24);
document.write(day);