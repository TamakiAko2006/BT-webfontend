let input = prompt("Nhập vào dãy số muốn sắp xếp số chẵn (cách nhau bằng dấu cách):");

function sortEvenNumbers(arr) {
    let arrSplit = arr.split(" ").map(Number);

    if (arrSplit.some(isNaN)) {
        alert("Dữ liệu không hợp lệ! Vui lòng nhập các số cách nhau bằng dấu cách.");
        return;
    }

    let evenNumbers = arrSplit.filter(num => num % 2 === 0).sort((a, b) => a - b);

    let evenIndex = 0;
    let result = arrSplit.map(num => (num % 2 === 0 ? evenNumbers[evenIndex++] : num));

    alert("Mảng sau khi sắp xếp số chẵn: " + result.join(" "));
}

sortEvenNumbers(input);