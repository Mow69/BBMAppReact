import React, {Component} from 'react';
import { BBMButton } from '../../utils/BBMButton';
import LoginForm from "./form/LoginForm";
import InscriptionForm from "./form/InscriptionForm";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoginForm: false,
            showInscriptionForm: false
        };
    }

    handleCloseLoginForm = () => {
        this.setState({showLoginForm: false});
    }

    handleOpenLoginForm = () => {
        this.setState({showLoginForm: true});
    }

    handleSubmitLoginForm = (login, password) => {
        this.props.getXAuthToken(login, password);
        this.setState({showLoginForm: false});
    }

    handleCloseInscriptionForm = () => {
        this.setState({showInscriptionForm: false});
    }

    handleOpenInscriptionForm = () => {
        this.setState({showInscriptionForm: true});
    }

    handleSubmitInscriptionForm = (login, email, password, birthdate) => {
        this.props.createXAuthToken(login, email, password, birthdate);
        this.setState({showInscriptionForm: false});
    }




    render() {
        let actions;
        if(!this.props.isConnected){
            actions = (
                <div id="home-buttons">
                    <BBMButton
                        style="primary"
                        title="CONNEXION"
                        onClick={this.handleOpenLoginForm}/>

                    <BBMButton
                        style="secondary"
                        title="INSCRIPTION"
                        onClick={this.handleOpenInscriptionForm}/>
                </div>
            );
        }
        return (
            <>
                <div className="accueil-content">
                    <div className="main-hook">
                        <div className="first-hook">
                            <div className="lign1"/>
                            <p className="first-lines-hook"><span
                                className="bold-style">Votez pour votre film préféré,</span><br/>
                                et découvrez le classement
                            </p>
                        </div>

                        <p className="last-lines"> au fil des jours !</p>

                        <p className="members-hook">Déjà <span className="members-number">284 056</span> membres</p>

                        {actions}

                    </div>
                </div>
                <LoginForm show={this.state.showLoginForm} onClose={this.handleCloseLoginForm} onSubmit={this.handleSubmitLoginForm} />
                <InscriptionForm show={this.state.showInscriptionForm} onClose={this.handleCloseInscriptionForm} onSubmit={this.handleSubmitInscriptionForm} />
            </>
        );
    }
}

export default Home;