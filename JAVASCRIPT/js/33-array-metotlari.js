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

// Bir dizideki sayıların 5 katından oluşan başka bir dizi oluşturalım //
const sayilar = [1,2,3]
let sayilarin5kati = sayilar.map(function(sayi) {
    return sayi*5
});
console.log("map: ", sayilarin5kati) // Çıktı olarak [5,10,15] görmeyi bekleriz.

// SOME METOT KULLANİMİ //
const dayilar = [4,5,6];
// sonucu görebilmek çıktıyı sonuc1 adlı değişkende tutalım:
const sonucccc = dayilar.some(function(sayi) {
    return sayi > 5 ;
});
console.log("some: ", sonucccc);

// EVERY METOT KULLANİMİ //
// belirtilen bir koşulun dizideki tüm elemanlara uyup uymadığını kontrol eder //
const ayilar = [4,5,6];
const sonuc1 = ayilar.every(function(sayi) {
    return sayi > 3;
});
console.log("every: ", sonuc1);

// FİLTER METOT KULLANİMİ //
const kayilar = [1,2,3,4,5];
const filtrelenmisSayilar = kayilar.filter(function(sayi) {
    return sayi >3;
});
// Orijinal diziyi 3'ten büyük olan sayılar için filtrelediğimizde yeni oluşacak dizi [4,5] olacaktır.
console.log("filter: ", filtrelenmisSayilar);

// FİND METOT KULLANİMİ //
const tayilar = [4,5,6,7];
const bulunacakEleman1 = tayilar.find(function(sayi) {
    return sayi > 5;
});
// Dizi içerisinde 5'ten büyük birden fazla eleman olduğu için koşula uyan ilk elemanı yani 6'yı görmeyi bekleriz.
console.log("find: ", bulunacakEleman1);

// SORT METOT KULLANİMİ //
const cayilar = [3,5,2,10,4];
cayilar.sort();
console.log(cayilar); // Çıktı olarak [10, 2, 3, 4, 5] alırız. 
//(Sayıların string halleri UTF-16 değerlerine göre sıralandıkları için)

const hayilar = [3,5,2,10,4];
hayilar.sort(function(a,b) {
    return b-a;
});
console.log(hayilar); // Çıktı olarak [10, 5, 4, 3, 2] alırız.


// REDUCE METOT KULLANİMİ //
const jayilar = [10,20,30];
// Dizi içindeki sayıları toplayarak indirgeyecek bir fonksiyon yazalım:
function indirgeyici (akumulator, sayi) {
    return akumulator + sayi;
}
// Bu fonksiyonu ve toplamaya 0'dan başlayacağımızı belirten 0 sayısını metodumuza parametre olarak girelim ve sonucu bir değişkende tutalım:
const sonuc5 = jayilar.reduce(indirgeyici,0);
console.log("reduce1: ", sonuc5); //0 + 10 + 20 + 30 = 60 olacağından çıktı olarak 60 bekleriz.
// Eğer akümülatorümüzü 0 yerine 5'den başlatsaydık çıkabilecek sonucu görelim:
const sonuc6 = jayilar.reduce(indirgeyici, 5);
console.log("reduce2: ", sonuc6); // 5 + 10 + 20 + 30 = 65 olacağından çıktı olarak 65 bekleriz.