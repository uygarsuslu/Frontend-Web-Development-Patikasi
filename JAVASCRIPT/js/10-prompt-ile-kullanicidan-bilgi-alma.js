// ********** prompt ile kullanicidan bilgi alma ********** //

let fullName = prompt("Lütfen Adınızı Giriniz: ")
console.log(fullName)

/* innerHTML ile backtick icerisinde yazdirmadan once yazdirmak veya degisiklik yapmak 
istediğim id'me querySelector ile ulasıp onu greeting degiskenine tanımlıyorum */
let greeting = document.querySelector("#greeting")

greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`