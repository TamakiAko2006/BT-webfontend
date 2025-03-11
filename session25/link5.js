let arr=[1.1,-2,6,4,9];
let number=[1.5,-3,7.8];
function positiveInteger(a){
  if (!Array.isArray(a)) {
    console.log("Dữ liệu không hợp lệ");
    return;
  }
  let count=0;
 for (let i = 0; i < a.length; i++) {
   if(a[i]%1==0&&a[i]>0){
      count++;
   }
 }
 if (count > 0) {
  console.log(count);
} else {
  console.log("Không có giá trị nguyên dương trong mảng.");
}
}
positiveInteger(arr);
positiveInteger(number);