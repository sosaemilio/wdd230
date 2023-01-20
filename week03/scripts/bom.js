let chapters = getChapterList() || [];


chapters.forEach(chapters => {
    displayList(chapters);
});

const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
    if (input.value != "") {
        displayList(input.value)
        chapters.push(input.value)
        setChapterList();
        input.value = "";
        input.focus();
   };
});

function displayList(item){
    let listItem = document.createElement("li");
    let deleteButton = document.createElement("button");

    listItem.textContent = item;
    deleteButton.textContent = "❌";
    listItem.append(deleteButton);
    list.append(listItem);

    deleteButton.addEventListener("click", () => {
        list.remove(listItem);
        deleteChapter(listItem.textContent);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chapters));
}


function getChapterList(){

}