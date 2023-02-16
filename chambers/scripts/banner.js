let today = new Date();
const announcement = document.createElement("section");
announcement.classList.toggle("announcement-bar");

function setBanner (today) {
    if(today.getDay() == 1 || today.getDay() == 2 || today.getDay() == 3 ) {
        //document.querySelector("#hero-banner").style.background = `url("https://sosaemilio.github.io/wdd230/chambers/images/meet-greet-wednesday.webp")`;
        
        let content = document.createElement("p");
        content.innerHTML = "<strong>You are invited to join our Meet and Greet on Wednesday at 7:00 PM. Location: Maremares Hotel (Venetur)</strong>";
        content.style.margin = "0";

        announcement.appendChild(content);
        document.querySelector(".hero-section").after(announcement);
    }
}

setBanner(today);