const pagesInWebsite = ["PageRegularEvents", "PageNewEvents", "PageRegister", "PageLogin", "PageAddEvent"];
let picker = document.getElementById("datetimepicker1");

const init = function() {
    picker.addEventListener("click", clickPicker);
}
const clickPicker = function() {
    document.getElementById("datetimepicker1").datepicker();
}

function show(shown) {
    pagesInWebsite.forEach(page => {
        document.getElementById(page).style.display = 'none'
    })
    document.getElementById(shown).style.display = 'block';
    return false;
}

show("PageRegularEvents");
init();