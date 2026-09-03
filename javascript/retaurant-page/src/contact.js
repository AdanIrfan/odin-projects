
export default function contactPageStructure() {
    const container = document.getElementById("content");

    container.innerHTML = "";
    container.style.color = "white";

    const contactDiv = document.createElement("div");
    contactDiv.classList.add("contact");

    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";

    contactDiv.appendChild(heading);

    const contacts = [
        {
            name: "Mama Bear",
            role: "Chef",
            phone: "555-555-5554",
            email: "totallyRealEmail@notFake.com"
        },
        {
            name: "Papa Bear",
            role: "Manager",
            phone: "555-555-5555",
            email: "perfectlyRealEmail@notFake.com"
        },
        {
            name: "Baby Bear",
            role: "Waiter",
            phone: "555-555-5556",
            email: "totallyRealEmail@notFake.com"
        }
    ];

    contacts.forEach(contact => {
        const card = createContactCard(contact);
        contactDiv.appendChild(card);
    });

    container.appendChild(contactDiv);
}


function createContactCard(contact) {
    const card = document.createElement("div");
    card.classList.add("contactCard");

    const name = document.createElement("h2");
    name.textContent = contact.name;

    const role = document.createElement("p");
    role.textContent = contact.role;

    const phone = document.createElement("p");
    phone.textContent = contact.phone;

    const email = document.createElement("p");
    email.textContent = contact.email;

    card.append(name, role, phone, email);

    return card;
}
