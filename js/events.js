document.addEventListener("DOMContentLoaded", () => {
  const listings = document.getElementById("event-listings");
  const filterDropdown = document.getElementById("category-filter");
  const storedEvents = JSON.parse(localStorage.getItem("events")) || [];

  function displayEvents(filteredEvents) {
    listings.innerHTML = "";
    if (filteredEvents.length === 0) {
      listings.innerHTML = "<p>No matching events.</p>";
      return;
    }

    filteredEvents.forEach((event) => {
      const card = document.createElement("article");
      card.classList.add("event-card");

      card.innerHTML = `
        <h2>${event.title}</h2>
        <p><strong>Category: </strong>${event.category}</p>
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
  }

  // Initial load
  displayEvents(storedEvents);

  // Filtering by category
  filterDropdown.addEventListener("change", () => {
    const category = filterDropdown.value;
    if (category === "all") {
      displayEvents(storedEvents);
    } else {
      const filtered = storedEvents.filter((event) => event.category === category);
      displayEvents(filtered);
    }
  });
});
