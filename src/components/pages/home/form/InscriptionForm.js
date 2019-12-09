import React, {Component} from 'react';
import {BBMButton} from "../../../utils/BBMButton";
import Modal from "react-bootstrap/Modal";



class InscriptionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputLogin: '',
            inputEmail: '',
            inputPassword: '',
            inputBirthDate: ''
        };

        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleBirthDate = this.handleBirthDate.bind(this);
        this.handleInscription = this.handleInscription.bind(this);

    }

    handleLoginChange(event) {
        this.setState({inputLogin: event.target.value});
    }

    handleEmailChange(event) {
        this.setState({inputEmail: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({inputPassword: event.target.value});
    }

    handleBirthDate(event) {
        this.setState({inputBirthDate: event.target.value});
    }

    handleInscription() {
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
                        <div className="inscription-form">
                            <form noValidate className="form-example" id="inscriptionForm">
                                <div className="form-example">
                                    <label htmlFor="login-inscription">Veuillez entrer votre pseudo: </label>
                                    <input type="login" name="login" id="login-inscription" value={this.state.inputLogin} required onChange={this.handleLoginChange}/>
                                    <span className="missLogin" aria-live="polite"/>
                                    <small id="loginHelpInline-co" className="text-muted">
                                        Le pseudo doit faire entre 3 et 18 caractères alphanumériques
                                    </small>
                                </div>
                                <div className="form-example">
                                    <label htmlFor="mail-inscription">Veuillez entrer votre email: </label>
                                    <input type="email" name="mail" id="mail-inscription" value={this.state.inputEmail} required onChange={this.handleEmailChange}/>
                                    <span className="missEmail" aria-live="polite"/>
                                    <small id="emailHelpInline-co" className="text-muted">
                                        L'adresse email doit être au format mail classique (exemple@exemple.com) et unique.
                                    </small>
                                </div>
                                <div className="form-example">
                                    <label htmlFor="password-inscription">Veuillez entrer votre mot de passe: </label>
                                    <input type="password" name="password" id="password-inscription" value={this.state.inputPassword} required onChange={this.handlePasswordChange} />
                                    <span className="missPassword" aria-live="polite"/>
                                    <small id="passwordHelpInline-co" className="text-muted">
                                        Mot de passe : répond aux critères RGPD, soit au minimum 12 caractères, parmi les caractères
                                        spéciaux, les minuscules, les majuscules et les chiffres.
                                    </small>
                                </div>
                                <div className="form-example">
                                    <label htmlFor="birthdate-inscription">Veuillez entrer votre pseudo: </label>
                                    <input type="date" name="birthdate" id="birthdate-inscription" value={this.state.inputBirthDate} required onChange={this.handleBirthDate}/>
                                    <span className="missBirthDate" aria-live="polite"/>
                                    <small id="birthdateHelpInline-co" className="text-muted">
                                        La date de naissance doit être postérieure à 2004 : il faut avoir plus de 15 ans pour s'inscrire.
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
                            title="INSCRIPTION"
                            onClick={this.handleInscription}/>
                    </Modal.Footer>
                </Modal>

            </>
        );
    }
}

export default InscriptionForm;


