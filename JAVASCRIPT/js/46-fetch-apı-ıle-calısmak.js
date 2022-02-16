// ********** fetch apı ile calismak ********** //


// JSON DOSYADAN VERİ CEKTİK //
fetch("data/settings.json").then(
    response => response.json()  // {return response.json()} //
).then(responseJson => {
    console.log(responseJson)
    console.log(responseJson.userName)
})

let userListDOM = document.querySelector("#userList")

// API ÜZERİNDEN VERİ ÇEKTİK // 
fetch("https://jsonplaceholder.typicode.com/posts").then(
    response => response.json()
).then(responseJson => {
    responseJson.forEach(item => {
        let liDOM = document.createElement("li")
        liDOM.innerHTML = item.title
        userListDOM.appendChild(liDOM)
    } )
})
