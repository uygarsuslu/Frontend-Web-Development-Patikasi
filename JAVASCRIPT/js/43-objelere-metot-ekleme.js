// ********** objelere metot ekleme ********** //
// Bir özellik eğer bir fonksiyonu işaret ediyorsa bu özelliğe metot denir.

let user1 = {
    firstName: "Bilgin",
    lastName: "Uzman",
    score: [1, 2, 3, 4],
    isActive: true,
    shortName: function() {
        return  `${this.firstName[0].toUpperCase()}. ${this.lastName}`
    }
}
console.log(user1.shortName())


var birey = {
    isim: "ali",
    soyisim: "veli",
    dogumYili: 1989,
    merhabaDe: (age) => ` Merhaba, ben ${birey.isim} ${birey.soyisim}, ${age} yasindayim.`,
}

birey.yasHesapla = function () {
    return 2021 - this.dogumYili
}

console.log(birey.merhabaDe(birey.yasHesapla()))