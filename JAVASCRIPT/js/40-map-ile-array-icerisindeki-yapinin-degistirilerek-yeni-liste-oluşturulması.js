// ********** map ile array icerisindeki yapinin degistirilerek yeni liste olusturulmasi ********** //

const USERS = ["AYSE", "MehMet", "TugCE", "AkSEL"]

// userName icinde orjinal isim kalsin
// shortName icinde ilk harf buyuk . (A.)
// newName icinde ilk harf buyuk olsun
// {userName: "AYSE", shortName: "A.", newName: "Ayse"} 

const NEW_USERS = USERS.map(user => user.toLowerCase())
console.log(NEW_USERS)

// const USERS_OBJ = USERS.map(item => {
//     return {
//         userName: item,
//         shortName: `${item[0]}.`,
//         newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//     }
// })
// console.log(USERS_OBJ)

// return yerine normal parantez icine aldik //
const USERS_OBJ = USERS.map(item => ({
    userName: item,
    shortName: `${item[0]}.`,
    newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
})
)
console.log(USERS_OBJ)

//Maaş zam hesaplama; İşçilerin aldıkları maaşlara ait bir dizi olsun. Maaşı 3000 TL'nin üzerinde olanlarınkine %15, altında olanlarınkine de %25 zam yapan bir array map oluşturalım.

const maaslar = [ 1100, 13000, 2500, 4500, 1500, 25000, 2000 ];
const yeniMaaslar = maaslar.map((e)=>{
    if(e > 3000)
        return e * 1.15;
    else
        return e * 1.25;
});

console.log( yeniMaaslar );
//[1210, 13650, 2750, 4725, 1650.0000000000002, 26250, 2200]