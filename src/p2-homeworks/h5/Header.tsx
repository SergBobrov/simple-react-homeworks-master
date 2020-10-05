import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";



function Header() {
    return (
        <div>
            <nav className={""}>
                <div className={""}>
                    <NavLink to={PATH.PRE_JUNIOR} activeClassName={""}>PreJunior</NavLink>
                </div>
                <div className={""}>
                    <NavLink to={PATH.JUNIOR} activeClassName={""}>Junior</NavLink>
                </div>
                <div className={""}>
                    <NavLink to={PATH.JUNIOR_PLUS} activeClassName={""}>JuniorPlus</NavLink>
                </div>


            </nav>

        </div>
    );
}

export default Header;
