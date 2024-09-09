document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemCount = document.querySelector('.cart--icons span');
    const cartItemsList = document.querySelector('.cart-tems');
    const cartTotal = document.querySelector('.cart-total');
    const cartIcon = document.querySelector('.cart--icons');
    const sidebar = document.getElementById('sidebar');
    const closeButton = document.querySelector('.sidebar-close');
    const checkoutButton = document.querySelector('.checkout-btn');

    if (!cartItemsList) {
        console.error('Element with class "cart-tems" not found.');
        return;
    }

    let cartItems = [];
    let totalAmount = 0;

    addToCartButtons.forEach((button) => 
        button.addEventListener('click', () => {
            const card = button.closest('.card');
            const itemName = card.querySelector('.card--title').textContent;
            const itemPrice = parseFloat(card.querySelector('.price').textContent.slice(1));

            // Check if the item already exists in the cart
            const existingItem = cartItems.find(cartItem => cartItem.name === itemName);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cartItems.push({ name: itemName, price: itemPrice, quantity: 1 });
            }

            // Update the total amount and UI
            updateTotalAmount();
            updateCartUI();
        })
    );

    function updateCartUI() {
        updateCartItemCount(cartItems.length);
        updateCartItemList();
        updateCartTotal();
    }

    function updateCartItemCount(count) {
        if (cartItemCount) {
            cartItemCount.textContent = count;
        }
    }

    function updateCartItemList() {
        cartItemsList.innerHTML = '';
        cartItems.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item', 'individual-cart-item');
            cartItem.innerHTML = `
                <span>(${item.quantity}x) ${item.name}</span>
                <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                <button class="remove-btn" data-index="${index}" aria-label="Remove ${item.name}">
                    <i class="fa-solid fa-times"></i>
                </button>
            `;
            cartItemsList.append(cartItem);
        });

        // Attach event listener to the remove buttons
        cartItemsList.querySelectorAll('.remove-btn').forEach(button => {
            button.addEventListener('click', (event) => {
                const index = parseInt(event.currentTarget.dataset.index, 10);
                removeItemFromCart(index);
            });
        });
    }

    function updateTotalAmount() {
        totalAmount = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }

    function updateCartTotal() {
        if (cartTotal) {
            cartTotal.textContent = `$${totalAmount.toFixed(2)}`;
        }
    }

    function removeItemFromCart(index) {
        if (index >= 0 && index < cartItems.length) {
            cartItedocument.addEventListener('DOMContentLoaded', () => {
                // Elements
                const addToCartButtons = document.querySelectorAll('.add-to-cart');
                const cartItemCount = document.querySelector('.cart--icons span');
                const cartItemsList = document.querySelector('.cart-tems');
                const cartTotal = document.querySelector('.cart-total');
                const cartIcon = document.querySelector('.cart--icons');
                const sidebar = document.getElementById('sidebar');
                const closeButton = document.querySelector('.sidebar-close');
                const checkoutButton = document.querySelector('.checkout-btn');
            
                // Check if the cart items list exists
                if (!cartItemsList) {
                    console.error('Element with class "cart-tems" not found.');
                    return;
                }
            
                // Cart data
                let cartItems = [];
                let totalAmount = 0;
            
                // Add item to cart when "Add to Cart" button is clicked
                addToCartButtons.forEach(button =>
                    button.addEventListener('click', () => {
                        const card = button.closest('.card');
                        const itemName = card.querySelector('.card--title').textContent;
                        const itemPrice = parseFloat(card.querySelector('.price').textContent.slice(1));
            
                        // Find item in cart
                        const existingItem = cartItems.find(cartItem => cartItem.name === itemName);
            
                        if (existingItem) {
                            // Increase quantity if item already in cart
                            existingItem.quantity++;
                        } else {
                            // Add new item to cart
                            cartItems.push({ name: itemName, price: itemPrice, quantity: 1 });
                        }
            
                        // Update UI and total amount
                        updateCart();
                    })
                );
            
                // Update cart UI
                function updateCart() {
                    updateCartItemCount();
                    updateCartItemList();
                    updateCartTotal();
                }
            
                // Update number of items in cart display
                function updateCartItemCount() {
                    const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
                    if (cartItemCount) {
                        cartItemCount.textContent = itemCount;
                    }
                }
            
                // Update list of items in the cart
                function updateCartItemList() {
                    cartItemsList.innerHTML = '';
            
                    cartItems.forEach((item, index) => {
                        const cartItem = document.createElement('div');
                        cartItem.classList.add('cart-item', 'individual-cart-item');
                        cartItem.innerHTML = `
                            <span>(${item.quantity}x) ${item.name}</span>
                            <div class="cart-item-controls">
                                <button class="decrease-btn" data-index="${index}" aria-label="Decrease quantity">
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                                <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                                <button class="increase-btn" data-index="${index}" aria-label="Increase quantity">
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                            </div>
                            <button class="remove-btn" data-index="${index}" aria-label="Remove ${item.name}">
                                <i class="fa-solid fa-times"></i>
                            </button>
                        `;
                        cartItemsList.append(cartItem);
                    });
            
                    // Add event listeners to the buttons
                    attachCartItemEventListeners();
                }
            
                // Attach event listeners to increase, decrease, and remove buttons
                function attachCartItemEventListeners() {
                    cartItemsList.querySelectorAll('.increase-btn').forEach(button => {
                        button.addEventListener('click', event => {
                            const index = parseInt(event.currentTarget.dataset.index, 10);
                            increaseItemQuantity(index);
                        });
                    });
            
                    cartItemsList.querySelectorAll('.decrease-btn').forEach(button => {
                        button.addEventListener('click', event => {
                            const index = parseInt(event.currentTarget.dataset.index, 10);
                            decreaseItemQuantity(index);
                        });
                    });
            
                    cartItemsList.querySelectorAll('.remove-btn').forEach(button => {
                        button.addEventListener('click', event => {
                            const index = parseInt(event.currentTarget.dataset.index, 10);
                            removeItemFromCart(index);
                        });
                    });
                }
            
                // Increase item quantity in cart
                function increaseItemQuantity(index) {
                    if (index >= 0 && index < cartItems.length) {
                        cartItems[index].quantity++;
                        updateCart();
                    }
                }
            
                // Decrease item quantity in cart
                function decreaseItemQuantity(index) {
                    if (index >= 0 && index < cartItems.length) {
                        if (cartItems[index].quantity > 1) {
                            cartItems[index].quantity--;
                        } else {
                            removeItemFromCart(index);
                        }
                        updateCart();
                    }
                }
            
                // Remove item from the cart
                function removeItemFromCart(index) {
                    if (index >= 0 && index < cartItems.length) {
                        cartItems.splice(index, 1);
                        updateCart();
                    }
                }
            
                // Calculate the total amount of the cart
                function updateTotalAmount() {
                    totalAmount = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
                }
            
                // Update the total amount display
                function updateCartTotal() {
                    if (cartTotal) {
                        cartTotal.textContent = `$${totalAmount.toFixed(2)}`;
                    }
                }
            
                // Toggle sidebar visibility
                if (cartIcon) {
                    cartIcon.addEventListener('click', () => {
                        if (sidebar) {
                            sidebar.classList.toggle('open');
                        }
                    });
                }
            
                // Close sidebar
                if (closeButton) {
                    closeButton.addEventListener('click', () => {
                        if (sidebar) {
                            sidebar.classList.remove('open');
                        }
                    });
                }
            
                // Handle checkout button click
                if (checkoutButton) {
                    checkoutButton.addEventListener('click', () => {
                        alert('Proceed to checkout');
                        // Add additional functionality for checkout here
                    });
                }
            });
            ms.splice(index, 1);
            updateTotalAmount(); // Recalculate total amount
            updateCartUI(); // Update UI
        }
    }

    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            if (sidebar) {
                sidebar.classList.toggle('open');
            }
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            if (sidebar) {
                sidebar.classList.remove('open');
            }
        });
    }

    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            alert('Proceed to checkout');
            // You can add more functionality for the checkout process here
        });
    }
});