document.addEventListener('DOMContentLoaded', () => {
    // 1. Array of Objects (Requirement #12 & #13)
    const clubFeatures = [
        { title: "Ibadan Photo Walk", detail: "Outdoor - Oct 12" },
        { title: "Lighting Workshop", detail: "Studio - Nov 5" },
        { title: "Member Gallery", detail: "Online - Always Open" }
    ];

    // 2. DOM Selection & Array Methods (Requirement #10 & #13)
    const featureContainer = document.querySelector('#feature-container');

    // This is a function (Requirement #9)
    const displayFeatures = (features) => {
        if (featureContainer) {
            featureContainer.innerHTML = "";
            features.forEach(item => {
                const div = document.createElement('div');
                div.className = "info-card";
                // Template Literals used exclusively (Requirement #14)
                div.innerHTML = `<h3>${item.title}</h3><p>${item.detail}</p>`;
                featureContainer.appendChild(div);
            });
        }
    };
    displayFeatures(clubFeatures);

    // 3. LocalStorage & Conditional Branching (Requirement #11 & #15)
    const visitDisplay = document.querySelector('#visit-msg');
    let numVisits = Number(window.localStorage.getItem('club-visits')) || 0;

    if (visitDisplay) {
        if (numVisits === 0) {
            visitDisplay.textContent = `Welcome! This is your first visit.`;
        } else {
            visitDisplay.textContent = `Welcome back! You have visited this site ${numVisits} times.`;
        }
    }
    numVisits++;
    localStorage.setItem('club-visits', numVisits);

    // 4. Footer Dates
    const yearSpan = document.getElementById("currentyear");
    const modSpan = document.getElementById("lastModified");
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();
    if (modSpan) modSpan.textContent = `Last Modified: ${document.lastModified}`;
});