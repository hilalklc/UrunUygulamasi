class Storage {
    static addUserToStorage(newUser) {
        let login;
        if (localStorage.getItem("login") === null) {
            login = [];
        } else {
            login = JSON.parse(localStorage.getItem("login")); //JSON biçimindeki bir dizeyi JavaScript nesnesine çevirir, böylece bu nesneyi JavaScript kodunuzda kullanabilirsiniz.
        }

        login.push(newUser);
        localStorage.setItem("login", JSON.stringify(login)); //JavaScript nesnesini bir JSON dizesine çevirir, böylece bu dizeyi veri depolamak veya başka bir uygulamaya iletmek gibi amaçlar için kullanabilirsiniz.

    }

}