const message = document.getElementById("message");
const password = document.getElementById("username");
const passwordConfirmation = document.getElementById("username-confirmation");

passwordConfirmation.addEventListener("focusout", checkPassword);

function checkPassword(){
    if (password.value !== passwordConfirmation.value) {
        message.style.display = "block"
        message.textContent = "Password doesn't match";
        message.style.color = "red";
        password.focus();
    } else {
        message.style.display = "none";
    }
}