const directoryUrl = "https://sosaemilio.github.io/wdd230/chambers/data/members.json";

async function getCompanies(url) {
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.json();
        displayDirectory(data);
    } else {
        throw Error(await response.text());
    }
} 

function displayDirectory(directoryJSON) {
    directoryJSON.forEach((company) => {
        const section = document.createElement("section");
        const companyName = document.createElement("h2");
        companyName.textContent = company.companyName;
        console.log(company)

        const address = document.createElement("p");
        address.textContent = company.address;

        const telephone = document.createElement("a");
        telephone.textContent = company.telephone;
        telephone.setAttribute("href", `tel:${company.telephone}`);

        section.append(companyName, address, telephone)
        document.getElementById("discovery").append(section)


    });
}

getCompanies(directoryUrl);