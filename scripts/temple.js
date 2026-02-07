const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 12000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 107000,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector("#temple-container");
    const resTitle = document.querySelector("#res-title");

    // Footer
    document.querySelector("#currentyear").textContent = new Date().getFullYear();
    document.querySelector("#lastModified").textContent = "Last Modified: " + document.lastModified;

    // Mobile Menu
    const menuBtn = document.querySelector("#menu");
    const nav = document.querySelector("nav");
    menuBtn?.addEventListener("click", () => {
        nav.classList.toggle("open");
        menuBtn.classList.toggle("open");
    });

    function createTempleCard(filteredTemples) {
        if (!container) return;
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

    // Filters
    document.querySelector("#home")?.addEventListener("click", () => { resTitle.textContent = "Home"; createTempleCard(temples); });
    document.querySelector("#old")?.addEventListener("click", () => {
        resTitle.textContent = "Old";
        createTempleCard(temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900));
    });
    document.querySelector("#new")?.addEventListener("click", () => {
        resTitle.textContent = "New";
        createTempleCard(temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000));
    });
    document.querySelector("#large")?.addEventListener("click", () => {
        resTitle.textContent = "Large";
        createTempleCard(temples.filter(t => t.area > 90000));
    });
    document.querySelector("#small")?.addEventListener("click", () => {
        resTitle.textContent = "Small";
        createTempleCard(temples.filter(t => t.area < 10000));
    });

    createTempleCard(temples);
});