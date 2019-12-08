import React from 'react';

const Page4 = () => {
    return(
        // <!--PAGE 4 : OldConnexion-->
        <section id="page-4" className="page">
            <h2>Connexion</h2>
            <p>Connectez-vous pour voter dès maintenant pour vos films préférés !</p>
            <div>
                <form novalidate className="form-example" id="connexionForm">
                    <div className="form-example">
                        <label for="mail-connexion">Veuillez entrer votre email: </label>
                        <input type="email" name="mail"  id="mail-connexion" required />
                            <span className="missEmail" aria-live="polite"></span>
                            <small id="emailHelpInline-co" className="text-muted">
                                L'adresse email doit être au format mail classique (exemple@exemple.com) et unique.
                            </small>
                    </div>
                    <div className="form-example">
                        <label for="password-connexion">Veuillez entrer votre mot de passe: </label>
                        <input type="password" name="password" id="password-connexion" required />
                            <span className="missPassword" aria-live="polite"></span>
                            <small id="passwordHelpInline-co" className="text-muted">
                                Mot de passe : répond aux critères RGPD, soit au minimum 12 caractères, parmi les caractères spéciaux, les minuscules, les majuscules et les chiffres.
                            </small>
                    </div>
                    <div className="form-example">
                        <button id="btn_login" className="bouton_envoi">Connexion</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Page4;