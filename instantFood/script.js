document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
            '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });



    // Cart Toggle
    const cartBtn = document.querySelector('.nav-links a:nth-child(3)');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartOverlay = document.querySelector('.cart-overlay');
    const closeCart = document.querySelector('.close-cart');
    
    cartBtn.addEventListener('click', function(e) {
        e.preventDefault();
        cartSidebar.classList.add('active');
        cartOverlay.classList.add('active');
    });
    
    closeCart.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    });
    
    cartOverlay.addEventListener('click', function() {
        cartSidebar.classList.remove('active');
        cartOverlay.classList.remove('active');
    });




    // Login Modal Toggle
    const loginBtn = document.querySelector('.btn-login');
    const loginModal = document.querySelector('.login-modal');
    const closeModal = document.querySelector('.close-modal');
    
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.classList.add('active');
    });
    
    closeModal.addEventListener('click', function() {
        loginModal.classList.remove('active');
    });
    
    loginModal.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.classList.remove('active');
        }
    });
    // Password visibility toggle
document.querySelector('.toggle-password').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const icon = this.querySelector('i');
    
    // Toggle input type
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle icon and active state
    this.classList.toggle('active');
});

// Password Strength Checker
document.getElementById('password').addEventListener('input', function() {
    const strengthMeter = this.closest('.password-group').querySelector('.password-strength-meter');
    const strength = calculatePasswordStrength(this.value);
    strengthMeter.setAttribute('data-strength', strength);
});

function calculatePasswordStrength(password) {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecial = /[^a-zA-Z0-9]/.test(password);
    const length = password.length;

    let strength = 0;
    if (length >= 4) strength++;
    if (length >= 8 && hasLetters && hasNumbers) strength++;
    if (length >= 12 && hasLetters && hasNumbers && hasSpecial) strength++;

    return strength === 1 ? 'weak' : strength === 2 ? 'medium' : 'strong';
}
// Forgot Password Toggle
document.querySelector('.forgot-password').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.forgot-password-modal').style.display = 'flex';
    document.getElementById('login-form').style.display = 'none';
});

