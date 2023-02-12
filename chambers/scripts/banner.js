let today = new Date();
function setBanner (today) {
    if(today.getDay() == 1 || today.getDay() == 2 || today.getDay() == 3 ) {
        document.querySelector("#hero-banner").style.background = `url("https://sosaemilio.github.io/wdd230/chambers/images/meet-greet-wednesday.webp")`;
    }
}

setBanner(today);