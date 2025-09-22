import { NavLink } from "react-router-dom"
import { FaComputer } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";

function Header() {

    return (
        <header>

            <h1 className="Header-title"> <FaComputer />  TechZone <FaLaptopCode /> </h1>

            <nav>
                <NavLink to="/WishList" className="nav-link"> <CiBookmark />  Wish List </NavLink>
                <NavLink to="/ShoppingCart" className="nav-link"> <FaCartShopping /> Shopping Cart </NavLink>

            </nav>


        </header>
    )
}

export default Header