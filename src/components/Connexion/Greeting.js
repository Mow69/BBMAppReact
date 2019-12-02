import React from  'react';

function UserGreeting(props) {
    return <h1>Bienvenue !</h1>;
}

function GuestGreeting(props) {
    return <h1>Veuillez vous inscrire.</h1>;
}

export default  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

// ReactDOM.render(
//     // Essayez de changer ça vers isLoggedIn={true} :
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('root')
// );