let string=prompt("Mời bạn nhập 1 chuỗi ");
let arrStr=string.split("");
  function isPalindrome(arr) {
    for (let i = 0; i < arr.length/2; i++) {
         if(arr[i]!=arr[arr.length-(1+i)]){
            console.log("Không phải chuỗi đối xứng");
            return;
         }
    }
    console.log("Là chuỗi đối xứng");
  } 
  isPalindrome(arrStr);