let array = [2,5,6,8,9];
function filterNumber(array){
    if(!Array.isArray(array)){
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    let newarray = [];
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0){
            newarray.push(array[i]);
        }
    }
    if(newarray.length == 0){
        console.log("Mảng không có số chẵn");
        return;
    }
    console.log(newarray);
}
filterNumber(array);    