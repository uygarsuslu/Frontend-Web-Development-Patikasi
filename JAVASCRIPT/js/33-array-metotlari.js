// ********** array(dizi) metotlari ve array icinde array ********** //

let items = [1, 2, 3, 4, 5]

// ARRAY İCİNDE ARRAY // 

let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers) // basina eklemek //
console.log(items)

items.push(maleUsers)
console.log(items)

console.log(items.length)
console.log(items[0].length) // Array icindeki istedigimiz Array'in length bilgisini aldik //
console.log(items[0][1]) // Hulya bilgisine ulastik //

// ARRAY İCERİSİNDEN OGE AYIRMAK -> splice(pos,item?) //
let newItems = items.splice(1, 5) // 1'den başlaşın 5 tane olsun //
console.log("newItems:", newItems)
console.log("items:", items)

// ARRAY İCERİSİNDEKİ OGENİN İNDEX BİLGİSİNİ BULMAK -> indexOf("value") //
items.unshift("lorem")
items.push("ipsum")

console.log( items[items.indexOf("ipsum")] )
console.log( items.indexOf("ipsum") )

// ARRAY KOPYALAMAK -> slice, [...ES6]
let copyItems = items
console.log(items)

copyItems.pop() // son ogeyi cikarttik //
console.log("copyItems: ",copyItems)
console.log("items: ", items)

console.log("kopyalandiktan sonraki hali:")
copyItems = items.slice() // kopyalama yapti //
copyItems.pop() // son ogeyi cikarttik //
console.log("copyItems: ",copyItems)
console.log("items: ", items)

// es6 ve sonrasinda gelen kopyalama islemi
let es6Items = [...items]
console.log("es6Items:", es6Items)

// İKİ ARRAY BİLGİSİNİ BİRLESTİRMEK -> [...ES6, ...ES6]
let allUsers = [...femaleUsers, ...maleUsers]
console.log(allUsers)

// ARRAY İCERİSİNDEKİ BİLGİYİ STRİNG'E CEVİRMEK -> toString, join
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))

// İSTEDİGİMİZ İNDEX BİLGİSİNE OGE EKLEMEK -> splice(index, 0, value)
allUsers.splice(allUsers.length-1, 0, "Melisa")
allUsers.splice(Math.floor( allUsers.length / 2 ), 0, "Lorem")
console.log(allUsers)