import React from "react";
import Header from "./Header";
import Routes from "./Routes";
import {HashRouter} from "react-router-dom";

function HW5() {
    return (
        <HashRouter>
            <div>
                <Header/>
                <Routes/>
            </div>
        </HashRouter>
    );
}

export default HW5;
