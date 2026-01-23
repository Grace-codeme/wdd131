document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
});

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("_______", () => {
    navigation._______.toggle("_______");
    hamButton.classList.toggle("open");
});
const button = document.querySelector('#menu');
const nav = document.querySelector('nav');

button.addEventListener('click', () => {
    nav.classList.toggle('open');
});
