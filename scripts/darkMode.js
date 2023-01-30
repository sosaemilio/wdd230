const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");
const links = document.querySelectorAll("a");
const navBar = document.querySelector("nav");
const footer = document.querySelector("footer");
const menu = document.querySelector("#menu-icon");
const templeLabel = document.querySelector("#temple-label");
const button = document.querySelector("#btnSubmit");

modeButton.addEventListener("click", () => {
	if (modeButton.src.includes("dark-mode-icon.svg")) {
		main.style.background = "#121212";
		main.style.color = "#fff";
		links.forEach((link) => {
			link.style.color = "#fff";
		});
		navBar.style.background = "#121212";
		footer.style.background = "#121212";
		templeLabel.style.background = "#121212";
		templeLabel.style.color = "#fff";
		button.style.background = "#323232";
		button.style.color  = "#fff";
		button.style.border = "#323232";

		/* -- Menu Icon -- */
		modeButton.src = "images/light-mode-icon.svg";
		modeButton.classList.toggle("white-icon");
		menu.classList.toggle("white-icon");
	} else {
		main.style.background = "#fff";
		main.style.color = "#323232";
		navBar.style.background = "#DDD0C8";
		footer.style.background = "#DDD0C8";
		button.style.background = "#DDD0C8";
		button.style.color = "#323232";
		button.style.border = "solid var(--secondary-color)";
		links.forEach((link) => {
			link.style.color = "#323232";
		});

		/* -- Menu Icon -- */
		modeButton.src = "images/dark-mode-icon.svg";
		modeButton.classList.toggle("black-icon");
		menu.classList.toggle("black-icon");
	}
});
