import * as types from './actionsTypes'

export function setXAuthToken(xAuthToken) {
    return {
        type: types.SETXAUTHTOKEN,
        xAuthToken: xAuthToken
    }
}