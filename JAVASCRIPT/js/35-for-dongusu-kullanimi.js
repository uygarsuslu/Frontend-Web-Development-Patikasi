// ********** for dongusu kullanimi ********** //

// for ([baslangicAtamasi]; [kosulifadesi]; [arttirimİfadesi] ) {
//      yapilacak islem 
// }

let users = ["Lorem", "Ipsum", "Dolor", ]

// for (let index = 0; index < 10; index++) {
//     console.log(index)
// }

// let index = 0
// for (;  index < 10; index++) {
//     console.log(index)
// }

const userListDOM = document.querySelector("#userList")

for (index = 0; index<users.length; index++) {
    const liDOM = document.createElement("li") // li olusturduk //
    liDOM.innerHTML = users[index]
    userListDOM.appendChild(liDOM) // userListDOM'a ekledik //
}

// 20 ile 40 arasındaki tüm sayıları konsola yazdırın //
for (i = 20; i<40; i++){
    console.log(i)
}

// 0 ve 50 sayıları arasından çift olanları konsola yazdıralım //
for (j = 0; j<50; j++) {
    if( j % 2 == 0){
        console.log(j)
    }
}