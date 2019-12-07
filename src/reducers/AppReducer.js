import * as types from '../actions/actionsTypes';

const initialState = {
    xAuthToken: null
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.SETXAUTHTOKEN :
            return {
                ...state,
                xAuthToken: action.xAuthToken
            };

        default:
            return state;
    }
};

export default AppReducer;