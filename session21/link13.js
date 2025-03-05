let image = "*";
let count = 0;
for(i = 0;i > -1;i++){
    image += "*";
    document.write(image + "<br>");
    count++;
    if(count == 10){
        break;
    }
}
document.write("<br>");

for(let i=0;i<10;i++){
    for (let j = 10; j >0+i ; j--) {
       document.write("*")
    }
    document.write("<br>")
}