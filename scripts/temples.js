document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

    document.getElementById('menu').addEventListener('click', () => {
        document.querySelector('nav').classList.toggle('open');
        document.getElementById('menu').classList.toggle('open');
    });
});
