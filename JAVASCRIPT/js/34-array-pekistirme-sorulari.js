// ********** array(dizi) pekistirme sorulari ********** //

// SORU 1 //

let dizi = [2,5,8,11,15,17];
const filtrelenmisSayilar = dizi.filter(function(sayi){
    return sayi > 10;
});
const sayilarinCarpimi = filtrelenmisSayilar.map(function(sayi){
    return sayi*5;
});
console.log(sayilarinCarpimi);

/* *************************************************************************** */

// SORU 2 //

let mizi = [3,6,9,14,16]
function myFunction (mizi){
   let bool = mizi.find(function(sayi){
        return sayi > 5;
    });
    if(bool){
    console.log("Beşten büyük bir eleman mevcut.");
    }
    else{
    console.log("Beşten büyük bir eleman mevcut değil.");
    } 
}
myFunction(mizi);

// let rizi = [3,6,9,14,16];
// function myFunction (rizi){
//     const bulunacakEleman = rizi.find(function(sayi) {
//         if(sayi > 5){
//             console.log("Besten buyuk bir eleman mevcut")
//         }else {
//             console.log("Besten buyuk eleman mevcut degil")
//         }
//     })
// }
// myFunction(rizi);

/* *************************************************************************** */

// SORU 3 //

let lizi = [2,3,4];
let  sonuc = 1;
lizi.forEach(function(sayi){
     sonuc = sonuc * sayi; 
});
console.log(sonuc);