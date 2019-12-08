import React, {Component} from 'react';
import logo from '../../images/logo-supermovies.png';
import {Link} from "react-router-dom";

class Logo extends Component {
    render = () => {
        return (
        <div className="logo">
            {/*<a className="navbar-brand" href="/">*/}
            {/*    <img src={logo} alt="blablamovie logo"/>*/}
            {/*</a>*/}
                <Link className="logo-item item col-s-2 logo--link" to="/">
                    <img className="logo" src={logo} alt="logo superMovies"/>
                </Link>
        </div>
    );
    }
}

export default Logo;

