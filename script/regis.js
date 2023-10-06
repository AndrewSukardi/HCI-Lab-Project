var text = document.getElementById("text-alert");

var nama = false;
var mail = false;
var lahir = false;
var gender = false;
var pw = false;
var countrys = false;

const pwes = document.getElementById("pass");


document.getElementById("icon-eye").addEventListener("click", function () {
    document.getElementById("icon-eye").classList.toggle("close");
    const type = pwes.getAttribute("type") === "password" ? "text" : "password";
    pwes.setAttribute("type", type);
});

function calling(texting, id) {
    text.textContent = texting;
    document.getElementById("alert-massage").style.display = "flex";
    document.getElementById(id).classList.add("errors");
    setTimeout(() => {
        document.getElementById("alert-massage").style.display = "none";
    }, 7000);
}


document.querySelector("#close-click").addEventListener("click", function () {
    document.getElementById("alert-massage").style.display = "none";
});




document.getElementById("name").addEventListener("keyup", function () {
    var nam = document.getElementById("name").value;
    var checknum = false;
    var checkspecial = false;
    var specialChars = "!@#$%^&*()_+{}:\"<>?|[];',./`~";

    for (let i = 0; i < nam.length; i++) {
        if (nam[i] >= '0' && nam[i] <= '9') {
            checknum = true;
        }
        if (specialChars.indexOf(nam[i]) != -1) {
            checkspecial = true;
        }
    }
    if (checknum || checkspecial) {
        calling("Name must contain only alphabet", "name");
    }
    else {
        document.getElementById("alert-massage").style.display = "none";
        document.getElementById("name").classList.remove("errors");
        nama = true;
    }
});

document.getElementById("email").addEventListener("keyup", function () {
    var mails = document.getElementById("email").value;
    let flag = 0;
    let flag2 = 0;
    for (let i = 0; i < mails.length; i++) {
        if (mails[i] == '@') {
            flag += 1;
        }

        if (mails[i] == '.') {
            flag2 += 1;
        }
    }

    if (mails.length < 12) {
        calling("Email must be more than 12 character", "email");
    }
    else if (mails.indexOf("@") == -1) {
        calling("There is no @ in email", "email");
    }

    else if (mails.indexOf(".") == -1) {
        calling("There is no dot in email", "email");
    }

    else if (mails.indexOf("@") == 0) {
        calling("@ not in begining email", "email");
    }

    else if (mails.indexOf(".") == 0) {
        calling("dot not in begining email", "email");
    }

    else if (flag > 1) {
        calling("To much @ in email", "email");
    }

    else if (flag > 3) {
        calling("To much dot in email", "email");
    }

    else if (!mails.endsWith('.co.id') && !mails.endsWith('.com') && !mails.endsWith('.org')) {
        calling("Email must be end with valid domain", "email");

    }

    else {
        document.getElementById("alert-massage").style.display = "none";
        document.getElementById("email").classList.remove("errors");
        mail = true;
    }
});

document.getElementById("dob").addEventListener("change", function () {
    var birthday = document.getElementById("dob").value;
    var bod = new Date(birthday);

    var year = bod.getFullYear();

    if (birthday === "") {
        calling("Invalid date", "dob");
    }
    else if (year == isNaN || year > 2023 || year < 1800) {
        calling("Invalid year", "dob");
    }
    else {
        document.getElementById("alert-massage").style.display = "none";
        document.getElementById("dob").classList.remove("errors");
        lahir = true;
    }

});


document.getElementById("pass").addEventListener("keyup", function () {
    var pws = document.getElementById("pass").value;
    var haslower = false;
    var hasupper = false;
    var hasnumber = false;
    var hasspecial = false;
    var specialChars = "!@#$%^&*()_+{}:\"<>?|[];',./`~";

    for (let i = 0; i < pws.length; i++) {
        if (pws[i] == pws[i].toLowerCase()) {
            haslower = true;
        }
        if (pws[i] == pws[i].toUpperCase()) {
            hasupper = true;
        }
        if (pws[i] >= '0' && pws[i] <= '9') {
            hasnumber = true;
        }
        if (specialChars.indexOf(pws[i]) != -1) {
            hasspecial = true;
        }
    }
    if (pws.length < 12) {
        calling("Password too short", "pass");
    }
    else if (pws.length > 24) {
        calling("Password too long", "pass");
    }
    else if (!haslower) {
        calling("password need at least 1 lowercase", "pass");
    }
    else if (!hasupper) {
        calling("password need at least 1 uppercase", "pass");
    }
    else if (!hasnumber) {
        calling("password need at least 1 number", "pass");
    }
    else if (!hasspecial) {
        calling("password need at least 1 special character", "pass");
    }
    else {
        document.getElementById("alert-massage").style.display = "none";
        document.getElementById("pass").classList.remove("errors");
        pw = true;
    }
});
document.getElementById("submit").addEventListener("click", function () {

    if (nama != true) {
        calling("Please input name", "name");
        return;
    }
    if (mail != true) {
        calling("Please input email", "email");
        return;
    }
    if (lahir != true) {
        calling("Please input date of birth", "dob");
        return;
    }


    const males = document.getElementById("male");
    const females = document.getElementById("female");
    if (!males.checked && !females.checked) {
        text.textContent = "please choose gender";
        document.getElementById("alert-massage").style.display = "flex";
        document.getElementById("genders-male").classList.add("error-radio");
        document.getElementById("genders-female").classList.add("error-radio");
        return;
    }
    else if (males.checked || females.checked) {
        document.getElementById("alert-massage").style.display = "none";
        document.getElementById("genders-male").classList.remove("error-radio");
        document.getElementById("genders-female").classList.remove("error-radio");
        gender = true;
    }

    if (pw != true) {
        calling("Please input password", "pass");
        return;
    }

    var pilihan = document.getElementById("country").value;
    var option = document.querySelector("#" + 'negara' + " option[value='" + pilihan + "']");
    if (option == null) {
        calling("No valid country", "country");
        return;
    }
    else if (option != null) {
        document.getElementById("alert-massage").style.display = "none";
        document.getElementById("country").classList.remove("errors");
        countrys = true;
    }

    if (nama == true && lahir == true && mail == true && gender == true && pw == true && countrys == true) {
        document.getElementById("success").style.display = "flex";
        document.getElementById("seconds").innerHTML = 5;
        countdownTimer(5);
    }

});

var clearence;

function redirect() {
    document.location.href = 'home.html';
}

function updateSecs(detiks) {
    document.getElementById("seconds").innerHTML = detiks;

    if (detiks == 0) {
        clearInterval(clearence);
        redirect();
    }
}

function countdownTimer(detiks) {
    var stopss = false;
    clearence = setInterval(function () {
        document.querySelector("#close-success").addEventListener("click", function () {
            document.getElementById("success").style.display = "none";
            stopss = true;
        });
        if (stopss) {
            return;
        }
        else {
            updateSecs(detiks);
            detiks--;
        }
    }, 1000);
}









