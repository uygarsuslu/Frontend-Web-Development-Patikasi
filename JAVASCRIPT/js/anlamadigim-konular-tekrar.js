// ********** anlamadigim konular tekrar ********** //

// Local Storage
const handleStorage = document.getElementById('handleStorage');
const show = document.getElementById('show');
const remove = document.getElementById('remove');

const paragraph = document.getElementById('storage');

let user = { username: 'uygarsuslu', password: '12345' };
//ekleme
handleStorage.addEventListener('click', function () {
    localStorage.setItem('username', JSON.stringify(user));
});

//cikarma ve paragrafı temizleme
remove.addEventListener('click', function () {
    localStorage.clear();
    paragraph.innerHTML = '';
});

//gosterme
show.addEventListener('click', () => {
    const username = localStorage.getItem('username');
    const parsedUserData = JSON.parse(username);

    paragraph.innerHTML =  $(parsedUserData.username), $(parsedUserData.password);
});

// addEventListener

//action buttons
const yellow = document.getElementById('yellow');
const blue = document.getElementById('blue');

//area
const bluearea = document.getElementById('bluearea');
const yellowarea = document.getElementById('yellowarea');

//ayni sey
// yellow.addEventListener('click', () => {
//     yellowarea.style.backgroundColor = 'yellow';
// })

yellow.onclick = function () {
    yellowarea.style.backgroundColor = 'yellow';
};

blue.onclick = function () {
    bluearea.style.backgroundColor = 'blue';
};

//area
const input = document.getElementById('input');
const output = document.getElementById('output');


//'input' olarak yazdığımız yer aslında bizim eventimizin adı. Bu click ya da onmouseover da olabilirdi. Bu eventimizi 'output' olarak yazdığımız yerde çalıştırıyoruz.
input.addEventListener('input', function (event) {
    output.innerText = event.target.value;
});
