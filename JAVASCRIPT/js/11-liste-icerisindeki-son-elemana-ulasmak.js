// ********** liste icerisindeki son elemana ulasmak ve yeni oge eklemek ********** //

// son ogeyi degistirme //
let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son oge degisti...."

// ilk ogeyi degistirme //
let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk oge degisti...."

// yeni oge ekleme //
let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement("li")

liDOM.innerHTML = "kendi olusturdugumuz oge" // li elementinin icine ne yazacagimizi bildirdik //

ulDOM.append(liDOM) // ekleme işlemi!!!!! // // listenin en sonuna ekler //

ulDOM.prepend(liDOM) // ekleme işlemi!!!!! // // listenin en basına ekler //