// ********** fonksiyona parametre (params) ve geridonus (return) eklemek ********** //

// TEMEL KURALLAR //
// 1 - Bir fonksiyon 1 veya 1'den fazla paramatre alabilir veya hiç almayabilir
// 2 - Bir fonksiyon disari bilgi gönderebilir (return) veya göndermeyebilir
// 3 - Mümkünse fonksiyonun dışarıya bağımlılıklarını azaltmak gerekir

let firstName = "Lorem"

// default parametre alıyor ** almayabilir de //
function greetings(firstName="Uygar", lastName=""){
//    console.log(`Merhaba  ${firstName ? firstName : ""}`)
    console.log(`Merhaba  ${firstName}`)
    console.log(`Merhaba  ${firstName} Last Name: ${lastName}`)
}

console.log(firstName) // lorem çıktısı verir ** bunu aradaki farkı anlamak için yazdık //
greetings() // ister burada ister fonksiyonun en başında değer yazabiliriz //
// let info = greetings("Parametre") // parametre gönderilmiş hali //
// console.log(info) // undefined çıktısı verir


function greetings2(firstName, lastName){
    let info = `Merhaba  ${firstName} ${lastName}`
    return info
}

let greetingsInfo = greetings2("Ad", "Soyad")
// let info = "deneme" // hata verir daha önce tanımlandığı için //
console.log(greetingsInfo)

// id'si "greeting" olan yerin içine (yani info)

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`)  
    domObject.innerHTML = info
}

let htmlInfo = `<span style="color:red">Color REDDD</span>`

domIdWriteInfo("info", greetings2("Yönetim", "Bilişim") )
domIdWriteInfo("greeting", htmlInfo )
// domIdWriteInfo("greeting", greetings2("Ipsum", "Lorem") )