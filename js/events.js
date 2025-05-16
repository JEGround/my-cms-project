document.addEventListener("DOMContentLoaded", () => {
  const listings = document.getElementById("event-listings");
  const storedEvents = JSON.parse(localStorage.getItem("events")) || [];

  if (storedEvents.length === 0) {
    listings.innerHTML = "<p>No events found. Be the first to submit one!</p>";
    return;
  }

  storedEvents.forEach((event) => {
    const card = document.createElement("article");
    card.classList.add("event-card");

    card.innerHTML = `
      <h2>${event.title}</h2>
      <p><strong>${event.date}</strong> at ${event.time}</p>
      <p>${event.location}</p>
      <p>${event.description}</p>
      <p>
        <a href="${event.ticketLink}" target="_blank">🎟 Buy Tickets</a> |
        <a href="${event.website}" target="_blank">🌐 Event Site</a>
      </p>
    `;

    listings.appendChild(card);
  });
});
