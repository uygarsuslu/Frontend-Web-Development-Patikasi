// ********** let ve const ile degisken tanimlama  ********** //

/*
// var ile degisken tanimlama //
var serverName = "api.kodluyoruz.org"
console.log(serverName)
*/

/*
// let ile degiskeni bos tanimlama //
let serverName;
console.log(serverName)
*/

/*
// let ile degiskene bilgi atamak //
serverName = "https://kodluyoruz.org"
console.log(serverName)
*/

/*
// let ile degiskene bilgi atayarak tanimlama //
let password = "1234";
console.log(password)
*/


// degisken atamasi yapmadan once kullanmaya calismak //
/*
// HATALI KULLANIM //
console.log(fullName)
let fullName = "Uygar Süslü";
*/

// DOGRU KULLANIM //
let fullName = "Uygar Süslü";
console.log(fullName)

// let ile tanimlanan degiskenin icindeki bilgiyi degistirmek: //
fullName = "Lorem Ipsum Dolor";
console.log(fullName)

// birlestirme veya ekleme islemi //
fullName + "Yeni Eklenen Bilgi" // acaba ekledi mi?
console.log(fullName + " Test Bilgisi") // ekle ve goster ama degiskene eklemedik // 

fullName = fullName + " Yeni Bilgi"
fullName = "2. Bilgi: " + fullName
console.log(fullName)

// ********* BU ÖNEMLİ KOLAYLIK ******** //
fullName = "Sifirlandi"
fullName += " ve yeni bilgi eklendi"
console.log(fullName)

// ******** BİR ŞEYİN DEĞİŞMEMESİNİ İSTİYORSAK CONST İLE TANIMLARIZ ******** //
// const ile degiskeni bos tanimlamaya calismak //
/* HATALI KULLANIM
const serverPassword; // sadece degisken tanimlandi ama ici bos ?? //
*/

// const ile degisken tanimlamak //
const SERVER_PASSWORD = "asadasdsd";
console.log(SERVER_PASSWORD)

/* HATALI KULLANIM
SERVER_PASSWORD = "1234"
console.log(SERVER_PASSWORD)
*/
