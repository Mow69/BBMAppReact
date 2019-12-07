import React, {Component} from 'react';
import {LoginButton, LogoutButton} from "./LoginButton";
import Greeting from "./Greeting";

class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

// ReactDOM.render(
//     <LoginControl />,
//     document.getElementById('root')
// );


export default LoginControl;

{/*<div id="home-buttons">*/}
{/*    <button*/}
{/*        id="connexion-btn"*/}
{/*        className="btn"*/}
{/*        onClick={connexionOnClickHandler}*/}
{/*    >*/}
{/*        CONNEXION*/}
{/*    </button>*/}

{/*    <button*/}
{/*        id="inscription-btn"*/}
{/*        className="btn"*/}
{/*        onClick={inscriptionOnClickHandler}*/}
{/*    >*/}
{/*        INSCRIPTION*/}
{/*    </button>*/}
{/*</div>*/}