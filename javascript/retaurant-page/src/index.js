import "./style.css";
import homePageStructure from "./homepage.js";
import menuPageStructure from "./menu.js";
import aboutPageStructure from "./contact.js";
// import restaurantBackgroundImg from "./assets/bground.jpg";


const homePageBtn = document.getElementById("home");
const menuPageBtn = document.getElementById("menu");
const aboutPageBtn = document.getElementById("about");


homePageBtn.addEventListener("click", ()=> homePageStructure());
menuPageBtn.addEventListener("click", ()=> menuPageStructure());
aboutPageBtn.addEventListener("click", ()=> aboutPageStructure());

// document.body.style.backgroundImage = `url("${restaurantBackgroundImg}")`;

homePageStructure();