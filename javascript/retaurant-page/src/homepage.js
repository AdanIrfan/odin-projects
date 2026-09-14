import restaurantImage from "./assets/chef-restaurant.png";
import "./style.css";

export default function createHomePage() {
  const container = document.getElementById("content");
  container.replaceChildren();
  container.classList.add("container");

  function createHero() {
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    container.appendChild(titleDiv);

    const img = document.createElement("img");
    img.src = restaurantImage;
    img.alt = "chef restaurant";
    img.style.width = "15rem";
    titleDiv.appendChild(img);

    const heading = document.createElement("h1");
    heading.textContent = "Chef Restaurant Bar";
    titleDiv.appendChild(heading);
  }

  function createTagline() {
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info-card");
    container.appendChild(infoDiv);

    const para1 = document.createElement("p");
    para1.textContent = `Welcome to Chef Restaurant Bar, where fresh ingredients, delicious flavors, and a cozy atmosphere come together to make every meal special.`;
    infoDiv.appendChild(para1);

    const writtenBy = document.createElement("h3");
    writtenBy.textContent = `--Chef's Kitchen`;
    infoDiv.appendChild(writtenBy);
  }

  function createHours() {
    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("info-card");
    container.appendChild(hoursDiv);

    const hoursHeading = document.createElement("h2");
    hoursHeading.textContent = "Hours";
    hoursDiv.appendChild(hoursHeading);

    const unorderedList = document.createElement("ul");
    hoursDiv.appendChild(unorderedList);

    const hours = [
      { day: "Sunday", time: "8am - 8pm" },
      { day: "Monday", time: "6am - 6pm" },
      { day: "Tuesday", time: "6am - 6pm" },
      { day: "Wednesday", time: "8am - 8pm" },
      { day: "Thursday", time: "6am - 10pm" },
      { day: "Friday", time: "6am - 10pm" },
      { day: "Saturday", time: "8am - 10pm" },
    ];

    hours.forEach((OpensAt) => {
      let listItem = document.createElement("li");
      listItem.textContent = `${OpensAt.day}: ${OpensAt.time}`;
      unorderedList.appendChild(listItem);
    });
  }

  function createLocation() {
    const locationDiv = document.createElement("div");
    locationDiv.classList.add("info-card");
    container.appendChild(locationDiv);

    const locationHeading = document.createElement("h2");
    locationHeading.textContent = `Location`;
    locationDiv.appendChild(locationHeading);

    const locationParagraph = document.createElement("p");
    locationParagraph.textContent = `123 Forest Drive, Forestville, Maine`;
    locationDiv.appendChild(locationParagraph);
  }

  createHero();
  createTagline();
  createHours();
  createLocation();
}
