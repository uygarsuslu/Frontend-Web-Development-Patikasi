// ********** local storage farkli turde veri ekleme ********** //

// Eger tutacagimiz bilgi object ise JSON.stringify ile objeyi string yapiya cevirebiliriz.

let user = {userName: "uygarsuslu", isActive: true}
console.log(user)
// localStorage.setItem('userInfo', user) // hatali //
localStorage.setItem("userInfo", JSON.stringify(user) )

let userInfo = localStorage.getItem("userInfo") // bilgiyi al
userInfo = JSON.parse(userInfo)
console.log(userInfo)

// ****************************************************************************** //
let items = [1,2,3, user]
// localStorage.setItem('newItems', items) // hatali //
localStorage.setItem('newItems', JSON.stringify(items))

//JSON Parse ile localStorage icindeki bilginin cekilip kullanilmasi..
let newItems = localStorage.getItem('newItem')
newItems = JSON.parse(newItems)
console.log(items)
