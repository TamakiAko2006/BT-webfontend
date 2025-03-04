let str = prompt("nhập chuỗi bất kì: ");
let search = prompt("nhập chữ cái muốn kiểm tra: ");
let found = false;
if(str){
    for(i = 0;i < str.length;i++){
        if(str[i] === search)
        found = true;
    }
}
if(found){
    console.log("tồn tại từ tìm kiếm")
} else {
    console.log("không tồn tại từ tìm kiếm")
}