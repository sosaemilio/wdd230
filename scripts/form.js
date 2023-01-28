function updateRange(value) {
    document.getElementById("rate").textContent = value;
}

const submitBtn = document.getElementById("btnSubmit");

submitBtn.addEventListener("click", () => {
    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const range = document.getElementById("range").value;
    const username = document.getElementById("username").value;


    document.querySelector("#form-input").style.display = "block";
    document.querySelector(".form").style.display = "none";
    console.log(fullName);
    document.getElementById("name-value").innerHTML = fullName;
    document.getElementById("email-value").innerHTML = email;
    document.getElementById("rating-value").innerHTML = range;
    document.getElementById("username-value").innerHTML = username;
});
