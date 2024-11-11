let inventory = [];

let item1 = {
  name: "Laptop",
  model: "Dell XPS 13",
  cost: 999.99,
  quantity: 50
};

let item2 = {
  name: "Smartphone",
  model: "iPhone 14",
  cost: 799.99,
  quantity: 200
};

let item3 = {
  name: "Headphones",
  model: "Sony WH-1000XM4",
  cost: 349.99,
  quantity: 75
};

inventory.push(item1, item2, item3);

console.log("Inventory: ", inventory);

console.log("Quantity of third item (Headphones):", inventory[2].quantity);

// new element 
let item4 = {
  name: "Smartwatch",
  model: "Apple Watch Series 8",
  cost: 399.99,
  quantity: 120
};

// adding new element to inventory 
inventory.push(item4);

console.log("Updated Inventory: ", inventory);

console.log("Quantity of Smartwatch (item4):", inventory[3].quantity);
