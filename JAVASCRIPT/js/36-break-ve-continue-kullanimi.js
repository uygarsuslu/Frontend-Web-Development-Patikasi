// ********** break ve continue kullanimi ********** // // islemi durdur - devam et //

const LOREM_LIST = [
    "lorem", "ipsum", "dolor", "amet", "consectetur", "adipisicing", "elit"
]

let counter = 0

// for (; counter < 10; counter++) {
//     if (counter === 5) { break }
//     console.log(counter) // bunu if kosulunun ustune yazarsak farkli bir sonucla karsilasiriz //
// }

// for (; counter < 10; counter++) {
//     if (counter === 5) {continue}
//     console.log(counter) // 5 haric butun rakamları yazar //
// }

const UL_DOM = document.querySelector("#userList")

// let index = 0
// for (; index < LOREM_LIST.length; index++) {
//     if (LOREM_LIST[index] == "dolor") {break} // sadece dolor ipsum ekrana gelir //
//     let LI_DOM = document.createElement("li")
//     LI_DOM.innerHTML = LOREM_LIST[index]
//     UL_DOM.append(LI_DOM)
// }

let index = 0
for (; index < LOREM_LIST.length; index++) {
    if (LOREM_LIST[index] == "dolor") { continue } // dolor haric tum isimler ekrana gelir //
    let LI_DOM = document.createElement("li")
    LI_DOM.innerHTML = LOREM_LIST[index]
    UL_DOM.append(LI_DOM)
}

// ic ice dongu ornegi //
// for (var i = 0; i <= 10; i++) {
//     console.log("dış döngü: " + i);
//     for (var j = 0; j <= 5; j++) {
//         if (j == 3) {
//             break;
//         }
//         console.log("iç döngü" + j);
//     }
// }

// etiketli break ornegi 
// etiketli break ifadesi her ne kadar iç döngü içerisinde olsa dahi etiketin başına konulduğu döngü için etki eder. Böylece daha geniş çaplı bir dögüden çıkılmış oldu.
// cikis_etiketi: for (var i = 0; i <= 5; i++) {
//     for (var j = 0; j <= 50; j++) {
//         if (j == 9) {
//             break cikis_etiketi;
//         }
//         console.log("iç döngüden j :" + j);
//     }
// }

//Etiketli Continue Örneği
gec_etiketi: for (var i = 0; i <=5; i++) {
    for (var j = 0; j <= 4; j++) {
      if (j == 2) {
        continue gec_etiketi;
      }
      console.log("iç döngüden j :" + j);
    }
   }