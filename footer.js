document.addEventListener('DOMContentLoaded', function() {
    const footerHTML = `
    <div class="subscription">
        <h2>Subscribe to our Newsletter</h2>
        <form action="#" method="post">
            <input type="email" name="email" placeholder="Your Email Address" required>
            <button type="submit">Subscribe</button>
        </form>
    </div>
    <div class="feature-container">
        <div class="feature">
            <img src="./assets/bestdeals.png" alt="Deals">
            <div>
                <h3>Best Prices & Deals</h3>
                <p style="color: black";>Don't miss our daily amazing deals and prices</p>
            </div>
        </div>
        <div class="feature">
            <img src="./assets/refundable.png" alt="Refund">
            <div>
                <h3>Refundable</h3>
                <p style="color: black";>If your items have damage we agree to refund it</p>
            </div>
        </div>
        <div class="feature">
            <img src="assets/delivery.png" alt="Free Delivery">
            <div>
                <h3>Free Delivery</h3>
                <p style="color: black";>Do purchase over $50 and get free delivery anywhere</p>
            </div>
        </div>
    </div>
    <footer>
        <div class="footer-top">
            <div class="contact-info">
                <div>
                    <div style="display: flex; align-items: center;">
                        <img src="assets/logo.png" alt="Logo" style="width: 30px; height: 30px; margin-right: 10px;">
                        <h4 style="margin: 0;">Drop It</h4>
                    </div>
                    <ul style="list-style-type: none; padding: 0;">
                        <li>
                            <i class="fas fa-map-marker-alt" style="margin-right: 10px;"></i>
                            <a href="#">Address</a>
                        </li>
                        <li>
                            <i class="fas fa-phone" style="margin-right: 10px;"></i>
                            <a href="#">Call us</a>
                        </li>
                        <li>
                            <i class="fas fa-envelope" style="margin-right: 10px;"></i>
                            <a href="#">Email</a>
                        </li>
                        <li>
                            <i class="fas fa-clock" style="margin-right: 10px;"></i>
                            <a href="#">Work Hours</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <h4>Account</h4>
                <ul>
                    <li><a href="#">Wishlist</a></li>
                    <li><a href="#">Cart</a></li>
                    <li><a href="#">Track Orders</a></li>
                    <li><a href="#">Shipping & Delivery</a></li>
                </ul>
            </div>
            <div>
                <h4>Useful Links</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Hot Deals</a></li>
                    <li><a href="#">Promotions</a></li>
                </ul>
            </div>
            <div>
                <h4>Help Centre</h4>
                <ul>
                    <li><a href="#">Payments</a></li>
                    <li><a href="#">Refund</a></li>
                    <li><a href="#">Checkout</a></li>
                    <li><a href="#">Q&A</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <div style="display: flex; align-items: center;">
                <p style = "color:black";>&copy; 2024 Grocery Mart. All rights reserved. | <a href="#">Privacy Policy</a></p>
                <img src="images/Payment.png" alt="American Express">
            </div>
            <div class="social-links">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
        </div>
    </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
});
