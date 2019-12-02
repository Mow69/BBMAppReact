import React from 'react';

const Page9 = () => {
    return(
        // <!--PAGE 9 : Validation inscription-->
        <div id="popup-inscription">
            <div>
                <button class="popup-close" onclick="showPopupInscription(false)">close</button>
                <h2>Inscription validée</h2>
                <p>Félicitations, vous êtes des nôtres !</p>
            </div>
        </div>
    );
};

export default Page9;