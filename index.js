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
        const list = document.querySelector('#cols');

        list.innerHTML += `  <div class="col" id="col-card">
        <div class="card h-10">
        <button type="button" class="btn-close" id="btn-close" aria-label="Close"></button>
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
    const liste = document.querySelector('#cols'); //yazılacak yeri seçtik
    let ürün = getUrunFromStorage();

    ürün.forEach(function(ü) {
        liste.innerHTML += `  <div class="col" id="col-card">
        <div class="card h-10">
        <button type="button" class="btn-close" id="btn-close" aria-label="Close"></button>
            <img src="${ü.ÜrunFoto}" class="card-img-top" alt="...">        
            <div class="card-body">
                <h5 class="card-title">${ü.urunIsim}</h5>
                </div>
                </div>
    </div>`;
    });
}


const cardBody = document.getElementById("cols");
cardBody.addEventListener("click", deleteUrun);

function deleteUrun(e) { // e event objesidir
    if (e.target.id === "btn-close") {

        e.target.parentElement.parentElement.remove();
        deleteUrunFromStorage(e.target.childElement);

    }
}

function deleteUrunFromStorage(Title) {

    let ürün = getUrunFromStorage();
    ürün.forEach(function(urun, index) {
        if (urun.ürün === Title) {
            ürün.splice(index, 1);
        }
    });
    localStorage.setItem("ürün", JSON.stringify(ürün));

}
const icon = document.getElementById("icon");
icon.addEventListener("keyup", filter);

function filter(e) {

    const filterValue = e.target.value.toLowerCase();
    const liste = document.querySelectorAll('#col-card');

    liste.forEach(function(list) {
        const text = list.textContent.toLowerCase();
        console.log(text);
        if (text.indexOf(filterValue) === -1) { //filtrelemek istediğimiz kısmı gireriz
            //bulunamama
            list.style.display = 'none'; //bulunmazsa blok görünmez
        } else {
            list.style.display = 'block'; // bulursak görünür
        }
    })
}