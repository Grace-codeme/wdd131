const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/temples/aba-nigeria-temple-761330-standard.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/temples/manti-utah-temple-760773-standard.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/temples/payson-utah-temple-762298-standard.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2022, May, 22",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/temples/yigo-guam-temple-761445-standard.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/temples/salt-lake-temple-39128-standard.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/temples/washington-dc-temple-45012-standard.jpg"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19184,
        imageUrl: "https://content.churchofjesuschrist.org/temples/johannesburg-south-africa-temple-40435-standard.jpg"
    },
    {
        templeName: "Logan Utah",
        location: "Logan, Utah, United States",
        dedicated: "1884, May, 17",
        area: 119619,
        imageUrl: "https://content.churchofjesuschrist.org/temples/logan-utah-temple-40540-standard.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 52590,
        imageUrl: "https://content.churchofjesuschrist.org/temples/tokyo-japan-temple-26340-standard.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/temples/mexico-city-mexico-temple-40110-standard.jpg"
    }
];
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#temple-container");
    const resTitle = document.querySelector("#res-title");

    // Footer Updates
    document.querySelector("#currentyear").textContent = new Date().getFullYear();
    document.querySelector("#lastModified").textContent = `Last Modified: ${ document.lastModified }`;
    // Mobile Menu
    const menuBtn = document.querySelector("#menu");
    const nav = document.querySelector("nav");
    menuBtn.addEventListener("click", () => {
        nav.classList.toggle("open");
        menuBtn.classList.toggle("open");
    });

    function createTempleCard(filteredTemples) {
        container.innerHTML = "";
        filteredTemples.forEach(temple => {
            const card = document.createElement("section");
            card.classList.add("temple-card");
            card.innerHTML = `
                <h3>${temple.templeName}</h3>
                <p><span>Location:</span> ${temple.location}</p>
                <p><span>Dedicated:</span> ${temple.dedicated}</p>
                <p><span>Size:</span> ${temple.area.toLocaleString()} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            `;
            container.appendChild(card);
        });
    }

    // Filter Listeners
    document.querySelector("#home").addEventListener("click", () => { resTitle.textContent = "Home"; createTempleCard(temples); });
    document.querySelector("#old").addEventListener("click", () => {
        resTitle.textContent = "Old";
        createTempleCard(temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900));
    });
    document.querySelector("#new").addEventListener("click", () => {
        resTitle.textContent = "New";
        createTempleCard(temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000));
    });
    document.querySelector("#large").addEventListener("click", () => {
        resTitle.textContent = "Large";
        createTempleCard(temples.filter(t => t.area > 90000));
    });
    document.querySelector("#small").addEventListener("click", () => {
        resTitle.textContent = "Small";
        createTempleCard(temples.filter(t => t.area < 10000));
    });

    createTempleCard(temples); // Display all on load
});