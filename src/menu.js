function createMenu() {
  const menu = document.createElement("div");
  menu.setAttribute("id", "menu");
  menu.classList.add("tab-content");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("cardContainer");
  cardContainer.appendChild(
    createCard(
      "Farm Villa Pizza",
      "A fiery and lethal combination of h...",
      "img/pizza/FarmVilla.jpeg"
    )
  );
  cardContainer.appendChild(
    createCard(
      "Burn To Hell Pizza",
      "The freshness of capsicum, tomatoes...",
      "img/pizza/BurnToHell.jpg"
    )
  );
  cardContainer.appendChild(
    createCard(
      "Chessy-7 Pizza",
      "An Exotic Combination of White Mozz...",
      "img/pizza/Chessy-7.jpeg"
    )
  );
  cardContainer.appendChild(
    createCard(
      "English Retreat Pizza",
      "Nothing says cheesy like the cheese...",
      "img/pizza/EnglshRetreat.jpeg"
    )
  );
  cardContainer.appendChild(
    createCard(
      "Cheese Lover Pizza",
      "Mushrooms, Jalapenos, Baby Corn, Ca...",
      "img/pizza/CheesLovers.jpg"
    )
  );
  cardContainer.appendChild(
    createCard(
      "Las Vegas Treat Pizza",
      "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil",
      "img/pizza/LastVagasTreat.jpeg"
    )
  );
  menu.appendChild(cardContainer);

  return menu;
}

function createCard(name, desc, img) {
  let card = document.createElement("div");
  card.classList.add("card");

  let cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  let cardImg = document.createElement("img");
  cardImg.classList.add("cardImg");
  cardImg.src = img;
  cardImg.alt = "Top Rated Pizza";

  let foodName = document.createElement("h3");
  foodName.textContent = name;
  foodName.classList.add("foodName");
  let foodDes = document.createElement("p");
  foodDes.textContent = desc;
  foodDes.classList.add("foodDes");

  cardContent.appendChild(foodName);
  cardContent.appendChild(foodDes);

  card.appendChild(cardImg);
  card.appendChild(cardContent);
  return card;
}

function loadMenu() {
  let main = document.querySelector("main");
  main.textContent = "";
  main.appendChild(createMenu());
  return main;
}

export default loadMenu;
