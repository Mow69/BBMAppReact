import { connect } from 'react-redux';
import App from "../App";
import { conf } from '../config.js';
import * as appActions from '../actions/appActions';

const mapStateToProps = (state) => {
    return {
        state: {
            app: state.app
        },
        isConnected: !!(state.app.xAuthToken && state.app.xAuthToken.value)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(appActions.setXAuthToken(null));
        },
        getXAuthToken: (login, password) => {
            fetch(`${conf.API_SERVER}/auth-tokens`, {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    login: login,
                    password: password
                })
            }).then(function(response) {
                return response.json();
            }).then(function(data) {
                dispatch(appActions.setXAuthToken(data));
            });
        }
    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;