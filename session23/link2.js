let number =[];
let check=0;
let vitri=0;
for (let i = 0; i < 10; i++) {
    number[i]=+prompt("Mời bạn nhập giá trị thứ "+(i));
    check++;
}
let max=number[0];
for (let i = 0; i < 10; i++) {
    if(max<number[i]){
        max=number[i]
        vitri=i;
    }
}

if(check>0){
    console.log("Giá trị lớn nhất: "+max);
    console.log("Vị trí: "+vitri);
}else{
    console.log("Không có số nào lớn nhất ");
}