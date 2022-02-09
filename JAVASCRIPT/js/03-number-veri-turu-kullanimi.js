// ********** number veri turu kullanimi ********** //

// number veri turu tanimlamak //
let price = 100 
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat: ", price,
    "KDV Orani: ", tax,
    "KDV Tutari: ", priceTax,
    "Fiyat: ", total 
)

// ***** string içine yazılan sayıyı number değişkeni olarak yazdırma ***** //
let stringNumber = "12"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)

// artirma ve azaltma islemi //
let counter = 320
counter = counter + 1 // uzun yontem //
counter += 1; // kısa yol //
counter ++; // en kısa yol //
console.log(counter)

counter --;
console.log(counter)

counter *= 10;
console.log(counter)

counter /= 2;
console.log(counter)

// islem onceligi //
console.log( 2 + 3 * 10)
console.log( (2 + 3) * 10)

// ***** mod "%" (kalan) alma ***** //

// sayi tek mi cift mi // // "0" ise çift "1" ise tek //
console.log( 15 % 2) 
console.log( 14 % 2)

// 8 urun alan koliye tum urunler sigiyor mu //
console.log("Koli Kalan Urun Ornegi: ", 18 % 8)

// us alma //
console.log( 2 * 2 * 2 * 2)
console.log("Us Alma: ", 2 ** 4)

// asagi yuvarlama islemi -> Math.floor: //
console.log("Asagi Yuvarlama: ", Math.floor(1.7))


// yukari yuvarlama islemi -> Math.ceil: //
console.log("Yukari Yuvarlama: ", Math.ceil(5.4))


//yakina yuvarlama islemi -> Math.round: //
console.log("Yakina Yuvarlama: ", Math.round(3.6))


