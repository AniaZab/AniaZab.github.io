const pagesInWebsite = ["PageRegularEvents", "PageNewEvents", "PageRegister", "PageLogin", "PageAddEvent"];

const init = function show(shown) {
    pagesInWebsite.forEach(page => {
        document.getElementById(page).style.display = 'none'
    })
    document.getElementById(shown).style.display = 'block';
}
init("PageRegularEvents");