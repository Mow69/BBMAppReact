import React, {Component} from 'react';
import HeaderNav from "./HeaderNav";
import Logo from "./Logo";

class Header extends Component {
    render = () => {
        return (
            <>
                <header className="row App-header">
                    <HeaderNav/>
                </header>


                    {/*<div className="search-logout-item nav-item col-s-1">*/}
                    {/*    <button id="logout-button" className="btn btn-primary btn-lg btn-block" type="submit">*/}
                    {/*        <a id="logout-item" href="">Déconnexion</a>*/}
                    {/*    </button>*/}
                    {/*</div>*/}
            </>
        );
    }
}

export default Header;