// ********** local storage bolum sonu egzersizi ********** //

// sayfayı yenileyince eski deger durur yanına yeni deger yazar //
// sayfayı yenileyince eski deger durur ama number parantezine aldigimiz icin yanina yazmaz devam eder //
let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")) : 0

let counterDOM = document.querySelector(`#counter`) 
let increaseDOM = document.querySelector(`#increase`)
let decreaseDOM = document.querySelector(`#decrease`)

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click",clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent() {
    console.log(typeof(counter))
    console.log(this.id)
    this.id == "increase" ? counter += 1 : counter -= 1 // counterDOM.innerHTML = counter'dı kısalttık //
    localStorage.setItem("counter", counter)
    counterDOM.innerHTML = counter
}
