let shoppingList = [];

shoppingList.push("Milk", "Bread", "Apples");

shoppingList[1] = "Bananas";
shoppingList.push("Eggs");

let removedItem = shoppingList.pop();
console.log("Removed item:", removedItem);

shoppingList.sort();

let milkIndex = shoppingList.indexOf("Milk");
console.log("Index of Milk:", milkIndex);

let bananasIndex = shoppingList.indexOf("Bananas");
shoppingList.splice(bananasIndex + 1, 0, "Carrots", "Lettuce");

let newList = ["Juice", "Pop"];

shoppingList = shoppingList.concat(newList, newList);

let popIndex = shoppingList.lastIndexOf("Pop");
console.log("Last index of Pop:", popIndex);

console.log("Final shopping list:", shoppingList);


