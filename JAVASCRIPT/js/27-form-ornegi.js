// ********** form ornegi ********** //

function form () {
    let name = document.getElementById("isim").value;
    let surname = document.getElementById("soyisim").value;
    let phone = document.getElementById("tel").value;
    let adress = document.getElementById("adres").value;

    alert(name + " " + surname + " " + phone + " " + adress);
}
