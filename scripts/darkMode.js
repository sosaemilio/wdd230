const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");
const links = document.querySelectorAll("a");
const navBar = document.querySelector("nav");
const footer = document.querySelector("footer");
const menu = document.querySelector("#menu-icon");

modeButton.addEventListener("click", () => {
	if (modeButton.src.includes("dark-mode-icon.svg")) {
		main.style.background = "#121212";
		main.style.color = "#fff";
		links.forEach((link) => {
			link.style.color = "#fff";
		});
		navBar.style.background = "#121212";
		footer.style.background = "#121212";
		modeButton.src = "images/light-mode-icon.svg";
		modeButton.classList.toggle("white-icon");
		menu.classList.toggle("white-icon");
	} else {
		modeButton.src = "images/dark-mode-icon.svg";
		main.style.background = "#fff"
		main.style.color = "#323232"
		navBar.style.background = "#DDD0C8";
		footer.style.background = "#DDD0C8";
		links.forEach((link) => {
			link.style.color = "#323232";
		});
		modeButton.classList.toggle("black-icon");
		menu.classList.toggle("black-icon");
	}
});
