var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.addEventListener("click", toggleli);
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    let btn = li.appendChild(document.createElement("button"))
    btn.innerText = "delete";
    btn.addEventListener("click",
        function() {
            deleteLi(btn);
        }
    );
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function toggleli(elem) {
    elem.target.classList.toggle('done');
}

function addListeAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function deleteLi(btn) {
    btn.parentElement.remove();
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListeAfterKeypress);

for (const li of listItems) {
    li.addEventListener("click", toggleli);
    let btn = li.appendChild(document.createElement("button"))
    btn.innerText = "delete";
    btn.addEventListener("click",
        function() {
            deleteLi(btn);
        }
    );
}