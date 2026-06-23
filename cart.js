document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalContainer = document.getElementById('cartTotal');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    if (cartItems.length === 0) {
        displayEmptyCartMessage();
        return; 
    }

    const headerElement = document.createElement('div');
    headerElement.classList.add('cart-item');
    headerElement.innerHTML = `
        <div class="item-details">Product</div>
        <div class="item-price">Price</div>
        <div class="quantity-controls">Quantity</div>
        <div class="item-total">Total</div>
    `;
    cartItemsContainer.appendChild(headerElement);

    updateCartDisplay();
    updateCartQuantityNavbar();
});

function updateQuantity(item, change) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name);

    if (existingItemIndex > -1) {
        cartItems[existingItemIndex].quantity += change;

        if (cartItems[existingItemIndex].quantity <= 0) {
            cartItems.splice(existingItemIndex, 1);
        }
        
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartDisplay();
        updateCartQuantityNavbar();
    }
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalContainer = document.getElementById('cartTotal');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    cartItemsContainer.innerHTML = '';
    let totalCost = 0;

    if (cartItems.length === 0) {
        displayEmptyCartMessage();
        return;
    }

    const headerElement = document.createElement('div');
    headerElement.classList.add('cart-item');
    headerElement.innerHTML = `
        <div class="item-details">Product</div>
        <div class="item-price">Price</div>
        <div class="quantity-controls">Quantity</div>
        <div class="item-total">Total</div>
    `;
    cartItemsContainer.appendChild(headerElement);

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        
        const itemDetails = document.createElement('div');
        itemDetails.classList.add('item-details');

        const itemImage = document.createElement('img');
        itemImage.src = item.image;
        itemImage.alt = item.name;

        const itemInfo = document.createElement('div');
        itemInfo.classList.add('item-info');

        const itemName = document.createElement('p');
        itemName.textContent = item.name;
        
        itemInfo.appendChild(itemName);
        itemDetails.appendChild(itemImage);
        itemDetails.appendChild(itemInfo);

        const itemPrice = document.createElement('div');
        itemPrice.classList.add('item-price');
        itemPrice.textContent = `₹${item.price.toFixed(2)}`;

        const quantityControls = document.createElement('div');
        quantityControls.classList.add('quantity-controls');
        
        const decreaseButton = document.createElement('button');
        decreaseButton.classList.add('quantity-button');
        decreaseButton.textContent = '-';
        decreaseButton.onclick = function() {
            updateQuantity(item, -1);
        };

        const quantitySpan = document.createElement('span');
        quantitySpan.classList.add('quantity');
        quantitySpan.textContent = item.quantity;

        const increaseButton = document.createElement('button');
        increaseButton.classList.add('quantity-button');
        increaseButton.textContent = '+';
        increaseButton.onclick = function() {
            updateQuantity(item, 1);
        };

        quantityControls.appendChild(decreaseButton);
        quantityControls.appendChild(quantitySpan);
        quantityControls.appendChild(increaseButton);
        
        const itemTotal = document.createElement('div');
        itemTotal.classList.add('item-total');
        const totalItemPrice = item.price * item.quantity;
        itemTotal.textContent = `₹${totalItemPrice.toFixed(2)}`;
        
        itemElement.appendChild(itemDetails);
        itemElement.appendChild(itemPrice);
        itemElement.appendChild(quantityControls);
        itemElement.appendChild(itemTotal);
        
        cartItemsContainer.appendChild(itemElement);
        
        totalCost += totalItemPrice;
    });

    cartTotalContainer.textContent = `Total Cost: ₹${totalCost.toFixed(2)}`;
}

function updateCartQuantityNavbar() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartQuantityNum = document.getElementById('cart-quantity');
    let totalQuantity = 0;

    cartItems.forEach(item => {
        totalQuantity += item.quantity;
    });

    if (totalQuantity > 0) {
        cartQuantityNum.textContent = totalQuantity;
        cartQuantityNum.style.display = 'inline-block';
    } else {
        cartQuantityNum.style.display = 'none';
    }
}

function displayEmptyCartMessage() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalContainer = document.getElementById('cartTotal');

    cartItemsContainer.innerHTML = '';

    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = "Your cart is empty";
    emptyMessage.style.textAlign = "center";
    emptyMessage.style.fontSize = "16px";
    emptyMessage.style.marginTop = "200px";

    const shopNowButton = document.createElement('button');
    shopNowButton.textContent = "Shop Now";
    shopNowButton.className = "checkout";
    shopNowButton.onclick = function() {
        window.location.href = "index.html";
    };

    cartItemsContainer.appendChild(emptyMessage);
    cartItemsContainer.appendChild(shopNowButton);
    cartTotalContainer.style.display = "none";
}

function checkout() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    localStorage.setItem('checkoutItems', JSON.stringify(cartItems));
    window.location.href = 'checkout.html';
}

