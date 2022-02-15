// ********** filter ile array icerisinde sadece istenilen bilgilerin yeni listeye eklenmesi ********** //

const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop", "PC", "Server", "Mouse", "Keyboard"]

// 5 harften fazla olanlar (6) //
const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
console.log(NEW_PRODUCTS)


// aktif kullanicilar //
const USERS = [
    { fullName: "Ayse Sumer", isActive: false },
    { fullName: "Ahmet Urgan", isActive: true },
    { fullName: "Asya Basar", isActive: true },
    { fullName: "Aksel Durmaz", isActive: false },
]

// const ACTIVE_USERS = USERS.filter(user  => user.isActive == true)
const ACTIVE_USERS = USERS.filter(user => user.isActive)
console.log(ACTIVE_USERS)

// Soru 1: Aşağıdaki diziyi kullanarak filter() metodu ile yaşı 30'dan büyük olan kişiyi getirin.
// Soru 2: Aşağıdaki diziyi kullanarak filter() metodu ile JavaScript bilen kişiyi getirin.
const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
},
{
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
}
];

const YAS = person.filter(item => item.age > 30 )
console.log("yaşı 30'dan büyük olan kişi", YAS)

const DİL = person.filter(bilgi => bilgi.languages.includes ("JavaScript"))
console.log("JS bilen kişi", DİL)