function createContact() {
  const heading = document.createElement("h1");
  const subheading = document.createElement("p");
  const scream = document.createElement("p");
  const myInfo = document.createElement("a");
  const image = document.createElement("img");

  heading.textContent = "Have any questions?";
  subheading.textContent = "Go ahead, ask me anything! My name? It's, uhh... Beef Wellington? Uhh... err... the fork on the left?";
  scream.classList.add("scream");
  scream.textContent = "WE THREW OUT HIS NAME!";

  image.src = "assets/images/we_threw_out_his_name.jpg";
  image.alt = "Spongebob's office on fire."
  image.classList.add("feature-image");

  myInfo.href = "https://github.com/ubercj";
  myInfo.textContent = "Meet the 5-Star creator of this site.";

  document.getElementById("content").appendChild(heading);
  document.getElementById("content").appendChild(myInfo);
  document.getElementById("content").appendChild(subheading);
  document.getElementById("content").appendChild(image);
  document.getElementById("content").appendChild(scream);
}

export {createContact};