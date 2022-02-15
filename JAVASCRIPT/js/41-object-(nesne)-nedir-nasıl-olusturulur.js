// ********** object (nesne) nedir? nasıl olusturulur? ********** //

let arrayObj = [1, 2, 3]
let object1 = { obj: 1 }

console.log("arrayObj", typeof (arrayObj))
console.log("object1", typeof (object1))

let item1 = new Object()
let item2 = {}
console.log("item1", typeof (item1))
console.log("item2", typeof (item2))

// object olusturmak //
let item3 = {}
let item4 = new Object()


//aynı değerlere, farklı memory adresslere sahip 2 obje
let obje = {
    mesaj: "merhaba"
}
let başkaBirObje = {
    mesaj: "merhaba"
}
console.log(obje == başkaBirObje);         //false
// bu iki obje, arka planda göremediğimiz iki ayrı hafıza adresiyle tanınıyorlar, bu yüzden içerikleri aynı olsa da farklı kabul ediliyorlar.