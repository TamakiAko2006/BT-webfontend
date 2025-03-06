let numberArray = [1,2,9,4,5,9,8,7,6,0];
let search = prompt("nhập số muốn kiểm tra: ");
let count = 0;
if(!isNaN(search)){
  for(let i = 0; i < numberArray.length; i++){
    if(numberArray[i] == search){
      count++;
      console.log("số bạn nhập xuất hiện "+ count + " lần trong mảng");
      break;
    }
  }

}
if(count == 0){
  console.log("số bạn nhập không có trong mảng");
}
