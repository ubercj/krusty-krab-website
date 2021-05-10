function createHomePage() {
  const headline = document.createElement("h1");
  const image = document.createElement("img");
  const bodyText = document.createElement("h3");

  headline.textContent = "My 5-Star Restaurant";

  image.src = "assets/images/Squilliam_Returns_025.jpg";
  image.alt = "Squilliam Fancyson shirtless";
  image.classList.add("feature-image");

  bodyText.textContent = "Where fine dining and breathing are all we know how to do.";

  document.getElementById("content").appendChild(headline);
  document.getElementById("content").appendChild(image);
  document.getElementById("content").appendChild(bodyText);
}

export {createHomePage};