import React from 'react';

export function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Connexion
        </button>
    );
}

export function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Déconnexion
        </button>
    );
}