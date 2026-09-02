import restaurantImage from "./assets/chef-restaurant.png";

export default function homepageSturture(){
    const container = document.getElementById("content");
    const img = document.createElement("img");
    img.src = restaurantImage;
    container.appendChild(img);
    const title = document.createElement("h1");
    title.textContent = `Chef Restaurant`;
    container.appendChild(title);
}