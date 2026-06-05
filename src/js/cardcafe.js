
document.addEventListener("DOMContentLoaded", () => {

    const coffees = [
        {
            name: "The Perfect Mocha Coffee",
            description: "Espresso mixed with chocolate and steamed milk.",
            price: "$6",
            image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/the_perfect_mocha_coffee_29100_16x9.jpg"
        },
        {
            name: "Ice Cream",
            description: "Delicious cold dessert for hot days.milk topping.milk",
            price: "$4",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ice_Cream_dessert_02.jpg/960px-Ice_Cream_dessert_02.jpg"
        },
        {
            name: "Black Forest Sundae",
            description: "Chocolate ice cream with cherry topping.milk topping.milk",
            price: "$5",
            image: "https://creative-culinary.com/wp-content/uploads/black-forest-ice-cream-2.jpg"
        },
        {
            name: "Iced Coffee",
            description: "Refreshing coffee served over ice.",
            price: "$6",
            image: "https://images.immediate.co.uk/production/volatile/sites/30/2021/05/Iced-Mocha-db3c51a.jpg?quality=90&webp=true&resize=700,636"
        },
        {
            name: "Milk Tea",
            description: "Sweet milk tea with rich flavor.",
            price: "$2",
            image: "https://takestwoeggs.com/wp-content/uploads/2021/04/Brown-Sugar-Milk-Tea-Boba-Recipe-Takestwoeggs-Easy-Asian-Inspired-Recipes-sq.jpg"
        },
        {
            name: "Americano",
            description: "Espresso diluted with hot water.",
            price: "$3",
            image: "https://insanelygoodrecipes.com/wp-content/uploads/2023/06/Hot-Americano-Coffee-with-Beans-480x270.jpg"
        },
         {
            name: "Americano",
            description: "Espresso diluted with hot water.",
            price: "$3",
            image: "https://i.pinimg.com/736x/be/ce/3f/bece3fed8414b5b16a174fca938fc698.jpg"
        },
         {
            name: "Americano",
            description: "Espresso diluted with hot water.",
            price: "$3",
            image: "https://i.pinimg.com/736x/cf/20/0f/cf200fcd889e35ea0911e3195c705f8f.jpg"
        },
         {
            name: "Americano",
            description: "Espresso diluted with hot water.",
            price: "$3",
            image: "https://i.pinimg.com/736x/40/aa/c9/40aac912a751d81b0990775ccc482343.jpg"
        },
         {
            name: "Americano",
            description: "Espresso diluted with hot water.",
            price: "$3",
            image: "https://i.pinimg.com/736x/cb/08/6d/cb086de82f355f44635c879ac73ef866.jpg"
        },
         {
            name: "Americano",
            description: "Espresso diluted with hot water.",
            price: "$3",
            image: "https://i.pinimg.com/736x/f9/c7/7c/f9c77c3fef98a248b9e9b6a586dd222f.jpg"
        },
         {
            name: "Americano",
            description: "Espresso diluted with hot water.",
            price: "$3",
            image: "https://i.pinimg.com/736x/06/76/f3/0676f3bae9184b54ddee40ae51208b7e.jpg"
        },
    ];

    const container = document.getElementById("coffee-container");

    coffees.forEach(coffee => {
        container.innerHTML += `
                    <div class="col-12 col-md-6  col-lg-4">
                        <div class="card h-100 shadow-sm">
                            <img src="${coffee.image}" class="card-img-top" alt="${coffee.name}">

                            <div class="card-body">
                                <h4>${coffee.name}</h4>
                                <p>${coffee.description}</p>

                                <div class="d-flex justify-content-between align-items-center">
                                    <span class="price">${coffee.price}</span>
                                    <a href="detail.html" class="btn btn-detail">
                                        Page Detail
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    });

});
