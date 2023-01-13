const modeButton = document.querySelector("#mode");
const main = document.querySelector("body");
const links = document.querySelectorAll("a");
const navBar = document.querySelector("nav");
const footer = document.querySelector("footer")
modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#121212";
		main.style.color = "#fff";
		links.forEach((link) => {
			link.style.color = "#fff";
		});
		navBar.style.background = "#121212";
		footer.style.background = "#121212"
		modeButton.textContent = "❎";
	} else {
		modeButton.textContent = "☑️";
	}
});
