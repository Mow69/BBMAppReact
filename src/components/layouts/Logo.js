import React, {Component} from 'react';
import logo from '../../images/logo-supermovies.png';

class Logo extends Component {
    render = () => {
        return (
        <div className="logo">
            {/*<a className="navbar-brand" href="/">*/}
            {/*    <img src={logo} alt="blablamovie logo"/>*/}
            {/*</a>*/}
            <a className="logo-item item col-s-2 logo--link" href="/">
                <img className="logo" src={logo} alt="logo superMovies"/>
            </a>
        </div>
    );
    }
}

export default Logo;

