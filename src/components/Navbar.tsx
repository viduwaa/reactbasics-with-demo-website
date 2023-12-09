
import {useState} from "react";
import logo from "../assets/V.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../styles/Navbar.css";

let Navbar = () => {

    const [openLinks,setOpenLinks] = useState(false);
    const toggleNavBar= () => {
        setOpenLinks(!openLinks);
    }

    return (
        <div className="navbar">
            <div className="leftside" >
                <img src={logo} alt="" />
                <div className="hiddenLinks close" id={openLinks ? "open" : "close"}>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className="rightside">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={toggleNavBar}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </div>
    );
};

export default Navbar;