document.querySelector('.back-to-login').addEventListener('click', function() {
    document.querySelector('.forgot-password-modal').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

// Form Submission
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Your login logic here
    alert('Login successful!');
    document.querySelector('.login-modal').classList.remove('active');
});



    // Food Category Filter
    const categories = document.querySelectorAll('.category');
    
    categories.forEach(category => {
        category.addEventListener('click', function() {
            categories.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const categoryType = this.getAttribute('data-category');
            filterFoodItems(categoryType);
        });
    });

    // Sort Food Items
    const sortSelect = document.getElementById('sort-food');
    sortSelect.addEventListener('change', function() {
        sortFoodItems(this.value);
    });

    // Sample Data for Restaurants and Food Items
    const restaurants = [
        {
            id: 1,
            name: "Pizza Palace",
            image: "src/res/pizza-hut.jpg",
            rating: 4.5,
            deliveryTime: "20-30 min",
            deliveryPrice: "₹ 79",
            cuisine: "Pizza, Garlic Bread"
        },
        {
            id: 2,
            name: "Burger King",
            image: "src/res/burger-king.jpg",
            rating: 4.2,
            deliveryTime: "15-25 min",
            deliveryPrice: "₹ 65",
            cuisine: "Burgers, Fries"
        },
        {
            id: 3,
            name: "Dominos",
            image: "src/res/dominos.jpg",
            rating: 4.7,
            deliveryTime: "25-35 min",
            deliveryPrice: "₹ 56",
            cuisine: "Pizza"
        },
        {
            id: 4,
            name: "Tunday Kababi ",
            image: "src/res/tundey-kabeb.jpg",
            rating: 4.3,
            deliveryTime: "20-30 min",
            deliveryPrice: "₹ 86",
            cuisine: "Kabeb"
        },
        {
            id: 5,
            name: "Salad Station ",
            image: "src/res/salad-station.webp",
            rating: 4.3,
            deliveryTime: "20-30 min",
            deliveryPrice: "₹ 69",
            cuisine: "Heatlhy Salad"

        },
        {
            id: 6,
            name: "Royal Cafe",
            image: "src/res/royal-cafe.jpeg",
            rating: 4.3,
            deliveryTime: "20-30 min",
            deliveryPrice: "₹ 75",
            cuisine: "Breakfast"

        }
    ];

    const foodItems = [
        {
            id: 1,
            name: "Margherita Pizza",
            description: "Classic pizza with tomato sauce, mozzarella, and basil",
            price: "₹ 645",
            rating: 4.5,
            image: "src/food-items/pizza-m.jpg",
            category: "pizza",
            badge: "Popular"
        },
        {
            id: 2,
            name: "Pepperoni Pizza",
            description: "Pizza with tomato sauce, mozzarella, and pepperoni",
            price: "₹ 452",
            rating: 4.7,
            image: "src/food-items/pep-pizza.jpg",
            category: "pizza"
        },
        {
            id: 3,
            name: "Cheeseburger",
            description: "Potato patty with cheese, lettuce, tomato, and special sauce",
            price: "₹ 189",
            rating: 4.3,
            image: "src/food-items/cheese-burger.jpg",
            category: "burger",
            badge: "Chef's Choice"
        },
        {
            id: 4,
            name: "Chicken Burger",
            description: "Chicken patty with bacon, cheese, and caramelized onions",
            price: "₹ 125",
            rating: 4.6,
            image: "src/food-items/chicken-burger.jpg",
            category: "burger"
        },
        {
            id: 5,
            name: "Roll",
            description: "A roll is a delicious street-style wrap made with flatbread stuffed with spiced fillings like veggies, chicken, or paneer, topped with sauces and onions.",
            price: "129",
            rating: 4.4,
            image: "src/food-items/roll.jpeg",
            category: "chicken"
        },
        {
            id: 6,
            name: "Chicken Biryani",
            description: "Chicken Biryani is a savory rice dish made with marinated chicken, fragrant basmati rice, and bold spices, slow-cooked for a rich and aromatic flavor.",
            price: "₹ 789",
            rating: 4.8,
            image: "src/food-items/chicken-biryani.jpg",
            category: "sushi",
            badge: "Spicy"
        },
        {
            id: 7,
            name: "Veg Biryani",
            description: "Veg Biryani is a fragrant rice dish made with mixed vegetables, aromatic spices, and herbs, layered and cooked for rich, flavorful perfection.",
            price: "₹ 425",
            rating: 4.5,
            image: "src/food-items/veg-biryani.jpg",
            category: "biryani"
        },
        {
            id: 8,
            name: "Mutton Biryani",
            description: "Mutton Biryani is a flavorful rice dish made with tender marinated mutton, aromatic spices, and basmati rice, cooked to perfection.",
            price: "₹ 845",
            rating: 4.2,
            image: "src/food-items/mutton-biryani.jpg",
            category: "biryani"
        },
        {
            id: 9,
            name: "Caesar Salad",
            description: "Romaine lettuce with croutons, parmesan, and Caesar dressing",
            price: "₹ 215",
            rating: 4.2,
            image: "src/food-items/salad.jpg",
            category: "salad"
        },
        {
            id: 10,
            name: "Kaju Barfi",
            description: "Made primarily from ground cashews and sugar, often with additions like khoya or spices",
            price: "₹ 978/kg",
            rating: 4.2,
            image: "src/food-items/kaju.jpg",
            category: "sweet"
        },
        {
            id: 11,
            name: "Doda Barfi",
            description: "A heat desiccated and popular sweetmeat of northern India",
            price: "₹ 452/kg",
            rating: 4.2,
            image: "src/food-items/doda.jpg",
            category: "salad"
        },
        {
            id: 12,
            name: "Roasted Chicken",
            description: "Spicy chicken roasted in a tandoor",
            price: "₹ 32/pc",
            rating: 4.2,
            image: "src/food-items/roasted.jpeg",
            category: "spicy"
        },
        {
            id: 13,
            name: "Fried Chicken",
            description: "Deep fried chicken with spices added on top",
            price: "₹ 23/pc",
            rating: 4.2,
            image: "src/food-items/fried-chicken.jpg",
            category: "spicy"
        },
        {
            id: 14,
            name: "Ice Cream",
            description: "Butterscoth, Chocolate, Casata",
            price: "₹ 60",
            rating: 4.2,
            image: "src/food-items/icecream.jpg",
            category: "desert"
        }
    ];

    // Load Restaurants
    function loadRestaurants() {
        const restaurantGrid = document.querySelector('.restaurant-grid');
        restaurantGrid.innerHTML = '';
        
        restaurants.forEach(restaurant => {
            const restaurantCard = document.createElement('div');
            restaurantCard.className = 'restaurant-card';
            restaurantCard.innerHTML = `
                <div class="restaurant-img">
                    <img src="${restaurant.image}" alt="${restaurant.name}">
                </div>
                <div class="restaurant-info">
                    <h3 class="restaurant-name">${restaurant.name}</h3>
                    <div class="restaurant-meta">
                        <span class="restaurant-rating"><i class="fas fa-star"></i> ${restaurant.rating}</span>
                        <span>${restaurant.deliveryTime}</span>
                    </div>
                    <p class="restaurant-cuisine">${restaurant.cuisine}</p>
                    <div class="restaurant-delivery">
                        <span class="delivery-time">${restaurant.deliveryTime}</span>
                        <span class="delivery-price">${restaurant.deliveryPrice} delivery</span>
                    </div>
                </div>
            `;
            restaurantGrid.appendChild(restaurantCard);
        });
    }

    // Load Food Items
    function loadFoodItems(items = foodItems) {
        const foodGrid = document.querySelector('.food-grid');
        foodGrid.innerHTML = '';
        
        items.forEach(item => {
            const foodCard = document.createElement('div');
            foodCard.className = 'food-card';
            foodCard.innerHTML = `
                <div class="food-img">
                    <img src="${item.image}" alt="${item.name}">
                    ${item.badge ? `<span class="food-badge">${item.badge}</span>` : ''}
                </div>
                <div class="food-info">
                    <h3 class="food-name">${item.name}</h3>
                    <p class="food-description">${item.description}</p>
                    <p class="food-price">${item.price}</p>
                    <div class="food-footer">
                        <span class="food-rating"><i class="fas fa-star"></i> ${item.rating}</span>
                        <button class="add-to-cart" data-id="${item.id}"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
            `;
            foodGrid.appendChild(foodCard);
        });

        // Add event listeners to add-to-cart buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                addToCart(itemId);
            });
        });
    }

    // Filter Food Items by Category
    function filterFoodItems(category) {
        if (category === 'all') {
            loadFoodItems(foodItems);
        } else {
            const filteredItems = foodItems.filter(item => item.category === category);
            loadFoodItems(filteredItems);
        }
    }

    // Sort Food Items
    function sortFoodItems(sortBy) {
        let sortedItems = [...foodItems];
        
        switch(sortBy) {
            case 'rating':
                sortedItems.sort((a, b) => b.rating - a.rating);
                break;
            case 'price-low':
                sortedItems.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
                break;
            case 'price-high':
                sortedItems.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
                break;
            default: // 'popular' (default)
                sortedItems = [...foodItems];
        }
        
        loadFoodItems(sortedItems);
    }

    // Cart Functionality
 // Cart functionality
