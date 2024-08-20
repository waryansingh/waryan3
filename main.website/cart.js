document.addEventListener('DOMContentLoaded', () => {
    // Select elements
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemCount = document.querySelector('.cart--icons span');
    const cartItemsList = document.querySelector('.cart-tems');
    const cartTotal = document.querySelector('.cart-total');
    const cartIcon = document.querySelector('.cart--icons');
    const sidebar = document.getElementById('sidebar');
    const closeButton = document.querySelector('.sidebar-close');

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
        cartItemsList.addEventListener('click', (event) => {
            if (event.target.closest('.remove-btn')) {
                const index = parseInt(event.target.closest('.remove-btn').dataset.index, 10);
                removeItemFromCart(index);
            }
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
            cartItems.splice(index, 1);
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
});