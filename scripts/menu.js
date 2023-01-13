const menubutton = document.querySelector("#menu-icon");
const menuitems = document.querySelectorAll(".menu-item");
// menuitems will be a Node List of the list items

menubutton.addEventListener("click", () => {
	menuitems.forEach((item) => item.classList.toggle("menu-item"));
	menubutton.classList.toggle("close");
});

