import {BBMButton} from "../../../utils/BBMButton";
import React, {Component} from "react";
import Modal from "react-bootstrap/Modal";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputEmail: '',
            inputPassword: ''
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConnect = this.handleConnect.bind(this);
    }

    handleEmailChange(event) {
        this.setState({inputEmail: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({inputPassword: event.target.value});
    }

    handleConnect() {
        this.props.onSubmit(this.state.inputEmail, this.state.inputPassword);
    }




    render() {
        return (
            <>
                <Modal show={this.props.show} onHide={this.props.onClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Connexion</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="connexion-form">
                            <form noValidate className="form-example" id="connexionForm">
                                <div className="form-example">
                                    <label htmlFor="mail-connexion">Veuillez entrer votre email: </label>
                                    <input type="email" name="mail" id="mail-connexion" value={this.state.inputEmail} required onChange={this.handleEmailChange}/>
                                        <span className="missEmail" aria-live="polite"/>
                                        <small id="emailHelpInline-co" className="text-muted">
                                            L'adresse email doit être au format mail classique (exemple@exemple.com) et unique.
                                        </small>
                                </div>
                                <div className="form-example">
                                    <label htmlFor="password-connexion">Veuillez entrer votre mot de passe: </label>
                                    <input type="password" name="password" id="password-connexion" value={this.state.inputPassword} required onChange={this.handlePasswordChange} />
                                        <span className="missPassword" aria-live="polite"/>
                                        <small id="passwordHelpInline-co" className="text-muted">
                                            Mot de passe : répond aux critères RGPD, soit au minimum 12 caractères, parmi les caractères
                                            spéciaux, les minuscules, les majuscules et les chiffres.
                                        </small>
                                </div>
                            </form>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <BBMButton
                            style="primary"
                            title="Annuler"
                            onClick={this.props.onClose}/>
                        <BBMButton
                            style="primary"
                            title="CONNEXION"
                            onClick={this.handleConnect}/>
                    </Modal.Footer>
                </Modal>

            </>
        );
    }
}

export default LoginForm;