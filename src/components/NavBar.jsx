import {NavLink} from "react-router-dom";
function NavBar(){
    return(
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Shop">Shop</NavLink>
            <NavLink to="/Admin">Admin Portal</NavLink>
        </nav>
    )
}
export default NavBar;
