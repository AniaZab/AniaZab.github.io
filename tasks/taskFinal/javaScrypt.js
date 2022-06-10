const pagesInWebsite = ["PageRegularEvents", "PageNewEvents", "PageRegister", "PageLogin", "PageAddEvent"];

function show(shown) {
    pagesInWebsite.forEach(page => {
        document.getElementById(page).style.display = 'none'
    })
    document.getElementById(shown).style.display = 'block';
    return false;
}
show("PageRegularEvents");
$('.datepicker').datepicker({
    format: 'mm/dd/yyyy',
    startDate: '-3d'
});