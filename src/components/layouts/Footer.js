import React, {Component} from 'react';
import FooterNav from "./FooterNav";
import Logo from "../utils/Logo";
import facebook from '../../images/ic-facebook.png';
import pinterest from '../../images/ic-pinterest.png';
import twitter from '../../images/ic-twitter.png';
import linkedin from '../../images/ic-linkedin.png';

class Footer extends Component {
    render = () => {
        return (
            <footer className="row">
                <section className="navbar navbar-expand-lg navbar-light" id="footlink">
                    <Logo />
                    <FooterNav />
                    <div className="logos-medias">
                        <a className="logo-medias" href="#">
                            <img src={facebook} alt="logo_facebook" />
                            </a>
                        <a className="logo-medias" href="#">
                            <img src={pinterest} alt="logo_pinterest" />
                        </a>
                        <a className="logo-medias" href="#">
                            <img src={twitter} alt="logo_twitter" />
                        </a>
                        <a className="logo-medias" href="#"><
                            img src={linkedin} alt="logo_linkedin" />
                        </a>
                    </div>
                </section>
                <div id="flaticon">
                    Icons made by
                    <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
                        Freepik
                    </a>
                    from
                    <a href="https://www.flaticon.com/" title="Flaticon">
                    www.flaticon.com</a>
                </div>
            </footer>
        );
    }
}

export default Footer;

{/*<div className="footer-row col-xs">*/}
{/*    <ul>*/}
{/*        <li className="logo-item item col-s-2">*/}
{/*            <Logo />*/}
{/*        </li>*/}

{/*        <FooterNav/>*/}

{/*        <li className="media-items">*/}
{/*            <div className="media-item nav-item">*/}
{/*                <a className="facebook-item" href="/facebook">*/}
{/*                    <img*/}
{/*                        className="fb-icon icon"*/}
{/*                        src={facebook}*/}
{/*                        alt="icone facebook"*/}
{/*                    />*/}
{/*                </a>*/}

{/*                <a className="pinterest-item" href="/pinterest">*/}
{/*                    <img*/}
{/*                        className="pint-icon icon"*/}
{/*                        src={pinterest}*/}
{/*                        alt="icone pinterest" />*/}
{/*                </a>*/}
{/*            </div>*/}

{/*            <div className="media-item nav-item">*/}
{/*                <a className="twitter-item" href="/twitter">*/}
{/*                    <img*/}
{/*                        className="tw-icon icon"*/}
{/*                        src={twitter}*/}
{/*                        alt="icone twitter"*/}
{/*                    />*/}
{/*                </a>*/}

{/*                <a className="linkedin-item" href="/linkedin">*/}
{/*                    <img*/}
{/*                        className="linked-icon icon"*/}
{/*                        src={linkedin}*/}
{/*                        alt="icone linkedin"*/}
{/*                    />*/}
{/*                </a>*/}
{/*            </div>*/}

{/*        </li>*/}
{/*    </ul>*/}
{/*</div>*/}