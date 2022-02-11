// ********** ternary operatoru ile short-if kullanimi ********** //

let userName = prompt("Kullanici Adinizi Yaziniz")
let info = document.querySelector("#info")

// TERNARY KULLANIMI //
// KOŞUL ? DOĞRUYSA : YANLIŞSA //

info.innerHTML = `${userName.length > 0 ? userName : "Kullanici Bilginiz Bulunamadi :("}`
// info.innerHTML = `${userName ? userName : "Kullanici Bilginiz Bulunamadi :("}` //

