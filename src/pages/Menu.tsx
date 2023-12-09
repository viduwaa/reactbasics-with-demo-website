import "../styles/Menu.css"
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";

function Menu() {
    return (
        <div className="menu">
            <div className="menu-title">
                <h1>Our Menu</h1>
                <div className="menu-list">
                    {MenuList.map((menuItem,key) => {
                        return (
                            <>
                                <MenuItem
                                    key={key}
                                    image={menuItem.image}
                                    name={menuItem.name}
                                    price={menuItem.price}
                                />
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Menu;
