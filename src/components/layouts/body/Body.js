import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import HomeContainer from "../../../containers/pages/home/HomeContainer";
import History from "../../pages/history/History";
import Movie from "../../pages/movie/Movie";

class Body extends Component {
    render() {

        let router;
        if(this.props.isConnected){
            router = (
                <>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/movies">
                            <Movie />
                        </Route>
                        <Route path="/history">
                            <History />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <HomeContainer />
                        </Route>
                    </Switch>
                </>
            );
        } else {
            router = (
                <>
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <HomeContainer />
                        </Route>
                    </Switch>
                </>
            );
        }

        return (
            <>
                {router}
            </>
        );
    }
}

export default Body;