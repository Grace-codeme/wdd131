document.addEventListener('DOMContentLoaded', () => {
        // This satisfies the "Use Objects and Arrays" requirement
const events = [
        { name: "Ibadan Photo Walk", date: "Oct 12", type: "Outdoor" },
        { name: "Lighting Workshop", date: "Nov 5", type: "Studio" }
    ];

    // This satisfies "Array Methods" and "Template Literals"
    const eventContainer = document.querySelector('#event-list');
    if (eventContainer) {
        eventContainer.innerHTML = events.map(event =>
            `<div class="event-card">
            <h3>${event.name}</h3>
            <p>Date: ${event.date} | Type: ${event.type}</p>
        </div>`
        ).join('');
    }

    // 2. DOM Selection and Array Method (Requirement)
    const featureContainer = document.querySelector('#feature-container');

    if (featureContainer) {
        // Using .forEach and Template Literals (backticks)
        clubInfo.forEach(item => {
            const div = document.createElement('div');
            div.className = "info-card";
            // Requirement: Exclusive use of template literals
            div.innerHTML = `<h3>${item.title}</h3><p>${item.detail}</p>`;
            featureContainer.appendChild(div);
        });
    }

    // 3. localStorage & Conditional Branching (Requirement)
    const visitDisplay = document.querySelector('#visit-msg');
    let numVisits = Number(window.localStorage.getItem('club-visits')) || 0;

    if (numVisits === 0) {
        visitDisplay.textContent = `Welcome! This is your first visit.`;
    } else {
        visitDisplay.textContent = `Welcome back! You have visited this site ${numVisits} times.`;
    }

    numVisits++;
    localStorage.setItem('club-visits', numVisits);

    // 4. Footer Dates
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
});