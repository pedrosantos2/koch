function verifica() {
    var a = document.forms["form"]["a"].value
    var b = document.forms["form"]["b"].value
    var c = document.forms["form"]["c"].value
    var d = document.forms["form"]["d"].value
    if (a == null || a == "" , b == null || b == "", c == null || c == "", d == null || d =="") {
            alert("Complete os campos abaixo")
            return false
    } else {
        location.href="pesquisa.html";
    }
}

function verifica2() {
    var a = document.forms["form"]["a"].value
    var b = document.forms["form"]["b"].value
    if (a == null || a == "" , b == null || b == "") {
            alert("Complete os campos abaixo")
            return false
    } else {
        location.href="pesquisa.html";
    }
}