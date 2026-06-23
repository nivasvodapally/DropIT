document.addEventListener('DOMContentLoaded', function() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.forEach(item => {
        const productItems = document.querySelectorAll('.product-item, .product-card');
        productItems.forEach(productItem => {
            const productName = productItem.querySelector('.product-name-wrapper p, .product-title').textContent;
            if (productName === item.name) {
                const priceAddContainer = productItem.querySelector('.product-price-add');
                const addToCartContainer = priceAddContainer.querySelector('.add-to-cart');
                const quantityControls = priceAddContainer.querySelector('.quantity-controls');
                const quantitySpan = quantityControls.querySelector('.quantity, .daily-quantity');
                
                addToCartContainer.style.display = 'none';
                quantityControls.style.display = 'flex';
                quantitySpan.textContent = item.quantity;
            }
        });
    });

    document.querySelectorAll('.add-to-cart-button, .daily-add-to-cart-button').forEach(button => {
        button.addEventListener('click', function() {
            const productItem = button.closest('.product-item, .product-card');
            const priceAddContainer = productItem.querySelector('.product-price-add');
            const addToCartContainer = priceAddContainer.querySelector('.add-to-cart');
            const quantityControls = priceAddContainer.querySelector('.quantity-controls');
            
            addToCartContainer.style.display = 'none';
            quantityControls.style.display = 'flex';

            updateCartState(button);
        });
    });
});

function updateQuantity(button, change) {
    const quantityControls = button.closest('.quantity-controls');
    const quantitySpan = quantityControls.querySelector('.quantity, .daily-quantity');
    let currentQuantity = parseInt(quantitySpan.textContent);

    currentQuantity += change;

    if (currentQuantity >= 1) {
        quantitySpan.textContent = currentQuantity;
    } else {
        // edge case
        const productItem = button.closest('.product-item, .product-card');
        const priceAddContainer = productItem.querySelector('.product-price-add');
        const addToCartContainer = priceAddContainer.querySelector('.add-to-cart');
        
        addToCartContainer.style.display = 'block';
        quantityControls.style.display = 'none';
        quantitySpan.textContent = 0; 
    }

    updateCartState(button);
}

function updateCartState(button) {
    const productItem = button.closest('.product-item, .product-card');
    const productImage = productItem.querySelector('img').src;
    const productName = productItem.querySelector('.product-name-wrapper p, .product-title').textContent;
    const productQuantity = parseInt(productItem.querySelector('.quantity, .daily-quantity').textContent);
    const productPrice = parseFloat(productItem.querySelector('.product-price, .new-price').textContent.replace('₹', ''));
    
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItemIndex = cartItems.findIndex(item => item.name === productName);

    if (existingItemIndex > -1) {
        if (productQuantity > 0) {
            cartItems[existingItemIndex].quantity = productQuantity;
        } else {
            cartItems.splice(existingItemIndex, 1);
        }
    } else if (productQuantity > 0) {
        cartItems.push({
            image: productImage,
            name: productName,
            quantity: productQuantity,
            price: productPrice
        });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // for quantity update cart in navbar
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
