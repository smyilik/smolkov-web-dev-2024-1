const menu = [
    {
        "keyword": "gazpacho",
        "name": "Газпачо",
        "price": 499,
        "category": "pasta",
        "count": "250 г",
        "image": "./images/pasta/01_gazpacho.jpg",
        "kind": "veg"
    },
    {
        "keyword": "mushroom_soup",
        "name": "Грибной суп",
        "price": 549,
        "category": "pasta",
        "count": "250г",
        "image": "./images/pasta/02_mushroom_soup.jpg",
        "kind": "veg"
    },
    {
        "keyword": "norwegian_soup",
        "name": "Норвежский суп",
        "price": 599,
        "category": "pasta",
        "count": "250г",
        "image": "./images/pasta/03_norwegian_soup.jpg",
        "kind": "fish"
    },
    {
        "keyword": "ramen",
        "name": "Рамен",
        "price": 649,
        "category": "pasta",
        "count": "300г",
        "image": "./images/pasta/04_ramen.jpg",
        "kind": "meat"
    },
    {
        "keyword": "tom_yum_with_shrimps",
        "name": "Том ям с креветками",
        "price": 599,
        "category": "pasta",
        "count": "250г",
        "image": "./images/pasta/05_tom_yum_with_shrimps.jpg",
        "kind": "fish"
    },
    {
        "keyword": "chicken_soup",
        "name": "Куриный суп",
        "price": 499,
        "category": "pasta",
        "count": "250г",
        "image": "./images/pasta/06_chicken_soup.jpg",
        "kind": "meat"
    },
    {
        "keyword": "chicken_cutlets_and_mashed_potatoes",
        "name": "Куриные котлеты с пюре",
        "price": 799,
        "category": "sushi-rolls",
        "count": "300г",
        "image": "./images/sushi_rolls/01_chicken_" +
        "cutlets_and_mashed_potatoes.jpg",
        "kind": "meat"
    },
    {
        "keyword": "fried_potatoes_with_mushrooms",
        "name": "Жаренный картофель с грибами, выполненный" +
        " по старинному рецепту",
        "price": 599,
        "category": "sushi-rolls",
        "count": "250г",
        "image": "./images/sushi_rolls/02_fried_potatoes_with_mushrooms.jpg",
        "kind": "veg"
    },
    {
        "keyword": "lasagna",
        "name": "Лазанья",
        "price": 699,
        "category": "sushi-rolls",
        "count": "300г",
        "image": "./images/sushi_rolls/03_lasagna.jpg",
        "kind": "meat"
    },
    {
        "keyword": "fish_cutlet_with_rice",
        "name": "Рыбная котлета с рисом и спаржей",
        "price": 799,
        "category": "sushi-rolls",
        "count": "300г",
        "image": "./images/sushi_rolls/04_fish_cutlet_with_rice.jpg",
        "kind": "fish"
    },
    {
        "keyword": "pizza_margarita",
        "name": "Пицца Маргарита",
        "price": 649,
        "category": "sushi-rolls",
        "count": "300г",
        "image": "./images/sushi_rolls/05_pizza_margarita.jpg",
        "kind": "veg"
    },
    {
        "keyword": "pasta_with_shrimps",
        "name": "Паста с креветками",
        "price": 699,
        "category": "sushi-rolls",
        "count": "300г",
        "image": "./images/sushi_rolls/06_pasta_with_shrimps.jpg",
        "kind": "fish"
    },
    {
        "keyword": "apple_juice",
        "name": "Яблочный сок",
        "price": 199,
        "category": "drinks",
        "count": "250мл",
        "image": "./images/drinks/01_apple_juice.jpg",
        "kind": "cold"
    },
    {
        "keyword": "carrot_juice",
        "name": "Морковный сок",
        "price": 199,
        "category": "drinks",
        "count": "250мл",
        "image": "./images/drinks/02_carrot_juice.jpg",
        "kind": "cold"
    },
    {
        "keyword": "orange_juice",
        "name": "Апельсиновый сок",
        "price": 199,
        "category": "drinks",
        "count": "250мл",
        "image": "./images/drinks/03_orange_juice.jpg",
        "kind": "cold"
    },
    {
        "keyword": "cappuccino",
        "name": "Капучино",
        "price": 249,
        "category": "drinks",
        "count": "250мл",
        "image": "./images/drinks/04_cappuccino.jpg",
        "kind": "hot"
    },
    {
        "keyword": "black_tea",
        "name": "Чёрный чай",
        "price": 149,
        "category": "drinks",
        "count": "200мл",
        "image": "./images/drinks/05_black_tea.jpg",
        "kind": "hot"
    },
    {
        "keyword": "green_tea",
        "name": "Зелёный чай",
        "price": 149,
        "category": "drinks",
        "count": "200мл",
        "image": "./images/drinks/06_green_tea.jpg",
        "kind": "hot"
    },
    {
        "keyword": "korean_salad_with_vegetables_and_egg",
        "name": "Корейский салат с овощами и яйцом",
        "price": 499,
        "category": "salads",
        "count": "250г",
        "image": "./images/salads/01_korean_salad_with_vegetables_and_egg.jpg",
        "kind": "veg"
    },
    {
        "keyword": "caesar_with_chicken",
        "name": "Цезарь с цеплёнком",
        "price": 599,
        "category": "salads",
        "count": "250г",
        "image": "./images/salads/02_caesar_with_chicken.jpg",
        "kind": "meat"
    },
    {
        "keyword": "capreze_with_mozzarella",
        "name": "Капрезе с моцареллой",
        "price": 549,
        "category": "salads",
        "count": "250г",
        "image": "./images/salads/03_capreze_with_mozzarella.jpg",
        "kind": "veg"
    },
    {
        "keyword": "salad_with_tuna",
        "name": "Салат с тунцом",
        "price": 599,
        "category": "salads",
        "count": "250г",
        "image": "./images/salads/04_salad_with_tuna.jpg",
        "kind": "fish"
    },
    {
        "keyword": "potato_fries_with_caesar_sauce",
        "name": "Картофель фри с соусом Цезарь",
        "price": 349,
        "category": "salads",
        "count": "250г",
        "image": "./images/salads/05_potato_fries_with_caesar_sauce.jpg",
        "kind": "veg"
    },
    {
        "keyword": "potato_fries_with_ketchup",
        "name": "Картофель фри с кетчупом",
        "price": 299,
        "category": "salads",
        "count": "250г",
        "image": "./images/salads/06_potato_fries_with_ketchup.jpg",
        "kind": "veg"
    },
    {
        "keyword": "pakhlava",
        "name": "Пахлава",
        "price": 599,
        "category": "desserts",
        "count": "150г",
        "image": "./images/desserts/01_pakhlava.jpg",
        "kind": "small-dose"
    },
    {
        "keyword": "cheesecake",
        "name": "Чизкейк",
        "price": 649,
        "category": "desserts",
        "count": "150г",
        "image": "./images/desserts/02_cheesecake.jpg",
        "kind": "medium-dose"
    },
    {
        "keyword": "chocolate_cheesecake",
        "name": "Шоколадный чизкейк",
        "price": 699,
        "category": "desserts",
        "count": "150г",
        "image": "./images/desserts/03_chocolate_cheesecake.jpg",
        "kind": "medium-dose"
    },
    {
        "keyword": "chocolate_cake",
        "name": "Шоколадный торт",
        "price": 699,
        "category": "desserts",
        "count": "250г",
        "image": "./images/desserts/04_chocolate_cake.jpg",
        "kind": "small-dose"
    },
    {
        "keyword": "doughnuts_3",
        "name": "Пончики (3шт)",
        "price": 499,
        "category": "desserts",
        "count": "150г",
        "image": "./images/desserts/05_doughnuts_3.jpg",
        "kind": "small-dose"
    },
    {
        "keyword": "doughnuts_6",
        "name": "Пончики (6шт)",
        "price": 799,
        "category": "desserts",
        "count": "300г",
        "image": "./images/desserts/06_doughnuts_6.jpg",
        "kind": "big-dose"
    }
];
