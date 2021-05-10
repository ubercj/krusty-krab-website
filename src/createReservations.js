function createReservations() {
  const heading = document.createElement("h1");
  const container = document.createElement("div");
  const photoBox = document.createElement("div");
  const image = document.createElement("img");
  const caption = document.createElement("p");
  const bodyText = document.createElement("p");
  const disclaimer = document.createElement("p");
  
  heading.textContent = "Table for Hommina?"

  image.src = "../assets/images/violin.jpeg";
  image.alt = "The world's smallest violin."
  image.classList.add("feature-image");

  caption.textContent = "Music performed nightly - sad songs on the World's Smallest Violin.";

  bodyText.textContent = "Experience unparalleled service from our staff. Do you wear a hat? We can take that for you, sir. Would you like cheese on that, sir? We've got you covered. More soup for your armpits? We're there.";

  disclaimer.classList.add("disclaimer");
  disclaimer.textContent = "Reservations by appointment only. The Krusty Krab is not liable for any damages or personal injury caused by cheese graters, scalding soup, or sentient appetizers.";

  photoBox.classList.add("photo-box");
  photoBox.appendChild(image);
  photoBox.appendChild(caption);

  container.classList.add("vert-container");
  container.appendChild(bodyText);
  container.appendChild(photoBox);
  container.appendChild(disclaimer);

  document.getElementById("content").appendChild(heading);
  document.getElementById("content").appendChild(container);
}

export {createReservations};