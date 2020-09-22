import React from "react";
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className={""}>
                <div className={""}>
                    <NavLink to="/pre-junior" activeClassName={""}>Junior</NavLink>
                </div>
                <div className={""}>
                    <NavLink to="/JuniorPlus" activeClassName={""}>JuniorPlus</NavLink>
                </div>

            </nav>

        </div>
    );
}

export default Header;
