// ********** dom etkinlikleriyle (events) calismak ********** //

// Etkinlikler yani "events"ler uygulanacak eylemlerin ne zaman gerçekleşeceğinin öğrenilmesine ve sonrasında kodun çalıştırılmasına olanak sağlar. 

// Kodluyoruz - Patika.Dev yazisina tiklayinca console'da "tiklandi" yazacak //
let greeting = document.querySelector("#greeting")
greeting.addEventListener("mouseover", domClick ) // moueseover: üzerine gelince // // click //

function domClick() {
    console.log("etkinlik denetlendi")
    // console.log(this) // <h1 id="greeting">tiklandigi icin bilgi degisti </h1>
    // console.log(this.innerHTML) // Kodluyoruz - Patika.Dev //
    // console.log(this.innerHTML = "tiklandigi icin bilgi degisti")
    // her tıklandiginda rengi degisir //
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red" 
}


