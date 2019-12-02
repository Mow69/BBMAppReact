import React from 'react';
import splash from '../../images/splash_2019-11-14/splash.png';

const Page2 = () => {
    return (
        // <!--PAGE 2 : Films-->
        <>
            <section id="page-2" className="page page-content">
                <div className="splash">
                    <div className="timer-container">
                        <div className="timer-num-container">
                            <div className="jours">
                                <div className="jours-num">
                                    <p className="dizaines">0</p>
                                    <p className="unites">6</p>
                                </div>
                                <div className="jours-unites">
                                    <p>jours</p>
                                </div>
                            </div>
                            <div className="heures">
                                <div className="heures-num">
                                    <p className="dizaines">2</p>
                                    <p className="unites">1</p>
                                </div>
                                <div className="heures-unites">
                                    <p>heures</p>
                                </div>
                            </div>
                            <div className="minutes">
                                <div className="minutes-num">
                                    <p className="dizaines">1</p>
                                    <p className="unites">9</p>
                                </div>
                                <div className="minutes-unites">
                                    <p>minutes</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <img src={splash}/>
                </div>
            </section>
            <div id="movies-area">
            </div>
            <footer>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                    </ul>
                </nav>
            </footer>
        </>
    );
};

export default Page2;