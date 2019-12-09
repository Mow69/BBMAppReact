import React from 'react';

const Page5 = () => {
    return(
        // <!--PAGE 5 : Inscription-->
        <section id="page-5" className="page">Name
            <h2>Inscription</h2>
            <p>Rejoignez la communauté Blablamovie et votez pour vos films préférés !</p>
            <div>
                <form novalidate id="inscriptionForm" className="form-example">
                    <div className="form-example">
                        <label for="login-inscription">Veuillez entrer un login: </label>
                        <input type="text" name="login" maxlength="18" id="login-inscription" required />
                            <span className="missLogin" aria-live="polite"></span>
                            <small id="inscriptionHelpInline" className="text-muted">
                                Pseudo : doit faire entre 3 et 18 caractères alphanumériques
                            </small>
                    </div>
                    <div className="form-example">
                        <label for="mail-inscription">Veuillez entrer un email: </label>
                        <input type="email" name="mail" id="mail-inscription" required />
                            <span className="missEmail" aria-live="polite"></span>
                            <small id="emailHelpInline" className="text-muted">
                                L'adresse email doit être au format mail classique (exemple@exemple.com) et unique.
                            </small>
                    </div>
                    <div className="form-example">
                        <label for="password-inscription">Veuillez entrer un mot de passe: </label>
                        <input type="password" name="password" id="password-inscription" required />
                            <span className="missPassword" aria-live="polite"></span>
                            <small id="passwordHelpInline" className="text-muted">
                                Le mot de passe doit répondre aux critères RGPD (<a href="https://www.cnil.fr/fr/authentification-par-mot-de-passe-les-mesures-de-securite-elementaires">les mesures de sécurité élémentaires RGPD selon le site la CNIL</a>), soit au minimum 12 caractères, parmi les caractères spéciaux, les minuscules, les majuscules et les chiffres.
                            </small>
                    </div>
                    <div className="form-example">
                        <label for="birth_date-inscription">Veuillez entrer une date de naissance: </label>
                        <input type="date" name="birth_date" id="birth_date-inscription" required />
                            <span className="missBirth_date" aria-live="polite"></span>
                            <small id="birth-dateHelpInline" className="text-muted">
                                La date de naissance doit être postérieure à 2004 : il faut avoir plus de 15 ans pour s'inscrire.
                            </small>
                    </div>
                    <div className="form-example">
                        <button id="btn_inscription" className="bouton_envoi">Inscription</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Page5;