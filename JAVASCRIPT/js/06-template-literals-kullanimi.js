// ********** template literals kullanimi ********** //

let username = "uygar"
let DOMAIN = "kodluyoruz.org"

let email = username + "@" + DOMAIN
//console.log("Merhaba", username, "sitemize hoşgeldin", "mail adresin: ", email)

let info = `
Merhaba ${username} sitemize hoşgeldin..
mail adresin: ${email}
kısa isminiz: ${username[0]}.
mail adresinin uzunluğu: ${email.length} karakter
borcunuz: ${(2 + 3) * 5} TL
gunun saat bilgisi: ${new Date().getHours()}
`
console.log(info)

const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
}
const bookTable = `
<table border>
    <tbody>
        <tr>
            <td>Kitap</td>
            <td>${kitap.ad}</td>
        </tr>
        <tr>
            <td>Yazar</td>
            <td>${kitap.yazar}</td>
        </tr>
        <tr>
            <td>Tarih</td>
            <td>${kitap.tarih}</td>
        </tr>
    </tbody>
</table>
` 
document.body.innerHTML = bookTable