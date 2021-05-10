function createSpecials() {
  const heading = document.createElement("h1");
  const image = document.createElement("img");

  heading.textContent = "Run for your lives! It's The Appetizer!!"

  image.src = "../assets/images/appetizer_monster.jpg"
  image.alt = "The appetizer monster."
  image.classList.add("feature-image");

  document.getElementById("content").appendChild(heading);
  document.getElementById("content").appendChild(image);
}

export {createSpecials};