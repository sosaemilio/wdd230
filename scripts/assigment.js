const assigmentsUrl = "https://sosaemilio.github.io/wdd230/assigment.json";
const activities = document.querySelector("#activities");

async function getAssigmentData(url) {
    const response = await fetch(url);
    const data = await response.json();

    displayAssigments(data);
}


const displayAssigments = (weeksJSON) => {
    let urls = activities.querySelectorAll("a");
    //Obtain the keys of the JSON to obtain the array
    Object.entries(weeksJSON).forEach(([week]) => {
        // ForEach Week we will save the a into a
        weeksJSON[week].forEach((assigment) => {
            urls.setAttribute("href", assigment);
        });
    })
}

getAssigmentData(assigmentsUrl);