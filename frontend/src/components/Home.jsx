function Home() {
    const upComingevents = [{
        id:1,
        title: "Music Concert",
        data: "10 August 2026",
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
        }
    ];
    return (
        <div>
            <section className="hero">
                <h1> Welcome to the Ticket Reservation System </h1>
                <p>Book tickets for concerts , sports events, conferences, festivals and more...</p> 
                <button> Explore Events </button>
            </section>
            <section>
                <h2> Upcoming Events </h2>
                {upComingevents.map((event) => (
                    <div key={event.id}>
                        <h3> {event.title} </h3>
                        <p> Date : {event.date} </p>
                        <p> Venue: {event.venue} </p>
                        <button>Book Ticket </button>  
                    </div>
                ))}
            </section>
            <section>
                <h2> Ongoing Events </h2>
                {ongoingEvents.map((event) => (
                    <div key={event.id}>
                        <h3> {event.title} </h3>
                        <p> Date: {event.date} </p>
                        <p> Venue: {event.venue} </p>
                        <button> Book Ticket </button>
                    </div>
                ))}
            </section>
            <section>
                <h2> Past Events </h2>
                {pastEvents.map((event) => (
                    <div key={event.id}>
                        <h3> {event.title} </h3>
                        <p> Date: {event.date} </p>
                        <p> Venue: {event.venue} </p>
                    </div>
                ))}
            </section> 
        </div>
    );
}

export default Home;