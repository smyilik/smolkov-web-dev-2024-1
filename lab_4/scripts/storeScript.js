let order = {
    pasta: null,
    sushiRoll: null,
    drink: null
};

function totalPrice() {
    const totalPrice = document.getElementById('totalPrice');
    let total = 0;

    if (order.selSoup) {
        total += order.pasta.price;
    }
    if (order.selMaindish) {
        total += order.sushiRoll.price;
    }
    if (order.selDrink) {
        total += order.drink.price;
    }
    totalPrice.textContent = `Стоимость заказа: ${total}₽`;
}

function updateShown() {
    const noSelection = document.getElementById('empty');
    const pasta = document.getElementById('orderPasta');
    const sushiRoll = document.getElementById('orderSushiRoll');
    const drink = document.getElementById('orderDrink');
    const comment = document.getElementById('orderComment');
    const commentLabel = document.getElementById('orderCommentLabel');
    const header = document.getElementById('orderHeader');
    if (order.pasta || order.sushiRoll || order.drink) {
        noSelection.style.display = 'none';
        pasta.style.display = 'block';
        sushiRoll.style.display = 'block';
        drink.style.display = 'block';
        comment.style.display = 'block';
        commentLabel.style.display = 'block';
        header.style.display = 'block';
        totalPrice();
    } else {
        noSelection.style.display = 'block';
        pasta.style.display = 'none';
        sushiRoll.style.display = 'none';
        drink.style.display = 'none';
        comment.style.display = 'none';
        commentLabel.style.display = 'none';
        header.style.display = 'none';
    }
}

function selectProduct(keyword) {
  
    const product = menu.find(menu => menu.keyword === keyword);
    switch (product.category) {
    case 'pasta':
        order.pasta = product;
        document.getElementById("orderPasta").textContent =
        product.name + ' - ' + product.price + '₽';
        break;
    case 'sushi-rolls':
        order.sushiRoll = product;
        document.getElementById("orderSushiRoll").textContent =
        product.name + ' - ' + product.price + '₽';
        break;
    case 'drinks':
        order.drink = product;
        document.getElementById("orderDrink").textContent =
        product.name + ' - ' + product.price + '₽';
        break;
    }
    updateShown();
}

function showProducts() {
    const sortedProducts = menu.sort((a, b) => a.name.localeCompare(b.name));
    const productSections = document.querySelectorAll('.products-list');
    
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
        switch (product.category) {
        case 'pasta':
            productSections[0].append(productCard);
            break;
        case 'sushi-rolls':
            productSections[1].append(productCard);
            break;
        case 'drinks':
            productSections[2].append(productCard);
            break;
        }
        productCard.querySelector('button').onclick = () =>
            selectProduct(productCard.getAttribute('data-product'));
    });
}

document.addEventListener("DOMContentLoaded", showProducts);

document.getElementById('reset').onclick = function() {
    order.pasta = null;
    order.sushiRoll = null;
    order.drink = null;
    updateShown();
};

document.getElementById('submit').onclick = function(event) {
    const pastaValue = document.getElementById('hiddenPasta');
    const sushiRollValue = document.getElementById('hiddenSushiRoll');
    const drinkValue = document.getElementById('hiddenDrink');
    if (order.pasta) {
        soupValue.value = order.selSoup.keyword;
    }
    if (order.sushiRoll) {
        mainValue.value = order.selMaindish.keyword;
    }
    if (order.drink) {
        drinkValue.value = order.selDrink.keyword;
    }
};