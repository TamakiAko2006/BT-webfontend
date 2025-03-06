let numbers = [2,5,7,4,1,8,6];
let search = prompt("nhập số cần tìm");
let found = true;

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] == search){
            found = false;
            console.log("Bingo");
            break;
        }
        
    }

if(found){
    console.log("chúc bạn may mắn lần sau");
}
