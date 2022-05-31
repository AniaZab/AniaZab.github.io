const pagesInWebsite = ["PageRegularEvents", "PageNewEvents", "PageRegister", "PageLogin", "PageAddEvent"];

function show(shown) {
    pagesInWebsite.forEach(page => {
        document.getElementById(page).style.display = 'none'
    })
    document.getElementById(shown).style.display = 'block';
}
show("PageRegularEvents");