const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    const selectElement = document.getElementById("product-name");

    // 1. Populate select options dynamically (Criterion 5 - 6pts)
    if (selectElement) {
        products.forEach(product => {
            const option = document.createElement("option");
            option.value = product.id;
            option.textContent = product.name;
            selectElement.appendChild(option);
        });
    }

    // 2. Footer Updates (Fixing IDs to match your HTML)
    const yearElement = document.getElementById("currentyear");
    const modElement = document.getElementById("lastModified");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    if (modElement) {
        modElement.textContent = `Last Modification: ${document.lastModified}`;
    }
});