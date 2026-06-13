import "../styles/Home.css";
import img from "../assets/back.jpg";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <section className="hero" style={{backgroundImage:`url(${img})`,}}>
                <h1> Welcome to the Ticket Reservation System </h1>
                <p>Book tickets for concerts , sports events, conferences, festivals and more...</p> 
                <button onClick={() => navigate("/events")}> Explore Events </button>
            </section>
        </div>
    );
}

export default Home;