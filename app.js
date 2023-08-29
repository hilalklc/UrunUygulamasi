const form = document.getElementById('ürün-form');
const urunFoto = document.querySelector('#url');
const urunIsim = document.querySelector('#ürünisim');

form.addEventListener('submit', addUrun);

function addUrun(e) {

    const url = urunFoto.value;
    const isim = urunIsim.value;
    const newUrün = {
        ÜrunFoto: url,
        urunIsim: isim
    };
    if (url === "" || isim === "")
        console.log("boş bırakıldı");
    else {

        addUrunToStorage(newUrün);
        const list = document.querySelector('#col');

        list.innerHTML += `  <div class="col">
        <div class="card h-10">
            <img src="${url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${isim}</h5>
                </div>
                </div>
    </div>`;
    }
    urunFoto.value = "";
    urunIsim.value = "";
    e.preventDefault();
}

function getUrunFromStorage() {
    let ürün;
    if (localStorage.getItem("ürün") === null) {
        ürün = [];
    } else {
        ürün = JSON.parse(localStorage.getItem("ürün"));
    }
    return ürün;
}

function addUrunToStorage(newUrün) {

    let ürün = getUrunFromStorage();

    ürün.push(newUrün);
    localStorage.setItem("ürün", JSON.stringify(ürün));

}

document.addEventListener("DOMContentLoaded", loadAllToUI);

function loadAllToUI() {

    const liste = document.querySelector('#col'); //yazılacak yeri seçtik
    let ürün = getUrunFromStorage();
    ürün.forEach(function(ü) {
        liste.innerHTML += `  <div class="col">
        <div class="card h-10">
            <img src="${ü.url}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${ü.isim}</h5>
                </div>
                </div>
    </div>`;
    })
}