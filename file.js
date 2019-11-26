function updateItemStatus() {
    var cbId = this.id.replace("cb_", "");
    var itemText = document.getElementById("item_" + cbId);
    if (this.checked) {
        itemText.className = "checked";
    }
    else {
        itemText.className = "";
    }
}

function renameItem() {}

function removeItem() {
    var spanId = this.id.replace("item_", "");
    document.getElementById("li_" + spanId).style.display = "none";
}

function addNewItem(list, itemText) {
    totalItems++;
    var listItem = document.createElement("li");
    listItem.id = "li_" + totalItems;
    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.id = "cb_" + totalItems;
    checkBox.onclick = updateItemStatus;
    var span = document.createElement("span");
    span.id = "item_" + totalItems;
    span.onclick = renameItem;
    span.ondblclick = removeItem;
    span.innerText = itemText;
    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    list.appendChild(listItem);
}
var totalItems = 0;
var initemText = document.getElementById("initemText");
initemText.focus();
initemText.onkeyup = function (event) {
    if (event.which == "13") {
        var itemText = initemText.value;
        if (!(itemText) || itemText == "" || itemText == " ") {
            return false;
        }
        addNewItem(document.getElementById("todolist"), itemText);
        initemText.focus();
        initemText.select();
    }
};