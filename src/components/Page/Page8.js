import React from 'react';

const Page8 = () => {
    return(
        // <!--PAGE 8 : Contact -->
        <section id="page-8" className="page">
            <h2>Contact</h2>
            <p>Vous souhaitez nous écrire ?</p>
            <div>
                <form id="contact-form" action="http://localhost:8000/users/add" method="post" className="form-example">
                    <div className="form-example">
                        <label for="contact-nom">Veuillez renseigner votre nom: </label>
                        <input type="text" name="contact-form" id="contact-nom" required />
                    </div>
                    <div className="form-example">
                        <label for="mail-comment">Veuillez entrer un email: </label>
                        <input type="email" name="mail" id="mail-comment" required />
                    </div>
                    <div className="form-example">
                        <label for="contact-comment">Veuillez écrire un commentaire : </label>
                        <input type="text" name="contact" id="contact-comment" required />
                    </div>
                    <div className="form-example">
                        <input type="submit" value="Envoyer" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Page8;