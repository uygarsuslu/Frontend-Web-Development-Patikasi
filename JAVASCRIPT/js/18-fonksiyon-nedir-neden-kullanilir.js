// ********** fonksiyon nedir neden kullanilir ********** //

function helloWorld() {
    console.log("Hello World")
}

function merhabaDunya() {
    console.log("Merhaba Dünya")
    helloWorld()
}

merhabaDunya() // BUNU YAZMAZSAK FONKSİYON ÇALIŞMAZ //

/* ********************************************************************************************* */

// ***** HATA ALIRIZ ***** //
// function userCheck() {
//     if (userName && age >= 18) {
//         info.innerHTML = "ehliyet alabilirsiniz"
//     }
//     else if (!userName) {
//         info.innerHTML = "Kullanici Adiniz Yok"
//     }
//     else if (!(age >= 18)) {
//         info.innerHTML = "Yas Bilginiz Yok veya 18 Yasindan Kucuksunuz"
//     }
// }

/* ********************************************************************************************* */

function printHello(name) {     //name adında bir parametre aldı
    console.log("Merhaba " + name);
}
printHello("Şafak");  // bir argüman vererek fonksiyonu çağırdık. Çıktı: Merhaba Şafak

/* ********************************************************************************************* */

var add = function (sayi1, sayi2) {  //Anonim bir fonksiyon oluşturduktan sonra bu 
    //fonsksiyonu bir değişkene atadık
    console.log(sayi1 + sayi2);
}

/* ********************************************************************************************* */

function addition(sayi1, sayi2) {
    return (sayi1 + sayi2);
}

var add = addition(1, 2);   //add değişkenine 1+2 değerini fonksiyon kullanarak atadık.
console.log("addition:", add)

/* ********************************************************************************************* */

//global değişkenleri tanımlıyoruz
var sayi1 = 5;
var sayi2 = 2;
function ek() {
    var sayi3 = 3;             //sayi3 adında lokal bir değişken tanımlıyoruz
    return sayi1 + sayi2 + sayi3;  //Fonksiyon içinde global ve local değişkenleri kullanıyoruz
}

console.log("ek:", ek())

function multiplication() {
    return sayi1 * sayi3;
    //Burada hata alıyoruz: bunun nedeni başka bir fonksiyonun içinde tanımlı olan sayi3 lokal değişkenini kapsamı dışında 
    //kullanmaya çalışmamız. sayi1 değişkeni ise global olduğundan burada kullanılabilir
}

/* ********************************************************************************************* */

function printScreen1() {
    console.log("First screen output");
}

function printScreen2() {
    setTimeout(function () { // **************** BU FONKSİYON ÖNEMLİ **************** //
        console.log("Second screen output")
    }, 3000);
}

function printScreen3() {
    console.log("Third screen output");
}
printScreen1();
printScreen2();
printScreen3();

/* ********************************************************************************************* */

function ekranGoruntusu1() {
    console.log("İlk ekran çıktısı");
}

function ekranGoruntusu2(callback1, callback2) {
    setTimeout(function () {
        callback1();
        console.log("İkinci ekran çıktısı")
        callback2();
    }, 3000);
}

function ekranGoruntusu3() {
    console.log("Üçüncü ekran çıktısı");
}

ekranGoruntusu2(ekranGoruntusu1, ekranGoruntusu3);

/* ********************************************************************************************* */

// function mesajVer() {
//     alert('Herkese Merhabalar!');
// }
// mesajVer();
// mesajVer();

/* ********************************************************************************************* */

// function mesaVer(ad, soyad) {
//     alert(`Merhaba ${ad} ${soyad}`);
// }

// mesaVer("Arturo", "Kelesoglu", "Mr."); /* çıktı: Merhaba Arturo Kelesoglu (Bu örnekte parametrelere geçilen argüman sayısı 3'tür(Arturo, Kelesoglu, Mr.). Parametre sayısı ise 2'dir(ad,soyad). Bu yüzden fazlalıklar(Mr.) önemsenmez.*/
// mesaVer("Arturo"); /* çıktı: Merhaba Arturo undefined (Bu örnekte parametrelere geçilen argüman sayısı 1'dir.(Arturo). Parametre sayısı ise 2'dir(ad,soyad). Bu yüzden eksiklikler undefined döner. */
// mesaVer(); // çıktı Merhaba undefined undefined (Yukarıdaki örnekle aynı mantıktadır.)

/* ********************************************************************************************* */

const carpim = (sayi1, sayi2) => sayi1 * sayi2;
/*
    // Daha uzun hali ise;
    const carpim = function(sayi1,sayi2){
      return sayi1 * sayi2;
    }
  */

console.log(carpim(3, 5));

/* ********************************************************************************************* */

// let experience = prompt('Kac yillik gelistirici tecrubeniz var', 4);

// const developer =
//   experience > 5
//     ? () => alert('Bir cok konuyu biliyorum')
//     : () => alert('Hicbir sey bilmiyorum :)');

// developer();

/* ********************************************************************************************* */

// Bir fonksiyonu çağırdığımız zaman o fonksiyon bir çok fonksiyonu daha çalıştırabilir. Kısaca bir fonksiyon kendisini tekrar çağırıyor ise biz buna recursion diyoruz.

// bir fonksiyon yazalım bu fonksiyon sayının kuvvetini alsın.
// pow(2,2) = 4
// pow(2,3) = 8
// pow(2,4) = 16 değerlerini verecek şekilde diyelim.

// 1.ci yol (recursion patterni ile düşünmeden)
// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//       result *= x; // result = result * x
//     }
//     return result;
// }  
// alert(pow(2, 3)); // 8

// // recursion ile
// function pow(y, z) {
//     if (z == 1) {
//       return y;
//     } 
//     else {
//       return y * pow(y, z - 1);
//     }
//   }

//   alert(pow(2, 4)); // 16

/* ********************************************************************************************* */

if (true) {
    let message = 'Merhaba';
    console.log(message);
}
// console.log(message); // ? merhaba mı verir yoksa bir hata mı?