import React, {Component} from 'react';
import Logo from "../../utils/Logo";
import {BrowserRouter as Router, Link} from "react-router-dom";
import transparency from "../../../images/transparency.png";
import { BBMButton } from '../../utils/BBMButton';

class Header extends Component {
    render() {

        let router;
        if(this.props.isConnected){
            router = (
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/about">À propos</Link>
                    <Link className="nav-item nav-link" to="/movies">Films</Link>
                    <Link className="nav-item nav-link" to="/history">Historique</Link>
                    <Link className="nav-item nav-link" to="/contact">Contact</Link>
                    <BBMButton
                        style="secondary"
                        title="DECONNEXION"
                        onClick={this.props.onLogout} />
                </div>
            );
        } else {
            router = (
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/about">À propos</Link>
                    <Link className="nav-item nav-link" to="/contact">Contact</Link>
                </div>
            );
        }

        return (
            <>
                <header className="row App-header">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Logo />
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            {router}
                        </div>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Rechercher" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                <img className="search-logo" src={transparency} alt="logo" />
                            </button>
                        </form>
                    </nav>
                </header>
            </>
        );
    }
}

export default Header;