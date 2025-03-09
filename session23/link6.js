let arr =["",false,0,5,10,"Hello"];
for(let i=0;i<arr.length;i++){
for (let i = 0; i <arr.length-1; i++) {
   if(arr[i]=="" ||arr[i]==false||arr[i]==0||arr[i]==null||arr[i]==undefined||arr[i]==NaN){
      arr.splice(i,1);
   }
}
}
console.log(arr);