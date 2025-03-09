let number =[];
let check=0;
for (let i = 0; i < 10; i++) {
    number[i]=+prompt("Mời bạn nhập giá trị thứ "+(i+1));
}
for (let i = 0; i < 11; i++) {
    if(number[i]>=10){
        console.log(number[i]+" ");
        check++;
    }
}
if(check==0){
    console.log("Không có số nào lên hơn 10");
}