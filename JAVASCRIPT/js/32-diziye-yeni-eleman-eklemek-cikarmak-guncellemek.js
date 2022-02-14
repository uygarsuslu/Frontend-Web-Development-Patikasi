// ********** diziye yeni eleman eklemek - cikarmak - guncellemek ********** //

let items = [10, 20, 30, 40, ]
console.log("items - ilk hali : ", items)

// ARRAY: SONA OGE/ELEMAN EKLEMEK -> push //
items.push(50)
console.log("50 :", items)

// ARRAY: BASA OGE/ELEMAN EKLEMEK -> unshift //
items.unshift(5)
console.log("5 :", items)

// ARRAY: SONDAKİ OGEYİ/ELEMANİ CİKARMAK -> pop //
let lastItem = items.pop() // son elemani listItem icerisine ekledik //
console.log("lastItem: ", lastItem, ", items: ", items)

// ARRAY: BASTAKİ OGEYİ CİKARMAK -> shift //
let firstItem = items.shift() // ilk elemani firstItem icerisine ekledik //
console.log("firstItem: ", firstItem, ", items: ", items)

// ARRAY İCERİSİNDEKİ BİR OGENİN BİLGİSİNİN DEGİSTİRİLMESİ //

// ilk oge degistirilmesi // 
items[0] = 7;
console.log(items)

// son oge degistirilmesi //
items[items.length-1] = 175
console.log(items)

// kaydeder ama aradakiler bos kalir //
items[950] = 800
console.log(items)

var sports = ['basketball', 'football', 'tennis' ];
console.log(sports); // basketball, football, tennis
sports.splice(1,0,'baseball');
console.log(sports); // basketball, baseball, football, tennis

var spor = ['basketball', 'football', 'tennis' ];
console.log(spor); // basketball, football, tennis
spor.splice(1,1);
console.log(spor); // basketball, tennis 

