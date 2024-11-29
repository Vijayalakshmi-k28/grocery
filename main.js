const inventory = {
    "Apple": { category: "Fruits", unit: "kg", stock: 50, price: 150 },
    "Potato": { category: "Vegetables", unit: "kg", stock: 100, price: 25 },
   
  };
  
  function displayInventory() {
    const inventoryTable = document.getElementById("inventoryTable");
    inventoryTable.innerHTML = ""; 
  
    const tableHeader = `<tr><th>Category</th><th>Name</th><th>Unit</th><th>Stock</th><th>Price (₹)</th></tr>`;
    inventoryTable.innerHTML += tableHeader;
  
    for (const item in inventory) {
      const { category, unit, stock, price } = inventory[item];
      const row = `<tr><td>${category}</td><td>${item}</td><td>${unit}</td><td>${stock}</td><td>${price}</td></tr>`;
      inventoryTable.innerHTML += row;
    }
  }
  
  function processOrder() {
    const orderItems = [];
    const numItems = document.getElementById("numItems").value;
  
    for (let i = 1; i <= numItems; i++) {
      const itemName = document.getElementById(`itemName${i}`).value;
      const itemQuantity = document.getElementById(`itemQuantity${i}`).value;
      orderItems.push({ name: itemName, quantity: itemQuantity });
    }
  
   
    document.getElementById("orderForm").reset();
  }
  
 
  displayInventory();