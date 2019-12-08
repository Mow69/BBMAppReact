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