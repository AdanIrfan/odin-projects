import restaurantImage from "./assets/chef-restaurant.png";

export default function homePageStructure(){
    const container = document.getElementById("content");
    container.innerHTML = "";
    container.style.color = "white";

    
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title");
    titleDiv.style.display = "flex";
    titleDiv.style.flexDirection = "column";
    container.appendChild(titleDiv);

    const img = document.createElement("img");
    img.src = restaurantImage;
    img.alt = "chef restaurant";
    img.style.width = `15rem`;
    img.style.alignSelf = "center";
    img.style.marginTop = "2em"
    titleDiv.appendChild(img);

    const heading = document.createElement("h1");
    heading.textContent = `Chef Restaurant Bar`;
    heading.style.borderBottom = `1px solid white`;
    // heading.style.borderRadius = `50px`;
    // heading.style.padding = `5em`;
    heading.style.margin = `0.5em 9em`;
    container.style.display = `flow-root`;
    heading.style.textAlign = `center`;
    titleDiv.appendChild(heading);

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");
    infoDiv.style.display = `flex`;
    infoDiv.style.flexDirection = "column";
    infoDiv.style.gap = "2em";
    infoDiv.style.margin = `1.5em 2em`;
    infoDiv.style.textAlign = `center`;
    container.appendChild(infoDiv);
    
    const taglineDiv = document.createElement("div");
    taglineDiv.style.border = `12px solid black`;
    taglineDiv.style.borderRadius = `50px`;
    taglineDiv.style.padding = `0.5em`;
    taglineDiv.classList.add("taglineDiv");
    infoDiv.appendChild(taglineDiv);

    const para1 = document.createElement("p");
    para1.textContent = `Welcome to Chef Restaurant Bar, where fresh ingredients, delicious flavors, and a cozy atmosphere come together to make every meal special.`;
    taglineDiv.appendChild(para1);

    const writtenBy = document.createElement("h3");
    writtenBy.textContent = `--Chef's Kitchen`;
    taglineDiv.appendChild(writtenBy);
    writtenBy.style.textAlign = "start";
    writtenBy.style.paddingLeft = "1em"
    
    const hoursDiv = document.createElement("div");
    hoursDiv.style.border = `12px solid black`;
    hoursDiv.style.borderRadius = `50px`;
    hoursDiv.style.padding = `0.5em`;
    hoursDiv.style.margin = "0px 12rem"
    hoursDiv.classList.add("hoursDiv");
    infoDiv.appendChild(hoursDiv);

    const hoursHeading = document.createElement("h2");
    hoursHeading.style.textAlign = "start";
    hoursHeading.style.paddingLeft = "1em"
    hoursHeading.textContent = `Hours`;
    hoursDiv.appendChild(hoursHeading);

    const unorderedList = document.createElement("ul");
    unorderedList.style.listStyle = "none";
    hoursDiv.appendChild(unorderedList);

    const li1 = document.createElement("li");
    li1.textContent = `Sunday: 8am - 8pm`;
    unorderedList.appendChild(li1);

    const li2 = document.createElement("li");
    li2.textContent = `Monday: 6am - 6pm`;
    unorderedList.appendChild(li2);

    const li3 = document.createElement("li");
    li3.textContent = `Tuesday: 6am - 6pm`;
    unorderedList.appendChild(li3);

    const li4 = document.createElement("li");
    li4.textContent = `Wednesday: 8am - 8pm`;
    unorderedList.appendChild(li4);

    const li5 = document.createElement("li");
    li5.textContent = `Thursday: 6am - 10pm`;
    unorderedList.appendChild(li5);

    const li6 = document.createElement("li");
    li6.textContent = `Friday: 6am - 10pm`;
    unorderedList.appendChild(li6);

    const li7 = document.createElement("li");
    li7.textContent = `Saturday: 8am - 10pm`;
    unorderedList.appendChild(li7);
    
    
    const locationDiv = document.createElement("div");
    locationDiv.style.border = `12px solid black`;
    locationDiv.style.borderRadius = `50px`;
    locationDiv.style.padding = `0.5em`;
    locationDiv.style.marginBottom = "2rem"
    locationDiv.classList.add("locationDiv");
    infoDiv.appendChild(locationDiv);

    const locationHeading = document.createElement("h2");
    locationHeading.textContent = `Location`;
    locationHeading.style.textAlign = "start";
    locationHeading.style.paddingLeft = "1em"
    locationDiv.style.margin = "0px 8rem"
    locationDiv.appendChild(locationHeading);

    const locationParagraph = document.createElement("p");
    locationParagraph.textContent = `123 Forest Drive, Forestville, Maine`;
    locationDiv.appendChild(locationParagraph);

}