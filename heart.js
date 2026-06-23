function toggleWishlist(icon, productName) {
    const productElement = icon.closest('.product-item');
    const productImage = productElement.querySelector('img').src.split('/').pop();
    const productPrice = productElement.querySelector('.product-price').textContent.replace('₹ ', '');

    const product = {
        name: productName,
        image: productImage,
        price: productPrice
    };

    if (!icon.classList.contains('fas')) {
        icon.classList.add('fas');
        icon.classList.remove('far');
        icon.classList.add('red');
        icon.classList.add('beat');
        setTimeout(() => {
            icon.classList.remove('beat');
        }, 500);
        addToWishlist(product);
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        icon.classList.remove('red');
        removeFromWishlist(productName);
    }
}

function addToWishlist(product) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!wishlist.some(item => item.name === product.name)) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
}

function removeFromWishlist(productName) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    wishlist = wishlist.filter(item => item.name !== productName);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
}

document.addEventListener('DOMContentLoaded', () => {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    const productElements = document.querySelectorAll('.product-item');

    productElements.forEach(product => {
        const productName = product.querySelector('.product-name-wrapper p').textContent;
        const heartIcon = product.querySelector('.heart-icon');

        if (wishlistItems.some(item => item.name === productName)) {
            heartIcon.classList.add('fas');
            heartIcon.classList.remove('far');
            heartIcon.classList.add('red');
        } else {
            heartIcon.classList.remove('fas');
            heartIcon.classList.add('far');
            heartIcon.classList.remove('red');
        }
    });
});
