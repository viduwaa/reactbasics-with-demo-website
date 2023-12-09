import "../styles/MenuItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function MenuItem({ image, name, price }: any) {
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})` }}>
                <div className="content">
                    <div className="details">
                        <h2>{name}</h2>
                        <p>{price}</p>
                    </div>
                    <div className="order">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;
