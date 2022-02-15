// ********** object ve array destructuring kullanimi ********** //

// object destructuring //
let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "kodluyoruz.org"
}

// obje icindeki bilgilerin tek seferde cikarilmasi //

// let userName = settings.userName
// console.log(userName)

let { userName: user, password, isActive, ip: serverIp, serverName } = settings
console.log(settings)

// YUKARDA DEGİSTİRDİGİMİZ İCİN ARTIK HATA VERİR //
// console.log( userName, password, isActive, ip, serverName )
// console.log(userName)

// rename && destructuring
console.log(user, password, isActive, serverIp, serverName)
console.log(user)

// obje icindeki bazi bilgilerin cikarilmasi //
let { userName: userName2, password: password2, isActive: isActive2, ...newSettings } = settings
console.log(newSettings)

// objenin destructuring ile kopyalanmasi //

// HATALI!!!!! //
// let settings2 = settings
// settings2.userName = "Degisen Bilgi"
// console.log("settings: ", settings)
// console.log("settings2: ", settings2)

// DOGRUSU!!!!! //
let settings2 = { ...settings }
settings2.userName = "Degisen Bilgi"
console.log("settings: ", settings)
console.log("settings2: ", settings2)

// ********************************************************************************* //

let score = [100, 200, 300, 400]

let [score1, score2, ...otherScore] = score
console.log(score1, score2, otherScore)

let scoreCopy = [...score]
// object kopyalama ile ayni ayni... let settings2 = {...settings}
console.log(scoreCopy)

scoreCopy[0] = 1
console.log(scoreCopy)

// ********************************************************************************* //

const toplama = ({ sayi1, sayi2, ...args }) => {
    let sonuc = sayi1 + sayi2;
    for (let sayi in args) {
        sonuc += args[sayi];
    }
    return sonuc;
}
const sayilar = {
    sayi1: 8,
    sayi2: 4,
    sayi3: 7,
    sayi4: 9,
    sayi5: 11
}
console.log("toplama islemi: ", toplama(sayilar))
   // 39 doner