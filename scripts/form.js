function updateRange(value) {
    document.getElementById("rate").textContent = value;
}

const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const range = document.getElementById("range");
const username = document.getElementById("username");
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", updateTable())

function updateTable(){
    // document.getElementById("form-input").style.display = "block";
    document.getElementById("name-value").textContent = fullName;
    document.getElementById("email-value").value = email;
    document.getElementById("rating-value").value = range;
    document.getElementById("username-value").value = username;
}
