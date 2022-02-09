// ********** string veri turu islemleri ********** //

let email = "uygarsuslu@gmail.com"
let firstName = "uygar"
let lastName = "SUSLU"


// string karakter sayisi -> length
console.log(email.length)

// ilk karakteri bulmak -> [index degeri]
console.log(firstName[0])
console.log(firstName.charAt(0))

// buyuk harf -> toUpperCase() */* kucuk harf -> toLowerCase() 
console.log(firstName.toUpperCase())
console.log(lastName.toLowerCase())

// string icinde istedigimiz bilgiyi aramak ve yerini bulmak -> search
console.log(email.search("@"))
console.log(email[10])

// metin icinde aradıgımız deger yoksa // // -1 degerini verir //
console.log(email.search("olmayan")) 

// belli bir yere kadar al -> slice
console.log(email.slice(0,10)) // uygarsuslu //
console.log(email.slice(10)) // @gmail.com //

let DOMAIN = email.slice(email.search("@") + 1)
console.log(DOMAIN)

console.log(DOMAIN.indexOf(".")) // @ işaretinden 5 birim sonra "." var //

console.log(DOMAIN.slice(0, DOMAIN.indexOf("."))) // gmail //

// bilgiyi degistir -> replace
email = email.replace("gmail.com", "kodluyoruz.org")
console.log(email)

// istedigim bilgi var mi -> includes
console.log(email.includes("@")) // true //
console.log(email.includes("e")) // false //

// istedigim bilgiyle basladi mi -> startsWidth */* bitti mi -> endsWidth 
console.log(email.endsWith("kodluyoruz.org")) // true //
console.log(email.startsWith("uygar")) // true //

// ilk harflerini buyuk yapmak
firstName = "firstname"
lastName = "LASTNAME"
let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName)
