let celsius = prompt("Nhập nhiệt độ (°C):");
celsius = parseFloat(celsius);
if (!isNaN(celsius)) {
    let fahrenheit = (celsius * 9/5) + 32;
    alert(`${celsius}°C tương đương với ${fahrenheit.toFixed(2)}°F`);
} else {
    alert("Vui lòng nhập một số hợp lệ!");
}