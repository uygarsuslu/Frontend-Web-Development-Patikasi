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
// let greetingsInfo = "deneme" // hata verir daha önce tanımlandığı için //
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

/* ********************************************************************************************* */

// Herhangi bir yarıçapa sahip bir dairenin alanını hesaplayan fonksiyonu yazınız.

const PI = 3.14; // Formülde kullandığımız sabit sayı pi'yi bu şekilde alabiliriz.
function daireAlaniHesaplama (r) // Fonksiyonumuz, r parametresini alıyor.
{
    var islemSonucu = PI*r*r; // Dairenin alanını hesaplayacak işlemimiz.
    return islemSonucu;		 // return ifadesiyle sonucu dönüyoruz.
}

var donenSonuc = daireAlaniHesaplama(3); // Argüman olarak, alanını hesaplamak istediğimiz herhangi bir dairenin yarıçapı için 3 rakamı verildi. 
console.log(donenSonuc); // 28.25999999 sonucunu göreceğiz.

/* ********************************************************************************************* */

function daireAlaniHesaplama (r, PI = 3.14) 
{ 
    return PI*r*r;		
}
var donenSonuc = daireAlaniHesaplama(3); 
console.log(donenSonuc); // 28.25999999 sonucunu göreceğiz.

/* ********************************************************************************************* */

// Farklı yarıçaplardaki iki farklı dairenin, alanları çarpımını veren bir fonksiyon yazınız.

function daireAlaniHesaplama (r, PI = 3.14) 
{ 
    return PI*r*r;		
}

function carpma (a1, a2)
{
    return a1*a2;
}

var alan1 = daireAlaniHesaplama(5); // 5 ve 6 argümanları için dairelerin alanları hesaplandı.
var alan2 = daireAlaniHesaplama(6); 
var donenSonuc = carpma(alan1, alan2); // Hesaplanan alanlar argüman olarak verildi.
console.log(donenSonuc);  			  // 354.9456 olarak hesaplandı.

// Bu örnekten de görüldüğü gibi, bir fonksiyonu çağırdıktan sonra elde ettiğimiz bir değer ile ikinci bir fonksiyonun argümanı olarak kullanabiliyoruz. Bunu yapabilmemize olanak sağlayan şey, değer döndüren(return) fonksiyonları kullanmamız olduğunu söyleyebiliriz.