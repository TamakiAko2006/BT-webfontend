const cart = [

    { name: "Mèn mén", price: 30000, quantity: 2 },

    { name: "Mì tôm", price: 5000, quantity: 1 },

    { name: "Bánh bao", price: 15000, quantity: 3 }

];

function sumProducts(){
    let sumProduct = 0;
    for(let item of cart){
        sumProduct += item.price * item.quantity;
    }
    return sumProduct;
}

console.log(sumProducts());