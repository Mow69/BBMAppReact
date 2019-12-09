import React, {Component} from 'react';

class FooterNav extends Component {
    render = () => {
        return(
            <div className="collapse navbar-collapse">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="#apropos" onClick="showPage(6)">
                        À propos
                        <span className="sr-only"></span>
                    </a>
                    <a className="nav-item nav-link" href="#films" onClick="showPage(2)">Films</a>
                    <a className="nav-item nav-link" href="#historique" onClick="showPage(3)">Historique</a>
                    <a className="nav-item nav-link" href="#contact" onClick="showPage(5)">Contact</a>
                </div>
            </div>
        );
    }
}

export default FooterNav;

{/*<ul className="footer-links nav navbar-nav">*/}
{/*    <li className="propos-item nav-item col-s-1">*/}
{/*        <a href="#infos">À propos</a>*/}
{/*    </li>*/}

{/*    <li className="movies-item nav-item col-s-1">*/}
{/*        <a href="#movies">Films</a>*/}
{/*    </li>*/}

{/*    <li className="historical-item nav-item col-s-1">*/}
{/*        <a href="#historical">Historique</a>*/}
{/*    </li>*/}

{/*    <li className="contact-item nav-item col-s-1">*/}
{/*        <a className="contact-item" href="#contact">Contact</a>*/}
{/*    </li>*/}
{/*</ul>*/}