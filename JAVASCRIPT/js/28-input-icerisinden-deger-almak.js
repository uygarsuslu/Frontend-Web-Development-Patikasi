// ********** input icerisinden deger almak ********** //

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener("submit", formSubmit)

function formSubmit(event) {
    // console'a "islem gerceklesti" yazar// // site linkinde göstermez // // her seferinde sayfayi yenilemez // 
    event.preventDefault() // default islemi engelledik //
    console.log("islem gerceklesti")
    
    let scoreInputDOM = document.querySelector("#score")
    console.log(scoreInputDOM.value)

    localStorage.setItem("score", scoreInputDOM.value)
}