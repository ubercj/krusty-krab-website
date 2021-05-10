function createMenu() {
  const heading = document.createElement("h1");
  const menu = document.createElement("div");

  const modal = document.createElement("div");
  const modalButton = document.createElement("button");

  const item1 = document.createElement("div");
  const item2 = document.createElement("div");
  const item3 = document.createElement("div");

  const item1Name = document.createElement("h2");
  const item1Photo = document.createElement("img");
  const item1Button = document.createElement("button");

  const item2Name = document.createElement("h2");
  const item2Photo = document.createElement("img");
  const item2Button = document.createElement("button");

  const item3Name = document.createElement("h2");
  const item3Photo = document.createElement("img");
  const item3Button = document.createElement("button");

  heading.textContent = "Dinner Menu";
  menu.classList.add("container");
  modal.classList.add("modal", "hidden");
  
  modalButton.textContent = "Hommina.";
  modalButton.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.textContent = "";
  })

  const menuItems = [item1, item2, item3];
  menuItems.forEach(item => item.classList.add("menu-item"));

  const buttons = [item1Button, item2Button, item3Button];
  buttons.forEach(button => button.textContent = "More info");

  function createModal(desc) {
    const description = document.createElement("p");
    description.textContent = desc;
    modal.appendChild(description);
    modal.appendChild(modalButton);
    modal.classList.remove("hidden");
  }

  item1Name.textContent = "Krabby Newberg";
  item1Photo.src = "../assets/images/krabby_newburg.jpg";
  item1Button.addEventListener("click", () => {
    let desc = "From our menu tonight, might I recommend the Krabby Newburg? We take the finest cuts of aged, imported kelp, stuff them with herbs from our garden, wrap them in parchment with our award-winning shallot tapenade, slow-roast them for six hours in our wood-fired, clay-filled oven, or kiva, and serve them with a garnish of wilted coral on a mahogany plank."
    createModal(desc);
  })

  item2Name.textContent = "Krusty Krab Pizza";
  item2Photo.src = "../assets/images/krusty_krab_pizza.jpg";
  item2Button.addEventListener("click", () => {
    let desc = "The Krusty Krab pizza is the pizza for you and me. The Krusty Krab pizza is the pizza, absolutivally. (Drink sold separately)."
    createModal(desc);
  })

  item3Name.textContent = "Appetizer";
  item3Photo.src = "../assets/images/appetizer.jpg";
  item3Button.addEventListener("click", () => {
    let desc = "Manager's special. Prepared by former... uh, \"crew member\" of the S.S. Gourmet."
    createModal(desc);
  })

  item1.appendChild(item1Name);
  item1.appendChild(item1Photo);
  item1.appendChild(item1Button);

  item2.appendChild(item2Name);
  item2.appendChild(item2Photo);
  item2.appendChild(item2Button);

  item3.appendChild(item3Name);
  item3.appendChild(item3Photo);
  item3.appendChild(item3Button);

  menu.appendChild(item1);
  menu.appendChild(item2);
  menu.appendChild(item3);
  menu.appendChild(modal);

  document.getElementById("content").appendChild(heading);
  document.getElementById("content").appendChild(menu);
}

export {createMenu};