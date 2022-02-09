// ********** boolean veri turu ile calismak ********** //

// 0 ve 1'i anlamak //
let isActive = false // 0
isActive = true // 1
console.log(isActive)

let userName;
let isUserName  = Boolean(userName)
console.log(isUserName) // degiskenin icinde bilgi olmadigi icin false gonderdi 

userName = "user"
console.log("User Name: ", Boolean(userName)) // degiskenin icinde bilgi oldugu icin true gonderdi 

Boolean("11") // true
Boolean("0") // true
Boolean("") // false

// 0 , -0 , null , false , NaN , undefined , ("") //
Boolean(0) // false
Boolean(-0) // false
Boolean(-0.1) // true
Boolean(0 === 0) // true

// KARAR YAPILARI KISMINDA TEKRAR ANLATILACAK 
Boolean(userName.length > 0) // true