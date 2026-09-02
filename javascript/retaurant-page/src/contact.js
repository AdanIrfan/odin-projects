
export default function contactPageStructure() {
    const container = document.getElementById("content");
    container.innerHTML = ""
    container.style.color = "white";

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");
    contactDiv.style.display = "flex";
    contactDiv.style.flexDirection = "column";
    contactDiv.style.gap = "2em";
    contactDiv.style.margin = "1.5em 2em";
    contactDiv.style.textAlign = "center";
    container.appendChild(contactDiv);

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";
    heading.style.borderBottom = "1px solid white";
    heading.style.margin = "0.5em 9em";
    heading.style.textAlign = "center";
    contactDiv.appendChild(heading);


    // Mama Bear
    const mamaBearDiv = document.createElement("div");
    mamaBearDiv.classList.add("contactCard");
    mamaBearDiv.style.border = "12px solid black";
    mamaBearDiv.style.borderRadius = "50px";
    mamaBearDiv.style.padding = "1em";
    contactDiv.appendChild(mamaBearDiv);

    const mamaHeading = document.createElement("h2");
    mamaHeading.textContent = "Mama Bear";
    mamaHeading.style.textAlign = "start";
    mamaHeading.style.paddingLeft = "1em";
    mamaBearDiv.appendChild(mamaHeading);

    const mamaRole = document.createElement("p");
    mamaRole.textContent = "Chef";
    mamaBearDiv.appendChild(mamaRole);

    const mamaPhone = document.createElement("p");
    mamaPhone.textContent = "555-555-5554";
    mamaBearDiv.appendChild(mamaPhone);

    const mamaEmail = document.createElement("p");
    mamaEmail.textContent = "totallyRealEmail@notFake.com";
    mamaBearDiv.appendChild(mamaEmail);


    // Papa Bear
    const papaBearDiv = document.createElement("div");
    papaBearDiv.classList.add("contactCard");
    papaBearDiv.style.border = "12px solid black";
    papaBearDiv.style.borderRadius = "50px";
    papaBearDiv.style.padding = "1em";
    contactDiv.appendChild(papaBearDiv);

    const papaHeading = document.createElement("h2");
    papaHeading.textContent = "Papa Bear";
    papaHeading.style.textAlign = "start";
    papaHeading.style.paddingLeft = "1em";
    papaBearDiv.appendChild(papaHeading);

    const papaRole = document.createElement("p");
    papaRole.textContent = "Manager";
    papaBearDiv.appendChild(papaRole);

    const papaPhone = document.createElement("p");
    papaPhone.textContent = "555-555-5555";
    papaBearDiv.appendChild(papaPhone);

    const papaEmail = document.createElement("p");
    papaEmail.textContent = "perfectlyRealEmail@notFake.com";
    papaBearDiv.appendChild(papaEmail);


    // Baby Bear
    const babyBearDiv = document.createElement("div");
    babyBearDiv.classList.add("contactCard");
    babyBearDiv.style.border = "12px solid black";
    babyBearDiv.style.borderRadius = "50px";
    babyBearDiv.style.padding = "1em";
    contactDiv.appendChild(babyBearDiv);

    const babyHeading = document.createElement("h2");
    babyHeading.textContent = "Baby Bear";
    babyHeading.style.textAlign = "start";
    babyHeading.style.paddingLeft = "1em";
    babyBearDiv.appendChild(babyHeading);

    const babyRole = document.createElement("p");
    babyRole.textContent = "Waiter";
    babyBearDiv.appendChild(babyRole);

    const babyPhone = document.createElement("p");
    babyPhone.textContent = "555-555-5556";
    babyBearDiv.appendChild(babyPhone);

    const babyEmail = document.createElement("p");
    babyEmail.textContent = "totallyRealEmail@notFake.com";
    babyBearDiv.appendChild(babyEmail);
}
