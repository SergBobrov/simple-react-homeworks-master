import React from "react";
import {Switch, HashRouter, Route, Redirect} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    JUNIOR: "/Junior",
    JUNIOR_PLUS: "/Jun iorPlus"
}

function Routes() {
    return (

        <div>
            {/*Switch выбирает первый подходящий роут*/}

            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
                <Route exact path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route exact path={PATH.JUNIOR} render={() => <Junior/>}/>
                <Route exact path={PATH.JUNIOR_PLUS} render={() => <JuniorPlus/>}/>
                <Route render={() => <Error404/>}/>
            </Switch>
        </div>

    );
}

export default Routes;

