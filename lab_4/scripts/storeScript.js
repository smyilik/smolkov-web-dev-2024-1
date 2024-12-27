let order = {
    pasta: null,
    sushiRoll: null,
    drink: null
};

function totalPrice() {
    const totalPrice = document.getElementById('totalPrice');
    let total = 0;

    if (order.pasta) {
        total += order.pasta.price;
    }
    if (order.sushiRoll) {
        total += order.sushiRoll.price;
    }
    if (order.drink) {
        total += order.drink.price;
    }
    totalPrice.textContent = `Стоимость заказа: ${total} ₽`;
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
    menu.forEach(product => {
        if (product.keyword === keyword) {
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
        }
    });
    updateShown();
}

function showProducts() {
    const sortedProducts = menu.sort((a, b) => a.name.localeCompare(b.name));
    const productSections = document.querySelectorAll('.products-list');
    
    sortedProducts.forEach(product => {
        const productCard = document.createElement('li');
        productCard.classList.add('product-card');
        productCard.setAttribute('data-product', product.keyword);

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;
        productCard.appendChild(image);
        
        const price = document.createElement('p');
        price.classList.add('price');
        price.classList.add('font-2');
        price.textContent = `${product.price} ₽`;
        productCard.appendChild(price);

        const name = document.createElement('p');
        name.classList.add('dish-name');
        name.classList.add('font-2');
        name.textContent = product.name;
        productCard.appendChild(name);

        const weight = document.createElement('p');
        weight.classList.add('dish-weight');
        weight.classList.add('font-2');
        weight.textContent = product.weight;
        productCard.appendChild(weight);

        const span = document.createElement('span');
        span.classList.add('add-to-cart');
        span.textContent = 'Добавить';
        const button = document.createElement('button');
        button.appendChild(span);
        button.classList.add('btn');
        button.classList.add('font-2');
        const control = document.createElement('div');
        control.appendChild(button);
        control.classList.add('control');
        productCard.appendChild(control);
        
        button.onclick = () => selectProduct(product.keyword);
        
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
    });
}

document.addEventListener("DOMContentLoaded", showProducts);

document.getElementById('reset').onclick = function() {
    order.pasta = null;
    order.sushiRoll = null;
    order.drink = null;
    updateShown();
};

document.getElementById('submit').onclick = function() {
    const pastaValue = document.getElementById('hiddenPasta');
    const sushiRollValue = document.getElementById('hiddenSushiRoll');
    const drinkValue = document.getElementById('hiddenDrink');
    if (order.pasta) {
        pastaValue.value = order.pasta.keyword;
    }
    if (order.sushiRoll) {
        sushiRollValue.value = order.sushiRoll.keyword;
    }
    if (order.drink) {
        drinkValue.value = order.drink.keyword;
    }
};