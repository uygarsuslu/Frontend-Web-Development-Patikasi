// ********** formlarla calismak bolum sonu egzersizi ********** //

/* 
1 - Form seçimi
2 - Input Bilgisini UL içerisine ekle
3 - Form içindeki bilgiyi sıfırla
4 - Eğer forma bilgi girilmez ise kullanıcıyı uyar
*/

let userForm = document.querySelector("#userForm")
userForm.addEventListener("submit", formHandler)

const alertDOM = document.querySelector("#alert")

const alertFunction = (title, message, className="warning") => `
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault()

    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")

    // bos oldugunda ekranda gostermemesini sagladik //
    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value)
        USER_NAME.value = "" // gonderdikten sonra sifirladik //
        SCORE.value = ""
    }
    else {
       alertDOM.innerHTML = alertFunction(
           "Baslik Bilgisi",
           "Eksik Bilgi Girdiniz",
           "danger"
           )
    }
}

/* 
<li class="list-group-item d-flex justify-content-between align-items-center">
    A list item
    <span class="badge bg-primary rounded-pill">14</span>
</li> 
*/

let userListDOM = document.querySelector("#userList")
const addItem = (userName, score) => {
    let liDOM = document.createElement("li") // li oluşturduk //
    liDOM.innerHTML = `
        ${userName} 
        <span class="badge bg-primary rounded-pill">${score}</span>
    `
    // li'ye ekledik //
    liDOM.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center")
    userListDOM.append(liDOM) // ul'nin neresine ekleyecegimize karar verdik // 
}
