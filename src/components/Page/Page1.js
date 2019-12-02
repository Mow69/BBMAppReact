import React from 'react';

const Page1 = () => {
    return (
        <>
        <div className="winner">
            <h3>Last week, the winner was :</h3>
            <h1>INTERSTELLAR</h1>
            <p>
                <span style="color: #f7b436">
                    175 014
                </span>
                on 243 136 votes
            </p>
        </div>

        <section id="page-1" className="page page-1 ">
            <div id="bandeau-central">
                <div id="bandeau-presentation">
                    <div className="hook-line">
                        <div className="yellow-line">
                        </div>
                        <div className="hook-p">
                            <h1>Votez pour votre film préféré,</h1>
                            <h2>et découvrez le classement au fil des jours !</h2>
                            <p>Déjà
                                <span style="color: #f7b436">
                                    284 056 membres
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div id="button">
                    <button className="button-connexion" onclick="showPage(4)">CONNEXION</button>
                    <button className="button-inscription" onclick="showPage(5)">INSCRIPTION</button>
                </div>
            </div>
        </section>
            </>
    );
};



export default Page1;