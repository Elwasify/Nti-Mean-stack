var items = [];

function addNewItem(item) {
    items.push(item);
}

function readItems() {
    items.forEach(function (i) {
        console.log(i);
    });
}

function modifyItems(index, newItem) {
    items[index] = newItem;
}

function deleteItem(index) {
    items.splice(index, 1);
}

addNewItem("Apple");
addNewItem("Orange");
addNewItem("Banana");

readItems();

modifyItems(1, "Mango");

readItems();

deleteItem(2);

readItems();