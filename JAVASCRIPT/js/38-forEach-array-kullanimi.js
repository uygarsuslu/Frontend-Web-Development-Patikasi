// ********** forEach ile array icerisindeki ogelerin cagirilmasi ********** //
// döngü oluşturmamızı ve bu döngüyü sırayla çalıştırmamızı sağlayan bir array metodudur //

const PRODUCTS = ["Laptop", "Phone", "Speaker", "Desktop, PC", "Server", "Mouse", "Keyboard"]

// PRODUCTS.forEach( (product, index, array) => console.log(product, index, array) )
// PRODUCTS.forEach( (product, index, array) => console.log( array[index] = product + " 111") )
PRODUCTS.forEach( (product, index, array) => array[index] = `${product.toUpperCase()}` )

console.log(PRODUCTS)

/* 
const userListDOM = document.querySelector("#userList")
for (index = 0; index<users.length; index++) {
    const liDOM = document.createElement("li") // li olusturduk //
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM) // userListDOM'a ekledik //
}
*/

const userListDOM = document.querySelector("#userList")
PRODUCTS.forEach (item => { 
    const liDOM = document.createElement("li") // li olusturduk //
    liDOM.innerHTML = item
    userListDOM.appendChild(liDOM) // userListDOM'a ekledik //     
} )

const animals = ["cat" , "dog" , "bird", "horse"];
animals.forEach( animal => console.log( animal ) );

// Numbers array'ini kullanarak her elemanının iki fazlasına sahip olan başka bir array oluşturunuz.
const numbers = [12, 24, 36]; 
const newArray = [];

 numbers.forEach(numbers => { newArray.push(numbers +2 )})
 console.log(newArray)