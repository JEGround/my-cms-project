document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("event-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent the page from reloading

    // Grab form data
    const eventData = {
      title: form["event-title"].value,
      date: form["event-date"].value,
      time: form["event-time"].value,
      location: form["event-location"].value,
      description: form["event-description"].value,
      ticketLink: form["event-ticket-link"].value,
      website: form["event-website"].value,
    };

    console.log("Event Submitted:", eventData);

    // Optional: Display below the form as a preview
    const preview = document.createElement("div");
    preview.innerHTML = `
      <h3>Preview:</h3>
      <p><strong>${eventData.title}</strong></p>
      <p>${eventData.date} @ ${eventData.time}</p>
      <p>${eventData.location}</p>
      <p>${eventData.description}</p>
      <p>🎟️ <a href="${eventData.ticketLink}" target="_blank">Buy Tickets</a></p>
      <p>🌐 <a href="${eventData.website}" target="_blank">Event Website</a></p>
      <hr />
    `;

    form.insertAdjacentElement("afterend", preview);

    form.reset(); // clear the form
  });
});


