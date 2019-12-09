import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {homeUrl, moviesUrl} from "../../constants";
import Movies from "../Movies";
import Home from "../Home";

class MainContainer extends Component {
    render = () => {
        return (
            <section id="main-container" className="main-content row">
                <Router className="row">
                    {/*Il faut aller des url les plus spécifiques aux plus générales, car le switch s'arrête dès le premier résultat correspondant en lisant l'url de gauche à droite.*/}
                    <Switch>
                        <Route exacte path={moviesUrl} component={Movies} />
                        <Route exacte path={homeUrl} component={Home} />
                    </Switch>
                </Router>
            </section>
        );
    }
}

export default MainContainer;
