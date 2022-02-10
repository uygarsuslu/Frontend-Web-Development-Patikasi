// ********** DOM - document object model kullanımı ********** //

// URL bilgisini aldik //
console.log(document.URL)

// Location bilgisini aldik //
console.log(document.location)

// Hostname bilgisini aldik//
console.log(document.location.hostname)

// Javascript dosyasinin bulundugu dosyanin ismini verir //
console.log(document.location.pathname)

// Document'in icindeki body kismini aldik //
console.log(document.body)

// Document'in icindeki head kismini aldik //
console.log(document.head)

// Document'in arka plan rengini degistirdik //
document.body.style.backgroundColor = "aqua"