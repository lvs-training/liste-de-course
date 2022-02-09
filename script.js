var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");

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
    let btn = li.appendChild(document.createElement("button"))
    btn.innerText = "delete";
    btn.addEventListener("click",
        function() {
            deleteListItem(btn);
        }
    );
}

/* Add an item to the list */
function addListItem() {
    var li = document.createElement("li");
    
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

/* Toggle list item class. This class affect the item bg color */
function toggleListItem(elem) {
    elem.target.classList.toggle('done');
}

function deleteListItem(btn) {
    btn.parentElement.remove();
}
