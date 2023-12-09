import { Link } from "react-router-dom";
import "../styles/Home.css";
import BannerImage from "../assets/bg.jpg";

let Home = () => {
    return (
        <div className="Home">
            <div className="header-part" style={{backgroundImage:`url(${BannerImage})` }}>
                <h1> WE SELL PIZZA</h1>
                <p>Taste it</p>
                <Link to="/menu">
                    <button>Our Menu</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
