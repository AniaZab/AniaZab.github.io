const pagesInWebsite = ["PageUsualEvents", "PageNewEvents", "PageRegister", "PageLogin", "PageAddEvent"];

function show(shown) {
    pagesInWebsite.forEach(page => {
        document.getElementById(page).style.display = 'none'
    })
    document.getElementById(shown).style.display = 'block';
}
show("PageUsualEvents");