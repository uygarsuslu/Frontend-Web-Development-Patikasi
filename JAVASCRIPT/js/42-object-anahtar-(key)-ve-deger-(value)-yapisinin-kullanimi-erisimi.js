// ********** object anahtar (key) ve deger (value) yapisinin kullanimi erisimi ********** //

let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro",
    "2kg": 2,
    modelName: "MackBook Air",
    // model-name: "MackBook Air",
    model_name: "MackBook Air",
}
console.log(laptop1)

// dogru anahtar bilgisi olusturmak //
console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model, laptop1["model"])
console.log(laptop1["2kg"])

// anahtar bilgisine yeni deger eklemek //
laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1)

// yeni bilgi eklemek //
laptop1.version = "10.15.7"
console.log(laptop1)

// anahtar bilgilerine ulasmak (keys) -> object.keys(item) //
keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => {
    console.log("keys: ", keyInfo)
    console.log("keys-value:", laptop1[keyInfo])
})

// deger bilgilerine ulasmak (values) -> object.values(item) //
console.log(
    Object.values(laptop1)
)

let values = Object.values(laptop1)
values.forEach(value => {
    console.log("value:", value)
})

// ********** ENTRİES KULLANİMİ ********** //
let etries = Object.entries(laptop1)
console.log(Object.entries(laptop1))

// ********** JSON METODLARİ ********** // 
let person = {
    name: "Jack",
    age: 20
};

document.getElementById("userList").innerHTML = JSON.stringify(person); 
// Bu objenizi bir stringe çevirip demo idsine basacaktır.

let stringObject = JSON.stringify(person);

let newPerson = JSON.parse(stringObject);
  // parse methodu da stringtify methodunun tersi olarak çalışır ve stringi objeye çevirir