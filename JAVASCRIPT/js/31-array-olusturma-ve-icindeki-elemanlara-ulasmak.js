// ********** array(dizi) metotlari ve array icinde array ********** //


// ARRAY OLUSTURMAK //
let domain = "kodluyoruz"
let isActive = "false"
let items = [15, 25, 35, isActive, domain]
console.log(items)

let emptyArray = [] // bos liste //

// ARRAY İCERİSİNDEKİ ELEMAN/OGE SAYİSİNİ OGRENMEK -> .length //
console.log(items.length) // array icindeki oge sayisi //

// ARRAY İCİNDEKİ İLK ELEMANİN CAGİRİLMASİ //
console.log(
    "bastaki :",
    items[0]
    )

// ARRAY İCİNDEKİ ORTADAKİ ELEMANİN CAGİRİLMASİ //
console.log(
    "ortadaki :",
    items[ Math.floor(items.length / 2)]
) 

// ARRAY İCİNDEKİ SON ELEMANİN CAGİRİLMASİ -> length-1 // 
console.log(
    "sondaki :",
    items[items.length-1]
    )


// DEGİSKEN İCİNDEKİ VERİNİN ARRAY OLUP OLMADİGİNİN KONTROL EDİLMESİ -> typeof//
console.log(typeof(items)) // object olarak cikti veriyor //

console.log(
    Array.isArray(items)
)

// hangileri isArray bilgisidir? -> true //
console.log("[] : ", Array.isArray( [] ) )
console.log("1 : ", Array.isArray( 1 ) )
console.log("true : ", Array.isArray( true ) )

// TEK TEK YAZMAK YERİNE FOR DONGUSUNE EKLERİZ //
console.log("for dongusu :")
let arr = [1,2,3,"dört","beş"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// let brr = [1, 2, 3, ["dört", "beş", "altı"], 7, 8]
// console.log(brr[2][0]) // "dört"

console.log("foreach :")
let crr = [1,2,3,"dört","beş"];
crr.forEach((item, index) => {
  console.log(item, index);
});