import { NavLink } from "react-router-dom"
import { FaComputer } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";

function Header() {

    return (
        <header>

            <h1 className="Header-title"> <FaComputer />  TechZone <FaLaptopCode /> </h1>

            <nav>
                <NavLink to="/WishList" className="nav-link"> Wish List </NavLink>
                <NavLink to="/ShoppingCart" className="nav-link"> Shopping Cart </NavLink>

            </nav>


        </header>
    )
}

export default Header