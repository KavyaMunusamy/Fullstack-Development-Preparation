import React from "react";

function Events() {
  const upComingEvents = [
    {
      id: 1,
      title: "Music Concert",
      date: "10 August 2026",
      venue: "Chennai",
    },
    {
      id: 2,
      title: "Tech Conference",
      date: "15 September 2026",
      venue: "Bangalore",
    },
  ];

  const ongoingEvents = [
    {
      id: 3,
      title: "Food Festival",
      date: "Friday, 05 August 2026",
      venue: "Chennai",
    },
    {
      id: 4,
      title: "Art Exhibition",
      date: "Saturday, 06 August 2026",
      venue: "Bangalore",
    },
  ];

  const pastEvents = [
    {
      id: 5,
      title: "College Cultural Fest",
      date: "10 May 2026",
      venue: "Chennai",
    },
  ];

  const bookTicket = async (event) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/book-ticket",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            eventId: event.id,
            title: event.title,
            date: event.date,
            venue: event.venue,
            username: "John Doe", // Replace with the logged-in user's username
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message || "Ticket booked successfully!");
      } else {
        alert(data.message || "Booking failed!");
      }
    } catch (error) {
      console.error("Booking error:", error);
      alert("Unable to connect to the server.");
    }
  };

  return (
    <>
      <section>
        <h2>Upcoming Events</h2>
        <div className="event-row">
          {upComingEvents.map((event) => (
            <div className="event-card" key={event.id}>
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Venue: {event.venue}</p>
              <button onClick={() => bookTicket(event)}>
                Book Ticket
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Ongoing Events</h2>
        <div className="event-row">
          {ongoingEvents.map((event) => (
            <div className="event-card" key={event.id}>
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Venue: {event.venue}</p>
              <button onClick={() => bookTicket(event)}>
                Book Ticket
              </button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Past Events</h2>
        <div className="event-row">
          {pastEvents.map((event) => (
            <div className="event-card" key={event.id}>
              <h3>{event.title}</h3>
              <p>Date: {event.date}</p>
              <p>Venue: {event.venue}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Events;