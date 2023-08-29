function control() {
    const ad = document.getElementById('name').value;
    const soyad = document.getElementById('surname').value;
    var targetPageURL = "index.html";
    if (ad === "") {
        alert("İsim kısmı boş bırakılamaz");

    } else if (soyad === "") {
        alert(" Soy İsim kısmı boş bırakılamaz");
    } else {
        window.location.href = targetPageURL;
    }
    var time = new Date();
    var date = time.toLocaleDateString();




    const newUser = {
        Ad: ad,
        Soyad: soyad,
        Tarih: date
    };
    Storage.addUserToStorage(newUser);

}