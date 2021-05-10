// Import modules
import {createHomePage} from "./createHomePage"
import {createMenu} from "./createMenu"
import {createSpecials} from "./createSpecials"
import {createReservations} from "./createReservations"
import {createContact} from "./createContact"

// Declare DOM objects
const pageContent = document.getElementById("content");
const homeTab = document.getElementById("home");
const menuTab = document.getElementById("menu");
const specialsTab = document.getElementById("specials");
const reservationsTab = document.getElementById("reservations");
const contactTab = document.getElementById("contact");


// Remove all children from #content
const clearPage = () => {
  while (pageContent.firstChild) {
    pageContent.lastChild.remove();
  }
}

// Event listeners for navigation tabs
homeTab.addEventListener("click", () => {
  clearPage();
  createHomePage();
})

menuTab.addEventListener("click", () => {
  clearPage();
  createMenu();
})

specialsTab.addEventListener("click", () => {
  clearPage();
  createSpecials();
})

reservationsTab.addEventListener("click", () => {
  clearPage();
  createReservations();
})

contactTab.addEventListener("click", () => {
  clearPage();
  createContact();
})

// Render home page on site load
createHomePage();
