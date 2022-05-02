function ZmienTekst(zmienna) {
    /*alert(zmienna);*/
    document.getElementById("tekstWysw").value += zmienna;
}

function Wykonaj() {
    var dzialanie = document.getElementById("tekstWysw").value;
    var wynik = eval(dzialanie);
    document.getElementById("tekstWysw").value = wynik;
}

function Cofnij() {
    var ciag = document.getElementById("tekstWysw").value;
    document.getElementById("tekstWysw").value = ciag.substr(0, ciag.length - 1);
}