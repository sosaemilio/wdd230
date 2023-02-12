const membersURL = "https://sosaemilio.github.io/wdd230/chambers/data/members.json";

async function getCompanies(url) {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        displaySpotlight(data);
    } else {
        throw Error(await response.text());
    }
} 

function displaySpotlight(members) {
    let cards = document.querySelectorAll(".card-content");
    let spotlightMember = [];

    members.forEach((member) => {
        if (member.membership == "Gold Membership" || member.membership == "Silver Membership") {
            spotlightMember.push(member)
        }
    });

    cards.forEach((card, index) => {
        let companyTitle = document.createElement("h3");
        companyTitle.textContent = spotlightMember[index].companyName;

        let membership = document.createElement("h4");
        membership.textContent = spotlightMember[index].membership;

        let learnMore = document.createElement("a");
        learnMore.textContent = "Learn More";
        learnMore.setAttribute("href", members[index].website);
        card.append(companyTitle, membership, learnMore)
    })
}
getCompanies(membersURL);