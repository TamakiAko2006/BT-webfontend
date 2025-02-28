let year =parseFloat(prompt("nhập số năm kinh nghiệm: "));
if(year<1){
    alert("nhân viên mới vào nghề");
}else if(year<=3){
    alert("nhân viên có kinh nghiệm");
}else if(year<=6 && year >=4){
    alert("chuyên viên");
}else{
    alert("quản lý");
}