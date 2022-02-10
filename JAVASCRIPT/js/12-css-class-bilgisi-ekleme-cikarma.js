// ********** dom'a css class bilgisi eklemek ve cikarmak ********** //

let greeting = document.querySelector("#greeting")

// class ekleme //
greeting.classList.add("text-primary")
greeting.classList.add("title")
// tek seferde 1'den fazla class ekleme //
greeting.classList.add("new-info", "second-class", "third-class") 

// class cikarma //
greeting.classList.remove("title", "second-class")

console.log(greeting.classList)

