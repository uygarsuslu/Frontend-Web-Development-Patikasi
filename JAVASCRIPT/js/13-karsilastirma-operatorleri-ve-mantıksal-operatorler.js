// ********** karsilastirma operatorleri ve mantiksal operatorler ********** //

let price = "100"
let user = "hakan"

// EŞİTSE // 

console.log("100 == 1 :", price == 1 )
console.log("100 == 100 :", price == 100 )

// HEM DEĞERİ HEM DE TÜRÜ EŞİTSE //

console.log("100 === 1 :", price === 1 )
console.log("100 === 100 :", price === 100 )

// EŞİT DEĞİLSE //

console.log("100 != 1 :", price != 1 )
console.log("100 != 100 :", price != 100 )

console.log("guest != uygar :", user != "uygar")

// KÜÇÜKSE //

console.log("price < 100 :", price < 100)

// KÜÇÜK VEYA EŞİTSE //

console.log("price <= 100 :", price <= 100)

// BÜYÜKSE //

console.log("price > 100 :", price > 100)

// BÜYÜK VEYA EŞİTSE //

console.log("price >= 100 :", price >= 100)

// && -> VE //

price = 0
console.log("&& :", price > 0 && user != "hakan") 
//hem price > 0 olmalı hemde user guest'e eşit olmamalı true olması için

// || -> VEYA //

console.log("|| :", price > 0 || user != "hakan")
// illa iki tane şart olmasına gerek yok 2'den fazla şartda da yapılabilir

// ! -> DEĞİL (TERSİ) //

user = "guest"
price = 1
console.log("! :", price > 0 && !user == "guest")