// ********** fat arrow fonksiyonu kullanimi ********** //

function hello(firstName) {
    console.log(`Merhaba ${firstName}`)
}

hello("javascript")

const helloFuncV1 = (firstName) => { 
    console.log(`Merhaba ${firstName}`) 
}
helloFuncV1("helloFuncV1")

// 1 tane parametre yazılcaksa paranteze "()"" ve 1 tane işlem yazılcaksa süslü paranteze "{}" gerek yok //
const helloFuncV2 = firstName => 
console.log(`Merhaba ${firstName}`)
helloFuncV2("helloFuncV2")

const helloFuncV3  = (firstName, lastName) =>  
{console.log(`Merhaba ${firstName} ${lastName}`)} // süslü parantez kullanmasak da olur!!! //
helloFuncV3("helloFuncV3", "last name info")

const helloFuncV4  = (firstName, lastName) =>  { // burda süslü parantez kullanmak zorundayız //
    let info = `Merhaba ${firstName} ${lastName}`
    console.log(info)
    return info
}
helloFuncV4("helloFuncV4", "other info")