// ********** veri turunu ogrenmek ve veri turu donusumleri ********** //

// veri turunu ogrenmek TYPEOF: //
let price = 111
let stringPrice = "111"
let hasPassword = true

console.log(
    "price: ",
    typeof(price) // number
)

console.log(
    "stringPrice: ",
    typeof(stringPrice) // string
)

console.log(
    "hasPassword: ",
    typeof(hasPassword) // boolean
)

// string (metinsel) bilgileri int ve float'a donusturmek //
let number1 = "11"
number1 = parseInt(number1) // bunu yapmazsak string olarak gosterir 
console.log("number1: ", number1, typeof(number1) )

let number2 = "11px" // px sayinin basina yazilirsa "NaN" ciktisi verir
number2 = parseInt(number2) // bunu yapmazsak string olarak gosterir 
console.log("number2: ", number2, typeof(number2) )

let number3 = "11.1" // burada px yazarsak "NaN" ciktisi verir
number3 = Number(number3) // bunu yapmazsak string olarak gosterir 
console.log("number1: ", number3, typeof(number3) )

let number4 = "11.4px"
number4 = parseFloat(number4) // bunu yapmazsak string olarak gosterir // number ile donusturseydik "NaN" ciktisi alirdik 
console.log("number1: ", number4, typeof(number4) )

// number veri tipinden string'e donusturmek //
let number5 = 55
number5 = number5.toString()
console.log(number5, typeof(number5) )