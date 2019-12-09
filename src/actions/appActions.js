import * as types from './actionsTypes'

export function setXAuthToken(xAuthToken) {
    return {
        type: types.SETXAUTHTOKEN,
        xAuthToken: xAuthToken
    }
}

export function getXAuthToken(login, password) {
    return {
        type: types.GETXAUTHTOKEN,
        login: login,
        password: password
    }
}


export function postXAuthToken(login, email, password, birthdate) {
    return {
        type: types.PERSISTXAUTHTOKEN,
        login: login,
        email: email,
        password: password,
        birthdate: birthdate
    }
}