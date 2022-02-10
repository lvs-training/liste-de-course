const button = document.querySelector(".container__input-wrapper__btn-add");
const input = document.querySelector(".container__input-wrapper__input-user");
const ul = document.querySelector(".container__list-wrapper__list");
const listItems = document.querySelectorAll(".container__list-wrapper__list__item");

button.addEventListener("click", addListItemOnClick);
input.addEventListener("keypress", addListItemOnKeypress);

/* set events and add buttons for all list items */
for (const li of listItems) {
    setListItem(li);
}

function inputLength() {
    return input.value.length;
}

/* Add button and set events for li sent as a parameter */
function setListItem(li) {
    li.addEventListener("click", toggleListItem);
    let btn = li.appendChild(document.createElement("button"));
    btn.classList.add("container__input-wrapper__btn-delete");
    btn.innerText = "delete";
    btn.addEventListener("click",
        function() {
            deleteListItem(btn);
        }
    );
}

/* Add an item to the list */
function addListItem() {
    let li = document.createElement("li");
    li.classList.add("container__list-wrapper__list__item");
    
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

    setListItem(li);

    input.value = "";
}

function addListItemOnClick() {
    if (inputLength() > 0) {
        addListItem();
    }
}

function addListItemOnKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        addListItem();
    }
}

/* Toggle list item class. This class affects the item bg color */
function toggleListItem(elem) {
    elem.target.classList.toggle('container__input-wrapper__btn-delete--done');
}

function deleteListItem(btn) {
    btn.parentElement.remove();
}
