// ********** dom icerisinden oge secimi ********** //

// let h2 = document.getElementsByTagName('h2')

let title = document.getElementById("title")
title.innerHTML = "Degisen Bilgi" // bilgiyi degistirme islemi //
console.log(title.innerHTML)

let link = document.querySelector("#kodluyoruzLink")
link.innerHTML += " degisti" // bilgiyi degistirme islemi //
link.style.color = "red"
link.classList.add("btn")
console.log(link.innerHTML)
