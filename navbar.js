document.addEventListener('DOMContentLoaded', function() {


    const navbar = `
        <div class="navbar-item">
            <img src="./assets/logo.png" alt="Drop It">
            <a href="index.html"><h1>Drop It</h1></a>
        </div>
        <div class="navbar-item">
            <div class="search-container">
                <div class="dropdown">
                <span class="all-products-dropdown">
                    <i class="fas fa-bars"></i>
                    All Categories 
                    <i class="fas fa-chevron-down" style="color: black;"></i>
                </span>
                <div class="dropdown-content">
                    <a href="vegetables.html">Vegetables</a>
                    <a href="fruits.html">Fruits</a>
                    <a href="meat.html">Meat</a>
                    <a href="electronics.html">Electronics</a>
                    <a href="home-essentials.html">Home Essentials</a>
                </div>
            </div>

                <div class="search-input-container">
                    <input type="text" id="search-input" placeholder="">
                    <span id="placeholder-text" class="placeholder-text">Search for "Ice cream"</span>
                </div>
                <button type="button" class="search-button"><i class="fas fa-search"></i></button>
            </div>
        </div>
        <div class="navbar-item navbar-right">
            <div class="navbar-item">
                <a href="wishlist.html"><img src="./assets/heart.png" alt="Heart"></a>
            </div>
            <div class="navbar-item dropdown">
                <a href="cart.html"><img src="./assets/li-cart.png" alt="Cart"><span id="cart-quantity" class="cart-quantity"></span></a>
            </div>
            <div class="navbar-item dropdown">
            <img src="./assets/signup.png" alt="Sign Up">                
            <div class="dropdown-content">
                    <a href="profile.html">Profile</a>
                    <a href="login.html">Login</a>
                </div>
            </div>
        </div>
    `;

    document.getElementById('navbar').innerHTML = navbar;


    const placeholders = ['Search for "Ice cream"', 'Search for "Biscuits"', 'Search for "Detergents"', 'Search for "Dog Food"', 'Search for "Makeup"', 'Search for "Sunscreen"'];
    let placeholderIndex = 0;
    let placeholderInterval;

    function updatePlaceholder() {
        const placeholderText = document.getElementById('placeholder-text');
        placeholderText.classList.add('scroll-up');
        
        setTimeout(() => {
            placeholderIndex = (placeholderIndex + 1) % placeholders.length;
            placeholderText.textContent = placeholders[placeholderIndex];
            placeholderText.classList.remove('scroll-up');
        }, 500);
    }

    function startAnimation() {
        placeholderInterval = setInterval(updatePlaceholder, 4000);
    }

    function stopAnimation() {
        clearInterval(placeholderInterval);
    }

    startAnimation();

    const searchInput = document.getElementById('search-input');
    const placeholderText = document.getElementById('placeholder-text');

    searchInput.addEventListener('input', function() {
        if (searchInput.value.length > 0) {
            stopAnimation();
            placeholderText.style.display = 'none';
        } else {
            placeholderText.style.display = 'block';
            startAnimation();
        }
    });

    const cartQuantityNum = document.getElementById('cart-quantity');
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
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
});
