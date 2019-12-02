import React, {Component} from 'react';
import Logo from "./Logo";
import transparency from "../../images/transparency.png";

class HeaderNav extends Component {
    render = () => {
        return (

        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Logo />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="#apropos">
                            À propos
                            <span className="sr-only"></span>
                        </a>
                        <a className="nav-item nav-link" href="#films">Films</a>
                        <a className="nav-item nav-link" href="#historique">Historique</a>
                        <a className="nav-item nav-link" href="#contact">Contact</a>
                    </div>
                </div>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Rechercher" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                            <img className="search-logo" src={transparency} alt="logo" />

                        </button>
                </form>
            </nav>
        </>


    );
    }
    }

    export default HeaderNav;

