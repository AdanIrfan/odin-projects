import "./style.css";

export default function menuPageStructure(){

    function createMenuItem(title, description, price){
        return {
            title,
            description,
            price
        }
    };

    const beverages = [
        createMenuItem(
            "Honey Tea",
            "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!",
            "$2"
        ),
        createMenuItem("Beary Tea",
            "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.",
            "$3"
        ),
    ];  

    const sides = [
    createMenuItem(
        "Toast and Jam",
        "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.",
        "1$"
    ),

    createMenuItem(
        "Fresh Fruit",
        "A small bowl of fresh fruit, whatever we find at the market for the day.",
        "$3"
    )
    ];

    const mainDishes = [
        createMenuItem(
            "Pancakes",
            "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.",
            "$4"
        ),

        createMenuItem(
            "French Toast",
            "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.",
            "$5"    
        ),

        createMenuItem(
            "Beary Veggie Sandwich",
            "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.",
            "$8"
        ),

        createMenuItem(
            "BLT",
            "Interested in the Beary Veggie Sandwich but also love bacon? Say no more.",
            "$6"
        ),

        createMenuItem(
            "Bagel and Lox",
            "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.",
            "$8"    
        ),

        createMenuItem(
            "Honeycomb",
            "Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.",
            "$6"
        ),

        createMenuItem(
            "Beary Bowl",
            "Get a big ole bowl of our berries! Side of honey is $1 extra.",
            "$7"
        ),

        createMenuItem(
            "The Beary Best Porridge",
            "Made by Baby Bear himself, this porridge is guaranteed to be just right, or your money back.",
            "$5"
        )
    ];

    const menuContainer = document.getElementById("content");
    menuContainer.id = "content";

    menuContainer.innerHTML='';

    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "Menu";
    menuHeading.classList.add("menuHeading");
    menuContainer.appendChild(menuHeading);

    const beveragesDiv = document.createElement("div");
    const sidesDiv = document.createElement("div");
    const mainDishesDiv = document.createElement("div");

    const beveragesHeading = document.createElement("h1");
    beveragesHeading.textContent = "Beverages";
    beveragesHeading.classList.add("categoryHeading");
    const sidesHeading = document.createElement("h1");
    sidesHeading.textContent = "Sides";
    sidesHeading.classList.add("categoryHeading");
    const mainDishesHeading = document.createElement("h1");
    mainDishesHeading.textContent = "Main Dishes";
    mainDishesHeading.classList.add("categoryHeading");


    menuContainer.appendChild(beveragesHeading);
    menuContainer.appendChild(beveragesDiv);
    menuContainer.appendChild(sidesHeading);
    menuContainer.appendChild(sidesDiv);
    menuContainer.appendChild(mainDishesHeading);
    menuContainer.appendChild(mainDishesDiv);

    function createMenuDisplay(item){
        const div = document.createElement("div");
        div.classList.add("category");

        const title = document.createElement("h2");
        title.textContent = item.title;
        title.classList.add("title");
        div.appendChild(title);

        const description = document.createElement("p");
        description.textContent = item.description;
        div.appendChild(description);

        const price = document.createElement("h2");
        price.textContent = item.price;
        div.appendChild(price);

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("imgContainer");
        div.appendChild(imgContainer);

        return div;
    }


    beverages.forEach((dish)=>{
        beveragesDiv.appendChild(createMenuDisplay(dish));
    })

    sides.forEach((dish)=>{
        sidesDiv.appendChild(createMenuDisplay(dish));
    })

    mainDishes.forEach((dish)=>{
        mainDishesDiv.appendChild(createMenuDisplay(dish))
    })


}