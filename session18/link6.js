let year =Number(prompt("nhập năm bất kì: "));
if(year % 4 ==0 && year % 100 !==0 || year %400 ==0){
    alert("năm"+year+"là năm nhuận");
}else{
    alert("năm"+year+"không phải là năm nhuận");
}