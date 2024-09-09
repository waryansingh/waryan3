document.getElementById('add-food-item').addEventListener('click', function () {
    const foodItems = document.getElementById('food-items');
    const foodItemCount = foodItems.children.length + 1;

    const newFoodItem = document.createElement('div');
    newFoodItem.classList.add('food-item');
    
    newFoodItem.innerHTML = `
        <label for="food-name-${foodItemCount}">Food Name</label>
        <input type="text" id="food-name-${foodItemCount}" name="food-name" required>
        
        <label for="food-price-${foodItemCount}">Price</label>
        <input type="number" id="food-price-${foodItemCount}" name="food-price" required>
        
        <label for="food-description-${foodItemCount}">Description</label>
        <textarea id="food-description-${foodItemCount}" name="food-description" required></textarea>
        
        <label for="food-photo-${foodItemCount}">Food Photo</label>
        <input type="file" id="food-photo-${foodItemCount}" name="food-photo" accept="image/*" required>
    `;
    
    foodItems.appendChild(newFoodItem);
});

document.getElementById('vendor-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted successfully!');
    // Add further handling as needed, e.g., sending data to a server.
});