let cart = [];

function addToCart(itemId) {
    const item = foodItems.find(item => item.id === itemId);
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...item,
            quantity: 1,
            customizations: [] // For future features like special instructions
        });
    }
    
    updateCart();
    showNotification(`${item.name} added to cart`);
}

function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const emptyCart = document.querySelector('.empty-cart');
    const cartCount = document.getElementById('cart-count');
    
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartItemsContainer.innerHTML = '';
    } else {
        emptyCart.style.display = 'none';
        cartItemsContainer.innerHTML = '';
        
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">${item.price} × ${item.quantity} = ₹${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}</p>
                    <div class="cart-item-controls">
                        <div class="quantity-control">
                            <button class="quantity-btn minus" data-id="${item.id}">
                                <i class="fas fa-minus"></i>
                            </button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="quantity-btn plus" data-id="${item.id}">
                                <i class="fas fa-plus"></i>
                            </button>
                        </div>
                        <button class="remove-item" data-id="${item.id}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
        
        // Add event listeners
        document.querySelectorAll('.quantity-btn').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                const isPlus = this.classList.contains('plus');
                updateCartItemQuantity(itemId, isPlus);
            });
        });
        
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                removeFromCart(itemId);
            });
        });
    }
    
    // Update cart count and total
    const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalCount;
    updateTotalPrice();
}

function updateCartItemQuantity(itemId, isIncrease) {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        if (isIncrease) {
            cart[itemIndex].quantity += 1;
        } else {
            if (cart[itemIndex].quantity > 1) {
                cart[itemIndex].quantity -= 1;
            } else {
                cart.splice(itemIndex, 1);
            }
        }
        updateCart();
    }
}

/* remove item */
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
    showNotification('Item removed from cart');
}

/* total price*/
function updateTotalPrice() {
    const totalPriceElement = document.querySelector('.total-price');
    const subtotal = cart.reduce((sum, item) => {
        return sum + (parseFloat(item.price.slice(1)) * item.quantity);
    }, 0);
    
    totalPriceElement.textContent = `₹${subtotal.toFixed(2)}`;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }, 10);
}

    // Initialize the page
    loadRestaurants();
    loadFoodItems();

    // Add notification style
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: var(--success);
            color: white;
            padding: 12px 20px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1003;
        }
        
        .notification.show {
            opacity: 1;
        }
        
        .notification i {
            margin-right: 10px;
            font-size: 18px;
        }
    `;
    document.head.appendChild(style);
});