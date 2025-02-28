let name1 = prompt("Nhập tên đăng nhập: ");
if(name1 == "ADMIN"){
    let pass =prompt("Nhập mật khẩu: ");
    if(pass == "TheMaster"){
        alert("Welcome");
    }else if(pass =="null" ){
        alert("Cancelled");
    }else{
        alert("Wrong password");
    }
}else if ( name1 =="null"){
    alert("Cancelled");
}else{
    alert("I Don't know you");
}