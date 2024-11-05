let order = {
    pasta: null,
    sushiRoll: null,
    salad: null,
    dessert: null,
    drink: null
};

// Update total price
function totalPrice() {
    const totalPriceField = document.getElementById('totalPrice');
    let total = 0;

    if (order.pasta) total += order.pasta.price;
    if (order.sushiRoll) total += order.sushiRoll.price;
    if (order.salad) total += order.salad.price;
    if (order.dessert) total += order.dessert.price;
    if (order.drink) total += order.drink.price;

    totalPriceField.textContent = `Стоимость заказа: ${total}₽`;
}

// Update visible order details
function updateShown() {
    const noSelection = document.getElementById('empty');
    const pasta = document.getElementById('orderPasta');
    const sushiRoll = document.getElementById('orderSushiRoll');
    const salad = document.getElementById('orderSalad');
    const dessert = document.getElementById('orderDessert');
    const drink = document.getElementById('orderDrink');
    const comment = document.getElementById('orderComment');
    const commentLabel = document.getElementById('orderCommentLabel');
    const header = document.getElementById('orderHeader');
    const totalPriceField = document.getElementById('totalPrice');

    if (order.pasta || order.sushiRoll || order.drink ||
        order.salad || order.dessert) {
        totalPrice();
        noSelection.style.display = 'none';
        pasta.style.display = 'block';
        sushiRoll.style.display = 'block';
        salad.style.display = 'block';
        dessert.style.display = 'block';
        drink.style.display = 'block';
        comment.style.display = 'block';
        commentLabel.style.display = 'block';
        header.style.display = 'block';
        totalPriceField.style.display = 'block';
    } else {
        noSelection.style.display = 'block';
        pasta.style.display = 'none';
        sushiRoll.style.display = 'none';
        salad.style.display = 'none';
        dessert.style.display = 'none';
        drink.style.display = 'none';
        comment.style.display = 'none';
        commentLabel.style.display = 'none';
        header.style.display = 'none';
        totalPriceField.style.display = 'none';
    }
}

// Select a product
function selectProduct(keyword) {
    const product = menu.find(menu => menu.keyword === keyword);
    switch (product.category) {
    case 'pasta':
        order.pasta = product;
        document.getElementById("orderPasta").textContent
        = product.name + ' - ' + product.price + '₽';
        break;
    case 'sushi-rolls':
        order.sushiRoll = product;
        document.getElementById("orderSushiRoll").textContent
        = product.name + ' - ' + product.price + '₽';
        break;
    case 'salads':
        order.salad = product;
        document.getElementById("orderSalad").textContent
        = product.name + ' - ' + product.price + '₽';
        break;
    case 'desserts':
        order.dessert = product;
        document.getElementById("orderDessert").textContent
        = product.name + ' - ' + product.price + '₽';
        break;
    case 'drinks':
        order.drink = product;
        document.getElementById("orderDrink").textContent
        = product.name + ' - ' + product.price + '₽';
        break;
    }
    updateShown();
}

function showProducts(products, category) {
    // Clear existing dishes before adding new ones
    const productSections = document.querySelectorAll('.products-list');
    let targetSection;

    // Identify the section that corresponds to the category
    switch (category) {
    case 'pasta':
        targetSection = productSections[0]; // Pasta section
        break;
    case 'sushi-roll':
        targetSection = productSections[1]; // Sushi Rolls section
        break;
    case 'salad':
        targetSection = productSections[2]; // Salads section
        break;
    case 'dessert':
        targetSection = productSections[3]; // Desserts section
        break;
    case 'drink':
        targetSection = productSections[4]; // Drinks section
        break;
    default:
        return; // No action for undefined category
    }

    // Clear the section before displaying new filtered products
    targetSection.innerHTML = '';

    // Sort products alphabetically by name
    const sortedProducts =
    products.sort((a, b) => a.name.localeCompare(b.name));

    // Add each filtered product to the section
    sortedProducts.forEach(product => {
        const productCard = document.createElement('li');
        productCard.classList.add('product-card');
        productCard.setAttribute('data-product', product.keyword);
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-details">
                <p class="price font-2">${product.price} &#8381;</p>
                <p class="dish-name font-2">${product.name}</p>
                <p class="dish-weight font-2">${product.count}</p>
                <div class="control">
                    <button class="btn font-2">
                        <span class="add-to-cart">Добавить</span>
                    </button>
                </div>
            </div>
        `;
        // Append the product to the relevant section
        targetSection.append(productCard);
        productCard.querySelector('button').onclick = () =>
            selectProduct(productCard.getAttribute('data-product'));
    });
}

function filterDishes(kind, category) {
    // Filter products in the specified category
    const filteredProducts = menu.filter(product =>
        (kind === null || product.kind === kind) &&
        product.category === category
    );

    // Show filtered products in the specific category section only
    showProducts(filteredProducts, category);
}
function setupFilters(dishCategory) {
    const filters =
    document.querySelectorAll(`input[name="filter${dishCategory}"]`);
    filters.forEach(filter => {
        filter.addEventListener('click', function(event) {
            const radio = event.target;
            if (radio.checked) {
                // Remove active class from all filters in this category
                filters.forEach(f => f.classList.remove("active"));
                radio.classList.add("active");
                filterDishes(
                    radio.getAttribute('data-kind'),
                    radio.getAttribute('data-category')
                );
            }
        });
    });
}

// Initialize filters for each category independently
document.addEventListener("DOMContentLoaded", function() {
    setupFilters('Pasta');
    setupFilters('SushiRoll');
    setupFilters('Salad');
    setupFilters('Dessert');
    setupFilters('Drink');

    // Initially show all products in their respective sections
    showProducts(menu.filter(product =>
        product.category === 'pasta'), 'pasta');
    showProducts(menu.filter(product =>
        product.category === 'sushi-roll'), 'sushi-roll');
    showProducts(menu.filter(product =>
        product.category === 'salad'), 'salad');
    showProducts(menu.filter(product =>
        product.category === 'dessert'), 'dessert');
    showProducts(menu.filter(product =>
        product.category === 'drink'), 'drink');
});